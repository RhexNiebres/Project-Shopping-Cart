import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const navigationClass = `rounded-md p-2 hover:bg-orange-500 hover:text-white scale-100 hover:scale-110 transform transition-transform duration-500 will-change-transform
`;
  return (
    <nav className="sticky top-0 flex flex-1 flex-row items-center justify-between px-4 py-2 shadow-xl z-10">
      <div className="scale-100 transform transition-transform duration-500 will-change-transform hover:scale-110">
        <Link to="/" className="font-bold text-orange-500 text-xl">
          Cartsy
        </Link>
      </div>
      <div className="flex gap-x-2">
        <Link to="shop" className={navigationClass}>
          Shop
        </Link>
        <Link
          to="cart"
          className="flex scale-100 transform items-center rounded bg-orange-500 p-2 font-semibold text-white transition-transform duration-500 hover:scale-110 hover:text-white will-change-transform
"
        >
          <ShoppingBag className="pr-2" />
          <span>Cart</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
