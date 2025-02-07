import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-2xl font-bold">Deck of Cards</span>
      </div>
      <nav className="flex space-x-4">
        <a href="#" className="hover:text-gray-300">
          Home
        </a>
        <a href="#" className="hover:text-gray-300">
          Game
        </a>
        <a href="#" className="hover:text-gray-300">
          About
        </a>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </nav>
    </header>
  );
}
