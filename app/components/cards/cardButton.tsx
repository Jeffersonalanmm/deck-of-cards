"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { fetchCards } from "./CardsSlice";
import { AppDispatch } from "../../redux/store";

const CardButton: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchCards());
  };

  return (
    <div className="text-center mt-6">
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Trocar Cartas
      </button>
    </div>
  );
};

export default CardButton;
