"use client";

//data
import { securityItems } from "../data";

//images
import securityImage from "../assets/image/security-image.svg";

//components
import { Icon } from "@iconify/react";
import AutoScrollBar from "./AutoScrollBar";

function SecurityFeature({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid size-10 shrink-0 place-items-center rounded-full bg-sky-100 text-sky-600">
        <Icon icon={icon} className="text-lg" />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
        <p className="mt-1 max-w-xs text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Security() {
  return (
    <section id="security" className="mt-10 md:mt-20 bg-white">
      <AutoScrollBar />

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          We Take Your Security Seriously
        </h2>

        <div className="mt-8 rounded-4xl bg-(--accent) p-5 md:p-8 shadow-sm">
          <div className="grid items-center gap-8 lg:grid-cols-[320px_1fr]">
            <div className="space-y-7">
              {securityItems.map((item) => (
                <SecurityFeature
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </div>

            <div className="relative overflow-hidden rounded-3xl">
              <div className="relative aspect-16/10 w-full">
                <img
                  src={securityImage}
                  alt="Happy customers using laptop"
                  className="object-cover"
                />
              </div>

              <button
                type="button"
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-xs font-semibold text-white shadow-lg transition hover:bg-sky-600"
              >
                Swap Laptop
                <Icon icon="mdi:arrow-right" className="text-base" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
