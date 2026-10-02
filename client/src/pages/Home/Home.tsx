import Navbar from "../../components/layout/Navbar";
import FeatureCard from "../../components/common/FeatureCard";
function Home() {
  return (
    <div className="min-h-screen bg-slate-900">

      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-10">

        <h1 className="text-5xl font-bold text-white">
          Good Morning 👋
        </h1>

        <p className="text-slate-400 mt-3 text-lg">
          Let's reduce food waste today.
        </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          <FeatureCard
            emoji="🥫"
            title="Pantry"
            description="Manage your pantry items."
          />

          <FeatureCard
            emoji="🍲"
            title="Recipes"
            description="Cook using available ingredients."
          />

          <FeatureCard
            emoji="🛒"
            title="Shopping"
            description="Generate smart shopping lists."
          />

          <FeatureCard
            emoji="⏰"
            title="Expiry"
            description="Track items before they expire."
          />

 </div>
      </div>

    </div>
  );
}

export default Home;