import { GlobalStyle } from "./globalstyles";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
