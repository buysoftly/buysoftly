"use client";

//data
import { usageSteps } from "../data";

//components
import StepCard from "./cards/StepCard";

export default function HowItWork() {
  return (
    <section id="how-it-works" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 mt-10 md:mt-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-slate-950">
              How Buysoftly Works
            </h2>
            <p className="mt-2 text-xs text-slate-400">
              Three steps to your dream setup.
            </p>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-slate-800 md:ml-auto">
            We handle the financing complexity so you can focus on getting the
            right device into your hands fast, transparent, and flexible.
          </p>
        </div>
      </div>

      <div className="bg-linear-to-r from-(--primary-100) via-[#004B97] to-[#002E63] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden border border-white/20">
            <div className="grid md:grid-cols-2">
              {usageSteps.map((step, index) => (
                <StepCard
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  isRight={index % 2 === 1}
                  isBottom={index > 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
