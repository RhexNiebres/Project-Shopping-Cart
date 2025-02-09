import { Link } from "react-router-dom";
import thanks from "../assets/thanks.png";
const CheckOutPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <Link to="/">
        <img className="mx-auto  h-screen" src={thanks} alt="thank you image" />
        </Link>
      </div>
    </div>
  );
};

export default CheckOutPage;
