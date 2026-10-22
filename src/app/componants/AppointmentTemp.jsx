
import Link from "next/link";
import { FiArrowUpRight, FiCalendar, FiHeart } from "react-icons/fi";

export default function AppointmentTemp() {
  return (
    <section className="bg-[#F7F8F5] py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#153F40] px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-16">
          {/* Decorative background elements */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-12 h-56 w-56 rounded-full border border-white/10 sm:h-72 sm:w-72"
          />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-10">
            {/* Content */}
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-2">
                <FiCalendar className="text-[#B9D5C8]" size={15} />
                <span className="text-xs font-medium tracking-wide text-[#DCE7DF] sm:text-sm">
                  Book an Appointment
                </span>
              </div>

              <h2 className="max-w-xl font-serif text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl">
                Your health deserves
                <span className="text-[#B9D5C8]"> thoughtful care.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                Take the first step towards better well-being. Schedule a
                consultation with Mishra Homopathy Clinic and discuss your
                health concerns with care and understanding.
              </p>

              <div className="mt-6 flex items-center gap-2.5 text-sm text-[#DCE7DF]">
                <FiHeart size={17} className="shrink-0 text-[#B9D5C8]" />
                <span>Personal attention. Care that puts you first.</span>
              </div>
            </div>

            {/* CTA */}
            <div className="w-full shrink-0 md:w-auto">
              <Link
                href="/appointment"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#DCE7DF] px-7 py-4 text-sm font-semibold text-[#153F40] transition-colors duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#153F40] sm:w-auto sm:px-8"
              >
                Book Your Visit
                <FiArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <p className="mt-3 text-center text-xs text-white/55 md:text-left">
                We’re here to help you take the next step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
