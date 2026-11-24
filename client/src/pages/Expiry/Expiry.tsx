import PageHeader from "../../components/common/PageHeader";
import ExpiryCard from "../../components/common/ExpiryCard";

function Expiry() {
  return (
    <div className="max-w-7xl mx-auto">
      <PageHeader
        title="Expiry"
        description="Track food items before they expire."
      />

      <div className="mt-10 rounded-2xl bg-slate-800 p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white">Expiring Soon</h2>
        <p className="mt-3 text-slate-400">
          This section will later show items that need attention soon.
        </p>

        <button className="mt-6 rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-500">
          View Expiring Items
        </button>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ExpiryCard
            item="Milk"
            daysLeft="1 day"
            status="Urgent"
          />

          <ExpiryCard
            item="Tomatoes"
            daysLeft="2 days"
            status="Soon"
          />

          <ExpiryCard
            item="Bread"
            daysLeft="3 days"
            status="Safe for now"
          />
        </div>
      </div>
    </div>
  );
}

export default Expiry;