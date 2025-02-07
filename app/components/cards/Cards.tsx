import Image from "next/image";

interface CardsProps {
  image: string;
  value: string;
  suit: string;
  code: string;
}

const Cards: React.FC<CardsProps> = ({ image, value, suit, code }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Image
        src={image}
        alt={`Card ${code}`}
        width={300}
        height={450}
        className="w-full h-auto"
      />
      <div className="text-center mt-2">
        <h3 className="text-lg font-semibold text-gray-800">
          {value} of {suit}
        </h3>
      </div>
    </div>
  );
};

export default Cards;
