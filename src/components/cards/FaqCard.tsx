"use client";

import { Icon } from "@iconify/react";
import clsx from "clsx";

type FaqCardProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FaqCard({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-slate-100/90 transition-all duration-300">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium text-slate-900 md:text-[15px]">
          {question}
        </span>

        <span
          className={clsx(
            "grid size-8 shrink-0 place-items-center rounded-full border border-slate-300 bg-white text-slate-600 transition-transform duration-300",
            isOpen && "rotate-45",
          )}
        >
          <Icon icon="mdi:plus" className="text-lg" />
        </span>
      </button>

      <div
        className={clsx(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-6 text-slate-600 md:px-6">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
