type FeatureCardProps = {
  emoji: string;
  title: string;
  description: string;
};

function FeatureCard({
  emoji,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition cursor-pointer shadow-lg">

      <div className="text-5xl mb-4">
        {emoji}
      </div>

      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="text-slate-400 mt-2">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;