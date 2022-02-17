import { GlobalStyle } from "./globalstyles";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import DevDB from "./pages/DevDB";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devs" element={<DevDB />} />
      </Routes>
    </>
  );
}

export default App;
