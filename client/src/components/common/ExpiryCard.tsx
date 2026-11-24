type ExpiryCardProps = {
  item: string;
  daysLeft: string;
  status: string;
};

function ExpiryCard({ item, daysLeft, status }: ExpiryCardProps) {
  return (
    <div className="rounded-2xl bg-slate-700 p-4 shadow-md">
      <h3 className="text-xl font-bold text-white">{item}</h3>
      <p className="mt-2 text-slate-300">Days left: {daysLeft}</p>
      <p className="mt-1 text-slate-400">Status: {status}</p>
    </div>
  );
}

export default ExpiryCard;