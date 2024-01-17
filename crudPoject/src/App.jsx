import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./auth/register";
import Login from "./auth/Login";
import { ToastContainer } from "react-toastify";
import Profile from "./component/Profile";
import ProductDetail from "./component/ProductDetail";
import CardDetails from "./component/CardDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Pagenotfound/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/productDetail/:id" element={<ProductDetail/>}/>
          <Route path='/carddetails' element={<CardDetails/>}/>
         
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
