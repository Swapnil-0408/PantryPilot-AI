function Navbar() {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-950 px-6 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold text-white">PantryPilot🍳</h1>
        <p className="text-sm text-slate-400">Food waste tracker dashboard</p>
      </div>

      <div className="text-sm text-slate-300">
        Welcome back
      </div>
    </header>
  );
}

export default Navbar;