import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Pantry from "./pages/Pantry/Pantry";
import Recipes from "./pages/Recipes/Recipes";
import Shopping from "./pages/Shopping/Shopping";
import Expiry from "./pages/Expiry/Expiry";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pantry" element={<Pantry />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/shopping" element={<Shopping />} />
      <Route path="/expiry" element={<Expiry />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
export default App;