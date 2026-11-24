type PantrySummaryCardProps = {
  label: string;
  value: string;
  colorClass: string;
};

function PantrySummaryCard({ label, value, colorClass }: PantrySummaryCardProps) {
  return (
    <div className="rounded-2xl bg-slate-700 p-4 shadow-md">
      <p className="text-sm text-slate-400">{label}</p>
      <h3 className={`mt-2 text-3xl font-bold ${colorClass}`}>{value}</h3>
    </div>
  );
}

export default PantrySummaryCard;