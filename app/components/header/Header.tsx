import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">Deck of Cards</div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition duration-300">
          Login
        </button>
      </div>
    </header>
  );
}
