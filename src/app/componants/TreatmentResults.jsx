"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import healthInfoData from "@/app/Data/HealthInfo.json";

export default function TreatmentResults() {
  const { treatmentResults } = healthInfoData;

  const [activeIndex, setActiveIndex] = useState(0);

  const resultListRef = useRef(null);

  const activeResult = treatmentResults.items[activeIndex];

  const handleResultClick = (index) => {
    setActiveIndex(index);

    const container = resultListRef.current;
    const item = container?.children[index];

    if (container && item) {
      item.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const scrollResults = (direction) => {
    const container = resultListRef.current;

    if (!container) return;

    container.scrollBy({
      left: direction === "next" ? 280 : -280,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#C82506]">
              {treatmentResults.label}
            </p>

            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#171717] sm:text-4xl md:text-5xl">
              {treatmentResults.title}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-600 md:text-right">
            {treatmentResults.description}
          </p>
        </div>

        {/* Featured Result */}
        <div className="mt-12 flex flex-col border border-[#E5E1DC] md:mt-16 md:flex-row">

          {/* Before / After Images */}
          <div className="flex w-full md:w-[60%]">

            {/* Before */}
            <div className="relative h-[330px] w-1/2 overflow-hidden border-r border-white sm:h-[450px] md:h-[520px]">
              <Image
                key={`${activeResult.beforeImage}-before`}
                src={activeResult.beforeImage}
                alt={`${activeResult.title} before treatment`}
                fill
                sizes="(max-width: 768px) 50vw, 30vw"
                className="object-cover"
              />

              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#171717]">
                Before
              </div>
            </div>

            {/* After */}
            <div className="relative h-[330px] w-1/2 overflow-hidden sm:h-[450px] md:h-[520px]">
              <Image
                key={`${activeResult.afterImage}-after`}
                src={activeResult.afterImage}
                alt={`${activeResult.title} after treatment`}
                fill
                sizes="(max-width: 768px) 50vw, 30vw"
                className="object-cover"
              />

              <div className="absolute bottom-4 left-4 bg-[#C82506] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                After
              </div>
            </div>

          </div>

          {/* Result Information */}
          <div className="flex w-full flex-col justify-center p-7 sm:p-10 md:w-[40%] md:p-14">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C82506]">
              {activeResult.condition}
            </p>

            <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#171717] sm:text-4xl">
              {activeResult.title}
            </h3>

            <div className="mt-6 h-px w-12 bg-[#C82506]" />

            <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base">
              {activeResult.description}
            </p>

            {activeResult.duration &&
              activeResult.duration !== "To be added" && (
                <div className="mt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                    Treatment Duration
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#171717]">
                    {activeResult.duration}
                  </p>
                </div>
              )}

          </div>
        </div>

        {/* Result Navigation */}
        <div className="mt-6 flex items-center gap-3">

          {/* Previous */}
          <button
            type="button"
            aria-label="Previous treatment results"
            onClick={() => scrollResults("prev")}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#CFC9C2] bg-white text-lg text-[#171717] transition-all duration-300 hover:border-[#C82506] hover:bg-[#C82506] hover:text-white"
          >
            ←
          </button>

          {/* Scrollable Results */}
          <div
            ref={resultListRef}
            className="scrollbar-hide flex min-w-0 flex-1 overflow-x-auto"
          >
            <div className="flex min-w-max border-y border-[#E5E1DC]">
              {treatmentResults.items.map((result, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleResultClick(index)}
                    className={`flex min-w-[190px] flex-col border-r border-[#E5E1DC] px-5 py-5 text-left transition-colors duration-300 first:border-l ${
                      isActive
                        ? "bg-[#F3F1EE]"
                        : "bg-white hover:bg-[#F9F8F6]"
                    }`}
                  >
                    <span
                      className={`text-xs font-semibold tracking-[0.15em] ${
                        isActive
                          ? "text-[#C82506]"
                          : "text-gray-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`mt-2 text-sm font-semibold ${
                        isActive
                          ? "text-[#171717]"
                          : "text-gray-500"
                      }`}
                    >
                      {result.title}
                    </span>

                    <span className="mt-1 text-xs text-gray-400">
                      {result.condition}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Next */}
          <button
            type="button"
            aria-label="Next treatment results"
            onClick={() => scrollResults("next")}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#CFC9C2] bg-white text-lg text-[#171717] transition-all duration-300 hover:border-[#C82506] hover:bg-[#C82506] hover:text-white"
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
}