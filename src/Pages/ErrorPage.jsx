import { Link } from "react-router-dom";
import ErrorImage from "../assets/ErrorImage.jpg";

const ErrorPage = () => {
  return (
    <div>
      <img className="mx-auto h-96 w-96" src={ErrorImage} alt="Error Image" />
      <h1 className="text-center">Oh no, this route doesn&apos;t exist!</h1>
      <div className="text-center">
        <Link to="/">
          You can go back to the home page by clicking{" "}
          <button className="w-15 h-9 bg-black p-2 text-orange-500">
            {" "}
            here{" "}
          </button>
          though!
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
