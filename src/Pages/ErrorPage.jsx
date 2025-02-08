import { Link } from "react-router-dom";
import ErrorImage from "../assets/ErrorImage.jpg"

const ErrorPage = () => {
  return (
    <div>
      <img src= {ErrorImage} alt="Error Image" />
      <h1>Oh no, this route doesn&apos;t exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;
