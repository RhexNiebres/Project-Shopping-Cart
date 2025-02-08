import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
function Header() {
  const navigationClass = `rounded-md bg-orange-300 p-2 hover:bg-orange-600 hover:scale-110  active:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 `;
  return (
    <header className="flex items-center bg-orange-500 py-2">
      <nav className="flex flex-1 flex-row justify-between px-5">
        <div className="flex gap-x-2">
          <Link to="/" className={navigationClass}>
            Home
          </Link>
          <Link to="shop" className={navigationClass}>
            Shop
          </Link>
        </div>
        <div>
          <Link
            to="cart"
            className={"flex items-center hover:text-white " + navigationClass}
          >
            <ShoppingBag className="pr-2" />
            <span>Cart</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
