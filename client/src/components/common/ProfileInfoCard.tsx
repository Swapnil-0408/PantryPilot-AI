type ProfileInfoCardProps = {
  label: string;
  value: string;
  note: string;
};

function ProfileInfoCard({ label, value, note }: ProfileInfoCardProps) {
  return (
    <div className="rounded-2xl bg-slate-700 p-4 shadow-md">
      <p className="text-sm text-slate-400">{label}</p>
      <h3 className="mt-2 text-2xl font-bold text-white">{value}</h3>
      <p className="mt-1 text-slate-300">{note}</p>
    </div>
  );
}

export default ProfileInfoCard;