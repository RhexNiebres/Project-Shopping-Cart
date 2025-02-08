import { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [checkoutMessage, setCheckoutMessage] = useState(""); 

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const handleDelete = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

  };

  const handleCheckout = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    setCheckoutMessage("Thank you for your purchase! Your cart is now empty.");
    
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <button
        onClick={handleCheckout}
        disabled={cart.length === 0}
        className={`mb-4 py-2 px-4 rounded transition-transform duration-200 
            ${cart.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-400'}`}
      >
        Checkout
      </button>
      {checkoutMessage && <p className="text-green-500">{checkoutMessage}</p>}


      <div className="flex flex-wrap gap-4">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border-b border-gray-300">
              <img src={item.image} alt="Product Image" className="h-24 w-24 object-contain" />
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.amount}</p>
              <p>Total: ${(item.price * item.amount).toFixed(2)}</p>
              <button
                onClick={() => handleDelete(item.id)}
                className="mt-2 bg-red-500 text-white py-1 px-4 rounded hover:bg-red-400"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
