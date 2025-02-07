import { configureStore } from "@reduxjs/toolkit";
import deckCardReducer from "@/app/components/cards/CardsSlice";

export const store = configureStore({
  reducer: {
    deckCard: deckCardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
