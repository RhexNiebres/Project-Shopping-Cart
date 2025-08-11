import Navbar from "./Components/NavBar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar/>
      <hr />
      <Outlet />

    </div>
  );
}

export default App;
