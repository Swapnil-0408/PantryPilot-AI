type ShoppingCardProps = {
  item: string;
  quantity: string;
  note: string;
};

function ShoppingCard({ item, quantity, note }: ShoppingCardProps) {
  return (
    <div className="rounded-2xl bg-slate-700 p-4 shadow-md">
      <h3 className="text-xl font-bold text-white">{item}</h3>
      <p className="mt-2 text-slate-300">Quantity: {quantity}</p>
      <p className="mt-1 text-slate-400">Note: {note}</p>
    </div>
  );
}

export default ShoppingCard;