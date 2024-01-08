import { Routes, Route } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
// pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
