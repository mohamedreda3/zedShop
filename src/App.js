import "react-toastify/dist/ReactToastify.css";
import "rsuite/dist/rsuite.min.css";
import Header from "./layout/header";
import "./App.css";
import "react-awesome-slider/dist/styles.css";
import Banner from "./layout/banner";
import Footer from "./layout/footer";
import FoundUs from "./layout/foundus";
import Services from "./layout/services";
import About from "./layout/about";
import Contact from "./layout/contact";
import Counter from "./layout/counter";
import BannerTicker from "./layout/bannerTicker";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SecondPage from "./pages/SecondPage/SecondPage";

function App() {
  return (
    <>

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/branches_burchase" element={<SecondPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
