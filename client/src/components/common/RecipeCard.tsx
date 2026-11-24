import { Link } from "react-router-dom";

type RecipeCardProps = {
  id: number;
  title: string;
  ingredients: string;
  difficulty: string;
  cookTime: string;
  servings: string;
};

function RecipeCard({
  id,
  title,
  ingredients,
  difficulty,
  cookTime,
  servings,
}: RecipeCardProps) {
  return (
    <Link to={`/recipes/${id}`}>
      <div className="rounded-xl border border-slate-700 bg-slate-700 p-5 transition duration-300 hover:scale-105 hover:border-green-500 hover:shadow-lg cursor-pointer">

        <h2 className="text-2xl font-bold text-white">
          {title}
        </h2>

        <p className="mt-4 text-slate-300">
          <strong>Ingredients:</strong> {ingredients}
        </p>

        <p className="mt-2 text-slate-300">
          <strong>Difficulty:</strong> {difficulty}
        </p>

        <p className="mt-2 text-slate-300">
          <strong>Cook Time:</strong> {cookTime}
        </p>

        <p className="mt-2 text-slate-300">
          <strong>Servings:</strong> {servings}
        </p>

      </div>
    </Link>
  );
}

export default RecipeCard;