import { useState, useEffect } from "react";

const useProductData = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { products, error, loading };
};

const ItemCard = ({ product }) => {
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
    <div className="border border-black transition-transform duration-500 transform hover:scale-110 hover:shadow-lg p-4">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title}className="w-24" />
      <p>Price: ${product.price}</p>
      <div>
        <button onClick={handleDecrement} className="border border-black">-</button>
        <input 
        className="border border-black"
          value={amount} 
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={handleIncrement} className="border border-black">+</button>
      </div>
      <p className="border border-black">Amount:  {amount}</p>
    </div>
  );
};

const ProductList = () => {
  const { products, error, loading } = useProductData();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
      {products.map((product) => (
        <ItemCard key={product.id} 
         product={product} />
      ))}
    </div>
  );
};

export default ProductList;  