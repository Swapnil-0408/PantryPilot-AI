import { Link } from "react-router-dom";

type FeatureCardProps = {
  emoji: string;
  title: string;
  description: string;
  to: string;
};

function FeatureCard({ emoji, title, description, to }: FeatureCardProps) {
  return (
    <Link
      to={to}
      className="block rounded-2xl bg-slate-800 p-6 shadow-lg transition hover:-translate-y-1 hover:bg-slate-700"
    >
      <div className="text-4xl">{emoji}</div>
      <h2 className="mt-4 text-2xl font-bold text-white">{title}</h2>
      <p className="mt-3 text-slate-400">{description}</p>
    </Link>
  );
}

export default FeatureCard;