import { useState } from "react";
import { Minus, Plus } from 'lucide-react';


const ItemCards = ({ product }) => {
  
  const [amount, setAmount] = useState(1);

  const handleIncrement = () => {
    setAmount(amount + 1);
  };

  const handleDecrement = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className=" rounded-lg border border-black transition-transform duration-500 transform hover:scale-110 hover:shadow-lg p-4 ">
      <h3>{product.title}</h3>
      <div className="flex items-center justify-center flex-col">
        <img src={product.image} alt={product.title} className="w-24" />
        <p>Price: ${product.price}</p>
      </div>
      <div className="flex items-center justify-center  ">
        <button onClick={handleDecrement} className="border border-black rounded-l-lg w-7 bg-orange-500 text-black hover:bg-orange-400  hover:scale-110 transition-transform duration-200">
          <Minus className="hover:text-white "/>
        </button>
        <input
          className="border border-black w-24 text-center"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={handleIncrement} className="border border-black rounded-r-lg w-7 bg-orange-500 text-black hover:bg-orange-400  hover:scale-110 transition-transform duration-200 ">
        <Plus className="hover:text-white "/>
        </button>
      </div>
    </div>
  );
};

export default ItemCards;
