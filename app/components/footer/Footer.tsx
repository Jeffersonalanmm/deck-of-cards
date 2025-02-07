import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <span className="text-sm">
            &copy; {new Date().getFullYear()} Deck of Cards. Todos os direitos
            reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
