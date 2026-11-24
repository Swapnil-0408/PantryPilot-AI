import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `block rounded-lg px-4 py-3 transition ${
      isActive
        ? "bg-slate-700 text-white"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <aside className="w-64 min-h-[calc(100vh-64px)] bg-slate-950 p-4 border-r border-slate-800">
      <h2 className="mb-6 text-xl font-bold text-white">PantryPilot</h2>

      <nav className="space-y-2">
        <NavLink to="/" className={linkStyle} end>
          Dashboard
        </NavLink>

        <NavLink to="/pantry" className={linkStyle}>
          Pantry
        </NavLink>

        <NavLink to="/recipes" className={linkStyle}>
          Recipes
        </NavLink>

        <NavLink to="/shopping" className={linkStyle}>
          Shopping List
        </NavLink>

        <NavLink to="/expiry" className={linkStyle}>
          Expiry
        </NavLink>

        <NavLink to="/profile" className={linkStyle}>
          Profile
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;