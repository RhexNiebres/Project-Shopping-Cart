import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-center bg-orange-400 p-10 rounded text-white font-bold text-2xl">
        <h1 className="text-center p-4">Oh no, this route does not exist!</h1>
        <Link to="/">
          You can go back to the home page by clicking{" "}
          <button className="w-15  bg-black px-4 py-2 text-white hover:text-orange-500 rounded">
            {" "}
            here{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
