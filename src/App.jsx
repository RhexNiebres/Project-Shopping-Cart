import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <hr />
      <Outlet />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
