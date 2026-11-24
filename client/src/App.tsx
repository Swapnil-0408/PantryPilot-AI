import { Routes, Route } from "react-router-dom";

import Layout from "./components/MainLayout/Layout";

import Home from "./pages/Home/Home";
import Pantry from "./pages/Pantry/Pantry";
import Recipes from "./pages/Recipes/Recipes";
import RecipeDetails from "./pages/Recipes/RecipeDetails";
import Shopping from "./pages/Shopping/Shopping";
import Expiry from "./pages/Expiry/Expiry";
import Profile from "./pages/Profile/Profile";

function App() {
  console.log(import.meta.env.VITE_SPOONACULAR_API_KEY);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="pantry" element={<Pantry />} />

        <Route path="recipes" element={<Recipes />} />
        <Route path="recipes/:id" element={<RecipeDetails />} />

        <Route path="shopping" element={<Shopping />} />

        <Route path="expiry" element={<Expiry />} />

        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;