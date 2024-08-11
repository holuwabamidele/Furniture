import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Static/Footer";
import Header from "./Static/Header";
import NewEntry from "./Pages/NewEntry";
import Shop from "./Pages/Shop";
import ShopDetail from "./Pages/ShopDetail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewEntry />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/detail/:id" element={<ShopDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
