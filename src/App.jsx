import { GlobalStyle } from "./globalstyles";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import DevDB from "./pages/DevDB";
import { Routes, Route } from "react-router-dom";
import DevUsers from "./util";
import { useState } from "react";

function App() {
  const [devs, setDevs] = useState(DevUsers());
  return (
    <>
      <GlobalStyle />
      <Navbar setDevs={setDevs} devs={devs} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devs" element={<DevDB devs={devs} setDevs={setDevs} />} />
      </Routes>
    </>
  );
}

export default App;
