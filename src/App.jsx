import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar/>
      <hr />
      <Outlet />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
