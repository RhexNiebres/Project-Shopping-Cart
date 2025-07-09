import ProductList from "../Components/ProductList.jsx";

function Shop() {
  return (
    <div className="flex flex-col ">
      <h1 className="bg-orange-500 text-center text-white font-medium text-4xl p-2 rounded-br-2xl w-fit">
        Shop for the latest items!
      </h1>
      <ProductList />
    </div>
  );
}

export default Shop;
