import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeBday from "./bdayComponents/WelcomeBday";
import BdayWishes from "./bdayComponents/BdayWishes";
import Introduce from "./bdayComponents/Introduce";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeBday />} />
          <Route path="/:dob" element={<BdayWishes />} />
          <Route path="/upload" element={<Introduce />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
