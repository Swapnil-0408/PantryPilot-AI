type PageHeaderProps = {
  title: string;
  description: string;
};

function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="mt-3 text-slate-400 text-lg">{description}</p>
    </div>
  );
}

export default PageHeader;