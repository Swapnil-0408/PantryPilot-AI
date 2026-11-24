import { useEffect, useState } from "react";
import PageHeader from "../../components/common/PageHeader";
import RecipeCard from "../../components/recipe/RecipeCard";
import { getRandomRecipes } from "../../services/recipes";

function Recipes() {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getRandomRecipes(12);

      setRecipes(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load recipes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <PageHeader
        title="Recipes"
        description="Discover delicious recipes you can cook."
      />

      {/* Loading */}
      {loading && (
        <p className="mt-8 text-center text-lg text-slate-300">
          Loading recipes...
        </p>
      )}

      {/* Error */}
      {!loading && error && (
        <p className="mt-8 text-center text-red-500">
          {error}
        </p>
      )}

      {/* Recipes */}
      {!loading && !error && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              readyInMinutes={recipe.readyInMinutes}
              servings={recipe.servings}
            />
          ))}
        </div>
      )}

      {/* Empty */}
      {!loading && !error && recipes.length === 0 && (
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-white">
            No recipes found
          </h2>

          <p className="mt-3 text-slate-400">
            Try searching for another recipe later.
          </p>
        </div>
      )}
    </div>
  );
}

export default Recipes;