import ProductList from "../Components/ProductList.jsx";

function Shop() {
  return (
    <div className="py-2">
      <h1 className="text-center text-4xl text-orange-500">
        Shop for the latest items!
      </h1>
      <ProductList />
    </div>
  );
}

export default Shop;
