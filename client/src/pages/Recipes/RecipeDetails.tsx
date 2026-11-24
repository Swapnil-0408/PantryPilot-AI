import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import { recipes } from "../../data/recipes";

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find(
    (recipe) => recipe.id === Number(id)
  );

  // Recipe Not Found
  if (!recipe) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-800 p-10 text-center shadow-xl">

          <div className="text-7xl">🍽️</div>

          <h1 className="mt-6 text-4xl font-bold text-white">
            Recipe Not Found
          </h1>

          <p className="mt-4 text-slate-400">
            Sorry! The recipe you're looking for doesn't exist or may have been removed.
          </p>

          <button
            onClick={() => navigate("/recipes")}
            className="mt-8 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            ← Back to Recipes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 text-white">

      {/* Back Button */}
      <button
        onClick={() => navigate("/recipes")}
        className="mb-6 rounded-lg bg-slate-700 px-4 py-2 transition hover:bg-slate-600"
      >
        ← Back to Recipes
      </button>

      {/* Header */}
      <PageHeader
        title={recipe.title}
        description="Complete recipe information"
      />

      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="mt-8 h-72 w-full rounded-xl object-cover md:h-96"
      />

      {/* Info Cards */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-xl bg-slate-800 p-5 text-center shadow-lg">
          <h3 className="text-lg font-semibold text-green-400">
            ⏱ Cook Time
          </h3>

          <p className="mt-2 text-lg">
            {recipe.cookTime}
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-5 text-center shadow-lg">
          <h3 className="text-lg font-semibold text-green-400">
            📈 Difficulty
          </h3>

          <p className="mt-2 text-lg">
            {recipe.difficulty}
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-5 text-center shadow-lg">
          <h3 className="text-lg font-semibold text-green-400">
            🍽 Servings
          </h3>

          <p className="mt-2 text-lg">
            {recipe.servings}
          </p>
        </div>

      </div>

      {/* Ingredients */}
      <div className="mt-10 rounded-xl bg-slate-800 p-6 shadow-lg">

        <h2 className="text-2xl font-bold">
          🥫 Ingredients
        </h2>

        <ul className="mt-6 space-y-3">

          {recipe.ingredients.map((ingredient, index) => (
            <li
              key={index}
              className="rounded-lg bg-slate-700 p-3 transition hover:bg-slate-600"
            >
              • {ingredient}
            </li>
          ))}

        </ul>

      </div>

      {/* Instructions */}
      <div className="mt-10 mb-10 rounded-xl bg-slate-800 p-6 shadow-lg">

        <h2 className="text-2xl font-bold">
          👨‍🍳 Cooking Instructions
        </h2>

        <ol className="mt-6 space-y-4">

          {recipe.instructions.map((step, index) => (
            <li
              key={index}
              className="rounded-lg bg-slate-700 p-4 transition hover:bg-slate-600"
            >
              <span className="font-bold text-green-400">
                Step {index + 1}
              </span>

              <p className="mt-2 text-slate-300">
                {step}
              </p>
            </li>
          ))}

        </ol>

      </div>

    </div>
  );
}

export default RecipeDetails;