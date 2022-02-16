import { GlobalStyle } from "./globalstyles";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import DevDB from "./pages/DevDB";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {/* <Home /> */}
      <DevDB />
    </>
  );
}

export default App;
