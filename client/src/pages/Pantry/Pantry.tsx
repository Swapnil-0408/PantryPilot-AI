import { useEffect, useState } from "react";
import PageHeader from "../../components/common/PageHeader";
import PantryItemCard from "../../components/common/PantryItemCard";
import PantrySummaryCard from "../../components/common/PantrySummaryCard";

type PantryItem = {
  name: string;
  quantity: string;
  status: string;
  category: string;
  expiryDate: string;
};

const STORAGE_KEY = "pantry-items";

const defaultPantryItems: PantryItem[] = [
  {
    name: "Milk",
    quantity: "2 bottles",
    status: "Fresh",
    category: "Dairy",
    expiryDate: "2026-10-07",
  },
  {
    name: "Eggs",
    quantity: "12 pcs",
    status: "Low Stock",
    category: "Protein",
    expiryDate: "2026-10-10",
  },
  {
    name: "Rice",
    quantity: "5 kg",
    status: "Enough",
    category: "Staples",
    expiryDate: "2026-12-01",
  },
];

function getInitialPantryItems(): PantryItem[] {
  const savedItems = localStorage.getItem(STORAGE_KEY);

  if (!savedItems) {
    return defaultPantryItems;
  }

  try {
    return JSON.parse(savedItems) as PantryItem[];
  } catch {
    return defaultPantryItems;
  }
}

function getDaysLeft(expiryDate: string): string {
  const today = new Date();
  const expiry = new Date(expiryDate);

  const diffTime = expiry.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return "Expired";
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "1 day left";

  return `${diffDays} days left`;
}

