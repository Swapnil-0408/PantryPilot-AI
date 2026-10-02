import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-slate-800 text-white px-8 py-4 flex justify-between items-center shadow-lg">

      <Link
  to="/"
  className="text-2xl font-bold text-green-400"
>
  PantryPilot AI 🍳
</Link>

      <div className="flex items-center gap-6">

        <button className="text-xl">
          🔔
        </button>

        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold">
          S
        </div>

      </div>

    </nav>
  );
}
export default Navbar;