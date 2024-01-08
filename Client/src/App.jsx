import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { login } from "./Redux/features/auth/authUserSlice";
// components
import Navbar from "./components/Navbar";
// pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user"));
    dispatch(login(token));
  }, []);

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