function Pantry() {
  const today = new Date();
  const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
  )
    .toISOString()
    .split("T")[0];

  const [showForm, setShowForm] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemStatus, setItemStatus] = useState("Fresh");
  const [itemCategory, setItemCategory] = useState("Dairy");
  const [itemExpiryDate, setItemExpiryDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name-asc");
  const [statusFilter, setStatusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [pantryItems, setPantryItems] = useState<PantryItem[]>(
    getInitialPantryItems
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pantryItems));
  }, [pantryItems]);

  const handleAddOrUpdateItem = () => {
    if (
      itemName.trim() === "" ||
      itemQuantity.trim() === "" ||
      itemStatus.trim() === "" ||
      itemCategory.trim() === "" ||
      itemExpiryDate.trim() === ""
    ) {
      return;
    }

    if (itemExpiryDate < localToday) {
      alert("Expiry date cannot be in the past.");
      return;
    }

    const newItem: PantryItem = {
      name: itemName,
      quantity: itemQuantity,
      status: itemStatus,
      category: itemCategory,
      expiryDate: itemExpiryDate,
    };

    if (editIndex !== null) {
      const updatedItems = pantryItems.map((item, index) =>
        index === editIndex ? newItem : item
      );
      setPantryItems(updatedItems);
      setEditIndex(null);
    } else {
      setPantryItems([...pantryItems, newItem]);
    }

    setItemName("");
    setItemQuantity("");
    setItemStatus("Fresh");
    setItemCategory("Dairy");
    setItemExpiryDate("");
    setShowForm(false);
  };

  const handleRemoveItem = (indexToRemove: number) => {
    const updatedItems = pantryItems.filter(
      (_, index) => index !== indexToRemove
    );
    setPantryItems(updatedItems);
  };

  const handleEditItem = (indexToEdit: number) => {
    const item = pantryItems[indexToEdit];
    setItemName(item.name);
    setItemQuantity(item.quantity);
    setItemStatus(item.status);
    setItemCategory(item.category);
    setItemExpiryDate(item.expiryDate);
    setEditIndex(indexToEdit);
    setShowForm(true);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setStatusFilter("All");
    setCategoryFilter("All");
    setSortBy("name-asc");
  };

  const handleClearAll = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear all pantry items?"
    );

    if (!confirmClear) return;

    setPantryItems([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const handleRestoreDemoData = () => {
    const confirmRestore = window.confirm("Restore the sample pantry items?");

    if (!confirmRestore) return;

    setPantryItems(defaultPantryItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPantryItems));
  };

  const findOriginalIndex = (item: PantryItem) => {
    return pantryItems.findIndex(
      (p) =>
        p.name === item.name &&
        p.quantity === item.quantity &&
        p.status === item.status &&
        p.category === item.category &&
        p.expiryDate === item.expiryDate
    );
  };

  const filteredItems = pantryItems
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) =>
      statusFilter === "All" ? true : item.status === statusFilter
    )
    .filter((item) =>
      categoryFilter === "All" ? true : item.category === categoryFilter
    );

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "name-asc") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "name-desc") {
      return b.name.localeCompare(a.name);
    }

    if (sortBy === "expiry-asc") {
      return a.expiryDate.localeCompare(b.expiryDate);
    }

    return 0;
  });

  const priorityItems = pantryItems.filter((item) => {
    const daysLeft = getDaysLeft(item.expiryDate);
    return (
      daysLeft === "Expired" ||
      daysLeft === "Today" ||
      daysLeft === "1 day left"
    );
  });

  const sortedPriorityItems = [...priorityItems].sort((a, b) =>
    a.expiryDate.localeCompare(b.expiryDate)
  );

  const lowStockItems = pantryItems.filter(
    (item) => item.status === "Low Stock"
  );

  const sortedLowStockItems = [...lowStockItems].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const totalItems = pantryItems.length;
  const expiredItems = pantryItems.filter(
    (item) => getDaysLeft(item.expiryDate) === "Expired"
  ).length;
  const urgentItems = pantryItems.filter((item) => {
    const daysLeft = getDaysLeft(item.expiryDate);
    return daysLeft === "Today" || daysLeft === "1 day left";
  }).length;
  const safeItems = pantryItems.filter((item) => {
    const daysLeft = getDaysLeft(item.expiryDate);
    return (
      daysLeft !== "Expired" &&
      daysLeft !== "Today" &&
      daysLeft !== "1 day left"
    );
  }).length;

  const dairyCount = pantryItems.filter(
    (item) => item.category === "Dairy"
  ).length;
  const staplesCount = pantryItems.filter(
    (item) => item.category === "Staples"
  ).length;
  const vegetablesCount = pantryItems.filter(
    (item) => item.category === "Vegetables"
  ).length;
  const fruitsCount = pantryItems.filter(
    (item) => item.category === "Fruits"
  ).length;
  const proteinCount = pantryItems.filter(
    (item) => item.category === "Protein"
  ).length;
  const snacksCount = pantryItems.filter(
    (item) => item.category === "Snacks"
  ).length;

  return (
    <div className="max-w-7xl mx-auto text-white">
      <PageHeader
        title="Pantry"
        description="Manage the food items you currently have at home."
      />

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-white">Pantry Overview</h2>
        <p className="mt-2 text-slate-400">
          Quick summary of your pantry health and item categories.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <PantrySummaryCard
          label="Total Items"
          value={String(totalItems)}
          colorClass="text-blue-400"
        />
        <PantrySummaryCard
          label="Expired"
          value={String(expiredItems)}
          colorClass="text-red-400"
        />
        <PantrySummaryCard
          label="Urgent"
          value={String(urgentItems)}
          colorClass="text-yellow-400"
        />
        <PantrySummaryCard
          label="Safe Items"
          value={String(safeItems)}
          colorClass="text-green-400"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <PantrySummaryCard
          label="Dairy Items"
          value={String(dairyCount)}
          colorClass="text-pink-400"
        />
        <PantrySummaryCard
          label="Staples"
          value={String(staplesCount)}
          colorClass="text-amber-400"
        />
        <PantrySummaryCard
          label="Vegetables"
          value={String(vegetablesCount)}
          colorClass="text-green-400"
        />
        <PantrySummaryCard
          label="Fruits"
          value={String(fruitsCount)}
          colorClass="text-orange-400"
        />
        <PantrySummaryCard
          label="Protein"
          value={String(proteinCount)}
          colorClass="text-blue-400"
        />
        <PantrySummaryCard
          label="Snacks"
          value={String(snacksCount)}
          colorClass="text-purple-400"
        />
      </div>

      <div className="mt-10 rounded-2xl border border-red-500/30 bg-red-500/10 p-6">
        <h2 className="text-2xl font-bold text-white">Priority Items</h2>
        <p className="mt-2 text-slate-300">
          These items need attention soon because they are expired or close to expiry.
        </p>

        {sortedPriorityItems.length === 0 ? (
          <p className="mt-6 text-slate-400">
            No urgent items right now. Great job keeping your pantry under control.
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sortedPriorityItems.map((item) => {
              const originalIndex = findOriginalIndex(item);

              return (
                <PantryItemCard
                  key={`priority-${item.name}-${item.expiryDate}-${originalIndex}`}
                  name={item.name}
                  quantity={item.quantity}
                  status={item.status}
                  category={item.category}
                  expiryDate={item.expiryDate}
                  daysLeft={getDaysLeft(item.expiryDate)}
                  onRemove={() => handleRemoveItem(originalIndex)}
                  onEdit={() => handleEditItem(originalIndex)}
                />
              );
            })}
          </div>
        )}
      </div>

      <div className="mt-10 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
        <h2 className="text-2xl font-bold text-white">Low Stock Items</h2>
        <p className="mt-2 text-slate-300">
          These items are running low and may need to be bought soon.
        </p>

        {sortedLowStockItems.length === 0 ? (
          <p className="mt-6 text-slate-400">No low stock items right now.</p>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sortedLowStockItems.map((item) => {
              const originalIndex = findOriginalIndex(item);

              return (
                <PantryItemCard
                  key={`lowstock-${item.name}-${item.expiryDate}-${originalIndex}`}
                  name={item.name}
                  quantity={item.quantity}
                  status={item.status}
                  category={item.category}
                  expiryDate={item.expiryDate}
                  daysLeft={getDaysLeft(item.expiryDate)}
                  onRemove={() => handleRemoveItem(originalIndex)}
                  onEdit={() => handleEditItem(originalIndex)}
                />
              );
            })}
          </div>
        )}
      </div>

      <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-800/90 p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white">Current Pantry Items</h2>
        <p className="mt-2 text-slate-400">
          Browse, search, filter, and manage all pantry items here.
        </p>

        <div className="mt-6">
          <label className="block text-sm text-slate-300">Search Item</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-500 bg-slate-900 px-4 py-2 text-white outline-none"
            placeholder="Search pantry items"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm text-slate-300">
            Filter By Status
          </label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-500 bg-slate-900 px-4 py-2 text-white outline-none"
          >
            <option value="All">All</option>
            <option value="Fresh">Fresh</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Enough">Enough</option>
            <option value="Expiring Soon">Expiring Soon</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block text-sm text-slate-300">
            Filter By Category
          </label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-500 bg-slate-900 px-4 py-2 text-white outline-none"
          >
            <option value="All">All</option>
            <option value="Dairy">Dairy</option>
            <option value="Staples">Staples</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
            <option value="Protein">Protein</option>
            <option value="Snacks">Snacks</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block text-sm text-slate-300">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-500 bg-slate-900 px-4 py-2 text-white outline-none"
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="expiry-asc">Expiry Date (Earliest First)</option>
          </select>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={handleClearFilters}
            className="rounded-lg bg-slate-600 px-4 py-2 text-white transition hover:bg-slate-500"
          >
            Clear Filters
          </button>

          <button
            onClick={handleClearAll}
            className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-500"
          >
            Clear All Items
          </button>

          <button
            onClick={handleRestoreDemoData}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-500"
          >
            Restore Demo Data
          </button>

          <button
            onClick={() => {
              setShowForm(!showForm);
              setEditIndex(null);
              setItemName("");
              setItemQuantity("");
              setItemStatus("Fresh");
              setItemCategory("Dairy");
              setItemExpiryDate("");
            }}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-500"
          >
            + Add Item
          </button>
        </div>

        {showForm && (
          <div className="mt-6 rounded-xl bg-slate-700 p-4">
            <label className="block text-sm text-slate-300">Item Name</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-500 bg-slate-900 px-4 py-2 text-white outline-none"
              placeholder="Enter item name"
            />

            <label className="mt-4 block text-sm text-slate-300">Quantity</label>
            <input
              type="text"
              value={itemQuantity}
              onChange={(e) => setItemQuantity(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-500 bg-slate-900 px-4 py-2 text-white outline-none"
              placeholder="Enter quantity"
            />

            <label className="mt-4 block text-sm text-slate-300">Category</label>
            <select
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-500 bg-slate-900 px-4 py-2 text-white outline-none"
            >
              <option value="Dairy">Dairy</option>
              <option value="Staples">Staples</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Fruits">Fruits</option>
              <option value="Protein">Protein</option>
              <option value="Snacks">Snacks</option>
            </select>

            <label className="mt-4 block text-sm text-slate-300">Status</label>
            <select
              value={itemStatus}
              onChange={(e) => setItemStatus(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-500 bg-slate-900 px-4 py-2 text-white outline-none"
            >
              <option value="Fresh">Fresh</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Enough">Enough</option>
              <option value="Expiring Soon">Expiring Soon</option>
            </select>

            <label className="mt-4 block text-sm text-slate-300">
              Expiry Date
            </label>
            <input
              type="date"
              value={itemExpiryDate}
              min={localToday}
              onChange={(e) => setItemExpiryDate(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-500 bg-slate-900 px-4 py-2 text-white outline-none"
            />

            <button
              onClick={handleAddOrUpdateItem}
              className="mt-4 rounded-lg bg-green-600 px-4 py-2 text-white transition hover:bg-green-500"
            >
              {editIndex !== null ? "Update Item" : "Save Item"}
            </button>
          </div>
        )}

        {sortedItems.length === 0 ? (
          <p className="mt-8 text-slate-400">
            {searchTerm || statusFilter !== "All" || categoryFilter !== "All"
              ? "No items found for the selected filters."
              : "No pantry items yet. Add your first item."}
          </p>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sortedItems.map((item) => {
              const originalIndex = findOriginalIndex(item);

              return (
                <PantryItemCard
                  key={`${item.name}-${item.expiryDate}-${originalIndex}`}
                  name={item.name}
                  quantity={item.quantity}
                  status={item.status}
                  category={item.category}
                  expiryDate={item.expiryDate}
                  daysLeft={getDaysLeft(item.expiryDate)}
                  onRemove={() => handleRemoveItem(originalIndex)}
                  onEdit={() => handleEditItem(originalIndex)}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Pantry;