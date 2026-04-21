export default function StepCard({
  number,
  title,
  description,
  isRight,
  isBottom,
}: {
  number: string;
  title: string;
  description: string;
  isRight: boolean;
  isBottom: boolean;
}) {
  return (
    <div
      className={`px-8 py-10 ${!isRight ? "border-r border-white/20" : ""} ${!isBottom ? "border-b border-white/20" : ""}`}
    >
      <span className="text-4xl font-bold tracking-tight text-cyan-300">
        {number}
      </span>

      <h3 className="mt-4 text-sm font-bold tracking-wide text-white">
        {title}
      </h3>

      <p className="mt-3 max-w-xs text-xs leading-6 text-blue-100/80">
        {description}
      </p>
    </div>
  );
}
