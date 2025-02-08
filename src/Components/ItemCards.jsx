import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const ItemCards = ({ product, addToCart }) => {
  const [amount, setAmount] = useState(1);

  const handleIncrement = () => {
    setAmount(amount + 1);
  };

  const handleDecrement = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, amount);
  };

  return (
    <div className="transform rounded-lg border border-gray-400 p-4 transition-transform duration-500 hover:scale-110 hover:shadow-lg">
      <h3>{product.title}</h3>
      <div className="flex flex-col items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-24 w-24 object-contain"
        />
        <p>Price: ${product.price}</p>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={handleDecrement}
          disabled={amount === 0}
          className={`w-7 rounded-l-lg border border-black text-black transition-transform duration-200 hover:scale-110 ${
            amount === 0
              ? "cursor-not-allowed bg-gray-400 hover:bg-gray-400"
              : "bg-orange-500 hover:bg-orange-400"
          }`}
        >
          <Minus className="hover:text-white" />
        </button>
        <input
          className="w-24 border border-black text-center"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button
          onClick={handleIncrement}
          className="w-7 rounded-r-lg border border-black bg-orange-500 text-black transition-transform duration-200 hover:scale-110 hover:bg-orange-400"
        >
          <Plus className="hover:text-white" />
        </button>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleAddToCart}
          disabled={amount === 0}
          className={`mt-4 rounded px-4 py-2 transition-transform duration-200 ${
            amount === 0
              ? "cursor-not-allowed bg-gray-400"
              : "bg-orange-500 hover:bg-orange-400"
          }`}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemCards;
