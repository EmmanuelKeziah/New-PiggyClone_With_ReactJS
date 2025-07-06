import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/block/homepage/Header";
import Home from "./pages/Home";
import Save from "./pages/Save";
import Invest from "./pages/Invest";
import Stories from "./pages/Stories";
import FAQs from "./pages/FAQs";
import Shop from "./pages/Shop";
import Resources from "./pages/Resources";
import Footer from "./components/block/homepage/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/save" element={<Save />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/fAQs" element={<FAQs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/shop" element={<Shop />} />
          {/* <Route path="/piggybank" element={<PiggyBank />} />
          <Route path="/targets" element={<TargetSavings />} />
          <Route path="/flex-dollar" element={<FlexDollar />} />
          <Route path="/safelock" element={<SafeLock />} />
          <Route path="/flex-naira" element={<FlexNaira />} />
          <Route path="/house-money" element={<HouseMoney />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
