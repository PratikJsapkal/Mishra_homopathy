
import Link from "next/link";
import treatmentsData from "@/app/Data/Treatments.json";
import {
  FiActivity,
  FiArrowUpRight,
  FiCheckCircle,
  FiHeart,
  FiPlus,
} from "react-icons/fi";

export default function Services() {
  const treatments = treatmentsData.treatments.slice(0, 6);

  return (
    <section className="bg-[#F7F8F5] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#174E52]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#174E52]">
                Our Areas of Care
              </p>
            </div>

            <h2 className="max-w-2xl font-serif text-3xl leading-tight text-[#243331] sm:text-4xl lg:text-5xl">
              Care that begins with{" "}
              <span className="text-[#174E52]">understanding you.</span>
            </h2>
          </div>

          <div className="lg:justify-self-end lg:pb-1">
            <p className="max-w-lg text-sm leading-7 text-[#687570] sm:text-base">
              Every person has a different health journey. Explore our
              areas of care and learn how an individual consultation can
              help you discuss your concerns with our doctors.
            </p>

            <Link
              href="/treatments"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#174E52] transition-colors hover:text-[#C82506]"
            >
              Explore all treatments
              <FiArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        {/* Treatment Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-5">
          {treatments.map((treatment, index) => (
            <Link
              key={treatment.slug}
              href={treatment.href}
              className="group flex min-h-[245px] flex-col rounded-xl border border-[#E2E8E2] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B7CECA] hover:shadow-[0_12px_35px_rgba(23,78,82,0.07)] sm:p-6 lg:p-7"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDF4F0] text-[#174E52] transition-colors duration-300 group-hover:bg-[#174E52] group-hover:text-white">
                  {index % 3 === 0 ? (
                    <FiHeart size={21} strokeWidth={1.6} />
                  ) : index % 3 === 1 ? (
                    <FiActivity size={21} strokeWidth={1.6} />
                  ) : (
                    <FiPlus size={22} strokeWidth={1.6} />
                  )}
                </div>

                <span className="text-xs font-medium tracking-wider text-[#9AA7A0]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Card Content */}
              <h3 className="mt-6 font-serif text-xl leading-snug text-[#243331] transition-colors duration-300 group-hover:text-[#174E52] sm:text-2xl">
                {treatment.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#687570]">
                {treatment.shortDescription}
              </p>

              {/* Card Footer */}
              <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#174E52]">
                  Learn More
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DCE6DF] text-[#174E52] transition-all duration-300 group-hover:border-[#174E52] group-hover:bg-[#174E52] group-hover:text-white">
                  <FiArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Consultation CTA */}
        <div className="mt-8 flex flex-col gap-5 rounded-xl bg-[#174E52] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:mt-10 lg:px-10">
          <div className="flex items-start gap-4">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-white sm:flex">
              <FiCheckCircle size={22} />
            </div>

            <div>
              <h3 className="font-serif text-xl text-white sm:text-2xl">
                Not sure where to begin?
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
                Book a consultation to discuss your health concerns
                and understand the next steps with our clinic.
              </p>
            </div>
          </div>

          <Link
            href="/appointment"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#174E52] transition-colors hover:bg-[#EDF4F0]"
          >
            Book a Consultation
            <FiArrowUpRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}
