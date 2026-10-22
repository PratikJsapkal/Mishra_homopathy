
"use client";

import { useState } from "react";
import Link from "next/link";
import faqData from "@/app/Data/FAQ.json";
import {
  FiArrowUpRight,
  FiPlus,
  FiMinus,
  FiMessageCircle,
} from "react-icons/fi";

export default function FAQ() {
  const { faq } = faqData;
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="bg-[#F7F8F5] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left: Introduction */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#174E52]" />

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#174E52] sm:text-sm">
                {faq.label}
              </p>
            </div>

            <h2 className="max-w-lg font-serif text-3xl font-semibold leading-tight text-[#243331] sm:text-4xl lg:text-5xl">
              {faq.title}
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#64716D] sm:text-base">
              {faq.description}
            </p>

            {/* Appointment card */}
            <div className="mt-8 rounded-2xl border border-[#DFE8E1] bg-white p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF2EC] text-[#174E52]">
                  <FiMessageCircle size={20} />
                </span>

                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#243331]">
                    Still have questions?
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#64716D]">
                    Connect with our clinic to discuss your appointment.
                  </p>
                </div>
              </div>

              <Link
                href="/appointment"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#174E52] px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#103C3F]"
              >
                Book an Appointment
                <FiArrowUpRight size={17} />
              </Link>
            </div>

            <p className="mt-5 text-xs leading-6 text-[#829089]">
              Every patient's needs are different. For personal medical advice,
              please consult a qualified healthcare professional.
            </p>
          </div>

          {/* Right: FAQ accordion */}
          <div>
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-[#64716D]">
                Frequently asked questions
              </p>

              <span className="rounded-full bg-[#EAF2EC] px-3 py-1.5 text-xs font-semibold text-[#174E52]">
                {String(faq.items.length).padStart(2, "0")} QUESTIONS
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#DFE8E1] bg-white">
              {faq.items.map((item, index) => {
                const isOpen = openIndex === index;
                const answerId = `faq-answer-${index}`;

                return (
                  <div
                    key={index}
                    className={
                      index !== faq.items.length - 1
                        ? "border-b border-[#E8EDE8]"
                        : ""
                    }
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-200 hover:bg-[#F8FAF7] sm:gap-6 sm:px-7 sm:py-6"
                    >
                      <div className="flex min-w-0 items-start gap-4">
                        <span
                          className={`pt-1 text-xs font-semibold tracking-wider ${
                            isOpen ? "text-[#174E52]" : "text-[#A0ACA4]"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={`font-serif text-base font-semibold leading-snug sm:text-lg ${
                            isOpen ? "text-[#174E52]" : "text-[#243331]"
                          }`}
                        >
                          {item.question}
                        </span>
                      </div>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                          isOpen
                            ? "bg-[#174E52] text-white"
                            : "border border-[#DFE8E1] bg-white text-[#64716D]"
                        }`}
                      >
                        {isOpen ? (
                          <FiMinus size={17} />
                        ) : (
                          <FiPlus size={17} />
                        )}
                      </span>
                    </button>

                    <div
                      id={answerId}
                      hidden={!isOpen}
                      className="px-5 pb-5 pl-14 sm:px-7 sm:pb-6 sm:pl-16"
                    >
                      <p className="max-w-2xl text-sm leading-7 text-[#64716D] sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
