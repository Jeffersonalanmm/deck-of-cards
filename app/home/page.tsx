"use client";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Card from "../components/cards/Cards";
import ChangeCardsButton from "../components/cards/cardButton";

export default function Home() {
  const { cards, isLoading } = useSelector(
    (state: RootState) => state.deckCard
  );

  return (
    <div className="container mx-auto px-4 py-8 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading
          ? Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 animate-pulse h-48 rounded-lg"
              ></div>
            ))
          : cards.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                value={card.value}
                suit={card.suit}
                code={card.code}
              />
            ))}
      </div>
      <ChangeCardsButton />
    </div>
  );
}
