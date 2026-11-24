type PantryItemCardProps = {
  name: string;
  quantity: string;
  status: string;
  category: string;
  expiryDate: string;
  daysLeft: string;
  onRemove: () => void;
  onEdit: () => void;
};

function getDaysLeftClass(daysLeft: string) {
  if (daysLeft === "Expired") return "text-red-400";
  if (daysLeft === "Today") return "text-red-400";
  if (daysLeft === "1 day left") return "text-orange-400";
  if (daysLeft === "2 days left" || daysLeft === "3 days left") {
    return "text-yellow-400";
  }
  return "text-green-400";
}

function PantryItemCard({
  name,
  quantity,
  status,
  category,
  expiryDate,
  daysLeft,
  onRemove,
  onEdit,
}: PantryItemCardProps) {
  const daysLeftClass = getDaysLeftClass(daysLeft);

  return (
    <div className="rounded-2xl bg-slate-700 p-4 shadow-md transition hover:-translate-y-1">
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="mt-2 text-slate-300">Category: {category}</p>
      <p className="mt-1 text-slate-300">Quantity: {quantity}</p>
      <p className="mt-1 text-slate-400">Status: {status}</p>
      <p className="mt-1 text-slate-400">Expiry Date: {expiryDate}</p>
      <p className={`mt-1 font-semibold ${daysLeftClass}`}>
        Days Left: {daysLeft}
      </p>

      <div className="mt-4 flex gap-3">
        <button
          onClick={onEdit}
          className="rounded-lg bg-yellow-500 px-3 py-2 text-sm text-white transition hover:bg-yellow-400"
        >
          Edit
        </button>

        <button
          onClick={onRemove}
          className="rounded-lg bg-red-600 px-3 py-2 text-sm text-white transition hover:bg-red-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default PantryItemCard;