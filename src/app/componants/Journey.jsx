
import Link from "next/link";
import aboutData from "@/app/Data/about.json";
import {
  FiArrowUpRight,
  FiHeart,
  FiUsers,
  FiCalendar,
  FiAward,
} from "react-icons/fi";

const statIcons = [FiCalendar, FiUsers, FiHeart, FiAward];

export default function Journey() {
  const stats = aboutData.clinic.stats;

  return (
    <section className="bg-[#F7F8F5] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Section heading */}
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#174E52]" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#174E52] sm:text-sm">
                Our Journey
              </p>
            </div>

            <h2 className="max-w-2xl font-serif text-3xl font-semibold leading-tight text-[#243331] sm:text-4xl lg:text-5xl">
              Experience built on care, trust and understanding.
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-[#64716D] lg:justify-self-end lg:text-base">
            Every patient has a different story. Our journey is shaped by
            meaningful patient relationships and a commitment to thoughtful,
            personalized homoeopathic care.
          </p>
        </div>

        {/* Clinic statistics */}
        <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-[#E0E8E2] bg-white sm:mt-14 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = statIcons[index % statIcons.length];

            return (
              <div
                key={stat.label}
                className={`
                  group relative flex min-h-40 flex-col justify-between p-5
                  transition-colors duration-300 hover:bg-[#F2F7F3]
                  sm:min-h-48 sm:p-7 lg:p-8
                  ${index % 2 === 0 ? "border-r border-[#E0E8E2]" : ""}
                  ${index < 2 ? "border-b border-[#E0E8E2] lg:border-b-0" : ""}
                  ${index === 2 ? "lg:border-r border-[#E0E8E2]" : ""}
                  ${index > 0 ? "lg:border-l lg:border-[#E0E8E2]" : ""}
                `}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2EC] text-[#174E52]">
                    <Icon size={19} strokeWidth={1.7} />
                  </span>

                  <span className="text-xs font-medium tracking-wider text-[#9AA9A1]">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-7">
                  <p className="font-serif text-3xl font-semibold tracking-tight text-[#174E52] sm:text-4xl lg:text-5xl">
                    {stat.value}
                  </p>

                  <p className="mt-3 text-xs font-semibold uppercase leading-5 tracking-[0.09em] text-[#64716D] sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* About clinic link */}
        <div className="mt-8 flex flex-col gap-4 border-t border-[#E0E8E2] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-[#64716D]">
            Get to know the people, values and approach behind our clinic.
          </p>

          <Link
            href="/about"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#174E52] px-5 py-3 text-sm font-semibold text-[#174E52] transition-colors duration-300 hover:bg-[#174E52] hover:text-white"
          >
            Discover Our Story
            <FiArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
