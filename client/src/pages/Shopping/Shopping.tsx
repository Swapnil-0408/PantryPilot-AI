import PageHeader from "../../components/common/PageHeader";
import ShoppingCard from "../../components/common/ShoppingCard";

function Shopping() {
  return (
    <div className="max-w-7xl mx-auto">
      <PageHeader
        title="Shopping"
        description="Keep track of the items you need to buy next."
      />

      <div className="mt-10 rounded-2xl bg-slate-800 p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white">Shopping List</h2>
        <p className="mt-3 text-slate-400">
          This section will later show your shopping items.
        </p>

        <button className="mt-6 rounded-lg bg-orange-600 px-4 py-2 text-white transition hover:bg-orange-500">
          Add to List
        </button>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ShoppingCard
            item="Milk"
            quantity="2 bottles"
            note="Buy today"
          />

          <ShoppingCard
            item="Bread"
            quantity="1 pack"
            note="Low stock"
          />

          <ShoppingCard
            item="Butter"
            quantity="1 box"
            note="Needed for breakfast"
          />
        </div>
      </div>
    </div>
  );
}

export default Shopping;