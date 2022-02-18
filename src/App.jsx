import { GlobalStyle } from "./globalstyles";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import DevDB from "./pages/DevDB";
import { Routes, Route, useLocation } from "react-router-dom";
import DevUsers from "./util";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [devs, setDevs] = useState(DevUsers());
  const [editId, setEditId] = useState(0);
  const [filteredDevs, setFilteredDevs] = useState([...devs]);
  const [buttonType, setButtonType] = useState("add");
  const [modalToggle, setModalToggle] = useState(false);
  const deleteRef = useRef();
  const location = useLocation();

  return (
    <>
      <GlobalStyle />

      <Navbar
        deleteRef={deleteRef}
        editId={editId}
        setButtonType={setButtonType}
        buttonType={buttonType}
        setFilteredDevs={setFilteredDevs}
        setDevs={setDevs}
        devs={devs}
        modalToggle={modalToggle}
        setModalToggle={setModalToggle}
      />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route
            path="/devs"
            element={
              <DevDB
                deleteRef={deleteRef}
                setEditId={setEditId}
                setButtonType={setButtonType}
                devs={devs}
                setDevs={setDevs}
                modalToggle={modalToggle}
                setModalToggle={setModalToggle}
              />
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
