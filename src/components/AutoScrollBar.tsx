"use client";

//data
import { ScrollItems } from "../data";

//components
import { Icon } from "@iconify/react";

export default function AutoScrollBar() {
  // duplicate items for seamless looping
  const loopItems = [...ScrollItems, ...ScrollItems];

  return (
    <div className="w-full overflow-hidden bg-(--accent) border-t-3 border-b-3 border-dashed border-(--primary-100) py-2 mb-10 md:mb-20">
      <div className="relative flex whitespace-nowrap animate-ticker">
        {loopItems.map((text: string, i: number) => (
          <div
            key={i}
            className="flex items-center gap-2 px-6 py-1.5 text-[13px] text-gray-600"
          >
            <Icon
              icon="mdi:star-four-points-outline"
              className="text-[#1e88e5] text-[14px] shrink-0"
            />
            <span className="font-medium italic tracking-tight">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
