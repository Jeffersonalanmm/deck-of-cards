import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Card {
  code: string;
  image: string;
  value: string;
  suit: string;
  deckId: string;
}

interface CardsState {
  cards: Card[];
  isLoading: boolean;
  error: string | null;
  deckId: string;
}

const initialState: CardsState = {
  cards: [],
  isLoading: true,
  error: null,
  deckId: "",
};

export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  const deckResponse = await fetch(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  const deckData = await deckResponse.json();
  const deckId = deckData.deck_id;

  const cardsResponse = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
  );
  const cardsData = await cardsResponse.json();

  return { cards: cardsData.cards, deckId };
});

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cards = action.payload.cards;
        state.deckId = action.payload.deckId;
        state.isLoading = false;
      })
      .addCase(fetchCards.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default cardsSlice.reducer;
