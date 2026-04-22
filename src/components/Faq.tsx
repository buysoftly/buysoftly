"use client";

//data
import { faqItems } from "../data";

//components
import { useState } from "react";
import FAQItem from "./cards/FaqCard";

export default function Faq() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-white mt-10 md:mt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-600">
            Got Questions?
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={activeId === item.id}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
