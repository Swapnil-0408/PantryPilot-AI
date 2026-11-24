import FeatureCard from "../../components/common/FeatureCard";

function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-white">Good Morning 👋</h1>
      <p className="mt-3 text-slate-400 text-lg">
        Let's reduce food waste today.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <FeatureCard
          emoji="🥫"
          title="Pantry"
          description="Manage your pantry items."
          to="/pantry"
        />

        <FeatureCard
          emoji="🍲"
          title="Recipes"
          description="Cook using available ingredients."
          to="/recipes"
        />

        <FeatureCard
          emoji="🛒"
          title="Shopping"
          description="Generate smart shopping lists."
          to="/shopping"
        />

        <FeatureCard
          emoji="⏰"
          title="Expiry"
          description="Track items before they expire."
          to="/expiry"
        />
      </div>
    </div>
  );
}

export default Home;