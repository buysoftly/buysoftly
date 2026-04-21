import { Icon } from "@iconify/react";

export function StepCard({
  step,
  title,
  desc,
  icon,
}: {
  step: number;
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="mb-6 flex items-center justify-between">
        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
          <Icon icon={icon} width="24" />
        </div>
        <span className="text-4xl font-black text-slate-100 group-hover:text-blue-50 transition-colors">
          0{step}
        </span>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
