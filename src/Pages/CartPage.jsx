import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDelete = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    updateCart(updatedCart);
  };

  const handleIncrement = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, amount: item.amount + 1 } : item,
    );
    updateCart(updatedCart);
  };

  const handleDecrement = (itemId) => {
    const updatedCart = cart
      .map((item) =>
        item.id === itemId ? { ...item, amount: item.amount - 1 } : item,
      )
      .filter((item) => item.amount > 0); // Remove item if amount becomes 0
    updateCart(updatedCart);
  };

  const handleCheckout = () => {
    updateCart([]);
    navigate("/Checkoutpage"); // Redirect to checkout page
  };

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.amount,
    0,
  );
  return (
    <div className="h-screen">
      <h1 className="p-3 text-center text-4xl text-orange-500">
        Your Cart
      </h1>


      <div className="flex flex-wrap gap-4">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4  border-2 rounded-2xl shadow-2xl text-center mx-8"
            >
              <img
                src={item.image}
                alt="Product Image"
                className="mx-auto h-24 w-24 object-contain"
              />
              <h3 className="w-25 truncate">{item.title}</h3>
              <p className="text-center">Price: ${item.price}</p>
              <p className="text-center">
                Total: ${(item.price * item.amount).toFixed(2)}
              </p>

              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="rounded bg-orange-500 px-3 py-1 text-white hover:bg-orange-400"
                >
                  -
                </button>
                <span>{item.amount}</span>
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="rounded bg-orange-500 px-3 py-1 text-white hover:bg-orange-400"
                >
                  +
                </button>
              </div>
              <div className="flex items-center justify-center ">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="mt-2 rounded bg-red-500 px-4 py-1 text-white hover:bg-red-400"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex h-screen w-screen items-center justify-center  text-gray-500">
            Your cart is empty.
          </div>
        )}
      </div>
      <div className="fixed bottom-20 right-4 flex flex-col items-end justify-end pb-0">
        <div className="mt-4 text-lg font-bold">
          Grand Total: ${grandTotal.toFixed(2)}
        </div>
        <button
          onClick={handleCheckout}
          disabled={cart.length === 0}
          className={`w-28 rounded py-2 ${
            cart.length === 0
              ? "cursor-not-allowed bg-gray-400"
              : "bg-green-500 hover:bg-green-400"
          }`}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
