import { useState, useEffect } from "react";
import ItemCards from "./ItemCards";

const useProductData = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { products, error, loading };
};

const ProductList = () => {
  const { products, error, loading } = useProductData();
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || [],
  );
  const [itemAddedMessage, setItemAddedMessage] = useState("");

  const addToCart = (product, amount) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      //if product exist update its quantity
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, amount: item.amount + amount }
            : item,
        );
      } else {
        return [...prevCart, { ...product, amount }];
      }
    });

    setItemAddedMessage(` ${product.title} was added to the cart!`);
    setTimeout(() => {
      setItemAddedMessage("");
    }, 5000);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); //save cart data to locale
  }, [cart]);

  if (loading)
    return (
      <div className="flex h-96 flex-1 items-center justify-center">
        <svg
          width="100px"
          height="100px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <circle
            fill="#FF6737"
            stroke="#FF6737"
            stroke-width="15"
            r="15"
            cx="40"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="2"
              values="65;135;65;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.4"
            ></animate>
          </circle>
          <circle
            fill="#FF6737"
            stroke="#FF6737"
            stroke-width="15"
            r="15"
            cx="100"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="2"
              values="65;135;65;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.2"
            ></animate>
          </circle>
          <circle
            fill="#FF6737"
            stroke="#FF6737"
            stroke-width="15"
            r="15"
            cx="160"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="2"
              values="65;135;65;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="0"
            ></animate>
          </circle>
        </svg>
      </div>
    );
  if (error) return <p>A network error was encountered</p>;

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ItemCards
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>

      {itemAddedMessage && (
        <div
          className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 transform rounded-md bg-green-500 p-4 text-white shadow-lg transition-all duration-500"
          style={{
            opacity: itemAddedMessage ? 1 : 0,
            transform: itemAddedMessage
              ? "translateX(-50%)"
              : "translateX(-50%) translateY(20px)",
          }}
        >
          {itemAddedMessage}
        </div>
      )}
    </div>
  );
};

export default ProductList;
