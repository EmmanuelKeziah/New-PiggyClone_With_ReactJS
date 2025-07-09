import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./static/Header";
import Home from "./pages/Home";
import Save from "./pages/Save";
import Invest from "./pages/Invest";
import Stories from "./pages/Stories";
import PiggyBank from "./pages/PiggyBank";
import TargetSavings from "./pages/TargetSavings";
import FlexDollar from "./pages/FlexDollar";
import SafeLock from "./pages/SafeLock";
import FlexNaira from "./pages/FlexNaira";
import HouseMoney from "./pages/HouseMoney";
import FAQs from "./pages/FAQs";
import Shop from "./pages/Shop";
import Resources from "./pages/Resources";
import Footer from "./static/Footer";

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
          <Route path="/piggybank" element={<PiggyBank />} />
          <Route path="/targets" element={<TargetSavings />} />
          <Route path="/flexdollar" element={<FlexDollar />} />
          <Route path="/safelock" element={<SafeLock />} />
          <Route path="/flexnaira" element={<FlexNaira />} />
          <Route path="/housemoney" element={<HouseMoney />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
