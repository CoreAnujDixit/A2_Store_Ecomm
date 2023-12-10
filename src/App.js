import { Route, Routes } from "react-router";
import Navbar from "./Comps/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div> <center><img src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="" /></center></div>} />
      </Routes>
    </div>
  );
}
export default App;
