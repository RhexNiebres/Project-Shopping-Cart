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

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
      {products.length > 0 ? (
        products.map((product) => (
          <ItemCards key={product.id} product={product} />
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
  
};

export default ProductList;
