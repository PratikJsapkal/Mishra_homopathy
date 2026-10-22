"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import healthInfoData from "@/app/Data/HealthInfo.json";

export default function AdvancedTreatments() {
  const { advancedTreatments } = healthInfoData;

  const [activeIndex, setActiveIndex] = useState(0);

  const treatmentListRef = useRef(null);

  const activeTreatment = advancedTreatments.items[activeIndex];

  const handleTreatmentClick = (index) => {
    setActiveIndex(index);

    const container = treatmentListRef.current;
    const item = container?.children[index];

    if (container && item) {
      item.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const scrollTreatments = (direction) => {
    const container = treatmentListRef.current;

    if (!container) return;

    const scrollAmount = 300;

    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#F3F1EE] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#C82506]">
              {advancedTreatments.label}
            </p>

            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#171717] sm:text-4xl md:text-5xl">
              {advancedTreatments.title}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-600 md:text-right">
            {advancedTreatments.description}
          </p>
        </div>

        {/* ================= FEATURED TREATMENT ================= */}
        <div className="mt-12 flex flex-col overflow-hidden bg-white md:mt-16 md:flex-row">

          {/* IMAGE */}
          <div className="relative h-[330px] w-full overflow-hidden sm:h-[420px] md:h-[560px] md:w-[55%]">
            <Image
              key={activeTreatment.image}
              src={activeTreatment.image}
              alt={activeTreatment.title}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />

            {/* Number */}
            <div className="absolute left-5 top-5 bg-white px-4 py-2 text-xs font-semibold tracking-[0.15em] text-[#C82506]">
              {String(activeIndex + 1).padStart(2, "0")}
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex w-full flex-col justify-center p-7 sm:p-10 md:w-[45%] md:p-14 lg:p-16">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
              Area of Care
            </p>

            <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#171717] sm:text-4xl lg:text-5xl">
              {activeTreatment.title}
            </h3>

            <div className="mt-6 h-px w-12 bg-[#C82506]" />

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
              {activeTreatment.description}
            </p>

            <Link
              href={activeTreatment.href}
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#171717]"
            >
              <span className="border-b-2 border-[#C82506] pb-1">
                Explore Treatment
              </span>

              <span className="text-[#C82506]">→</span>
            </Link>
          </div>
        </div>

        {/* ================= TREATMENT NAVIGATION ================= */}
        <div className="mt-6 flex items-center gap-3">

          {/* LEFT ARROW */}
          <button
            type="button"
            aria-label="Previous treatments"
            onClick={() => scrollTreatments("prev")}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#CFC9C2] bg-white text-lg text-[#171717] transition-all duration-300 hover:border-[#C82506] hover:bg-[#C82506] hover:text-white"
          >
            ←
          </button>

          {/* SCROLLABLE TREATMENTS */}
          <div
            ref={treatmentListRef}
            className="scrollbar-hide flex min-w-0 flex-1 overflow-x-auto"
          >
            <div className="flex min-w-max border-y border-[#D9D4CE]">
              {advancedTreatments.items.map((treatment, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={treatment.slug}
                    type="button"
                    onClick={() => handleTreatmentClick(index)}
                    className={`flex min-w-[180px] flex-col border-r border-[#D9D4CE] px-5 py-5 text-left transition-colors duration-300 first:border-l ${
                      isActive
                        ? "bg-white"
                        : "bg-transparent hover:bg-white/60"
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
                      {treatment.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button
            type="button"
            aria-label="Next treatments"
            onClick={() => scrollTreatments("next")}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#CFC9C2] bg-white text-lg text-[#171717] transition-all duration-300 hover:border-[#C82506] hover:bg-[#C82506] hover:text-white"
          >
            →
          </button>

        </div>

        {/* ================= BOTTOM ACTIONS ================= */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-12">

          <Link
            href="/treatments"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C82506] px-6 py-3 text-sm font-semibold text-[#C82506] transition-colors duration-300 hover:bg-[#C82506] hover:text-white"
          >
            View All Treatments
            <span>→</span>
          </Link>

          <Link
            href="/appointment"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C82506] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#A91F05]"
          >
            Book Appointment
            <span>→</span>
          </Link>

        </div>

      </div>
    </section>
  );
}