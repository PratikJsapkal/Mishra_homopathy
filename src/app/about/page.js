
import Image from "next/image";
import Link from "next/link";
import aboutData from "@/app/Data/about.json";

export const metadata = {
  title: "About Us | Mishra Homopathy Clinic",
  description:
    "Meet the founder of Mishra Homopathy Clinic and learn about our clinic, journey, mission and approach to patient care.",
};

export default function AboutPage() {
  const { clinic } = aboutData;
  const { founder, about, journey } = clinic;

  return (
    <main className="pt-20">
      {/* 1. Founder */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 md:flex-row md:items-center md:gap-14 md:px-8">
          {/* Founder image */}
          <div className="w-full shrink-0 md:w-[36%]">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#F7F8F5]">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 36vw"
                className="object-cover object-top"
              />
            </div>

            <div className="border border-[#E1E8E2] px-5 py-5">
              <h2 className="font-serif text-xl font-semibold text-[#203B38]">
                {founder.name}
              </h2>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#174E52]">
                {founder.designation}
              </p>
            </div>
          </div>

          {/* Founder information */}
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#174E52]">
              {founder.label}
            </p>

            <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#203B38] sm:text-4xl lg:text-5xl">
              A Personal Approach to Patient Care
            </h1>

            <p className="mt-6 text-sm leading-7 text-[#687671] sm:text-base">
              {founder.fullBio || founder.shortBio}
            </p>

            <div className="mt-8 border-t border-[#E1E8E2] pt-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:gap-10">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#87938D]">
                    Qualifications
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {founder.qualifications.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-6 text-[#687671]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#87938D]">
                    Experience
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#687671]">
                    {founder.experience}
                  </p>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#87938D]">
                    Areas of Practice
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {founder.specialization.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-6 text-[#687671]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Link
              href="/appointment"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#174E52] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#153F40]"
            >
              Book an Appointment <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. About the clinic */}
      <section className="bg-[#F7F8F5] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
            <div className="w-full md:w-[48%]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#174E52]">
                {about.label}
              </p>

              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#203B38] sm:text-4xl">
                {about.title}
              </h2>

              {about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="mt-5 text-sm leading-7 text-[#687671] sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden bg-white md:w-[52%]">
              <Image
                src={about.image}
                alt="Interior of Mishra Homopathy Clinic"
                fill
                sizes="(max-width: 768px) 100vw, 52vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Mission and vision */}
          <div className="mt-14 flex flex-col border-t border-[#D5E0D7] sm:flex-row">
            <div className="flex-1 py-8 sm:pr-10">
              <h3 className="font-serif text-2xl font-semibold text-[#174E52]">
                {about.mission.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#687671] sm:text-base">
                {about.mission.description}
              </p>
            </div>

            <div className="flex-1 border-t border-[#D5E0D7] py-8 sm:border-l sm:border-t-0 sm:pl-10">
              <h3 className="font-serif text-2xl font-semibold text-[#174E52]">
                {about.vision.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#687671] sm:text-base">
                {about.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our values */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#174E52]">
              What Guides Us
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#203B38] sm:text-4xl">
              The Values Behind Our Care
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap border-l border-t border-[#E1E8E2]">
            {about.values.map((value, index) => (
              <article
                key={value.title}
                className="flex w-full flex-col border-b border-r border-[#E1E8E2] p-6 sm:w-1/2 sm:p-8"
              >
                <span className="text-xs font-semibold tracking-[0.15em] text-[#174E52]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-[#203B38]">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#687671]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our journey */}
      <section className="bg-[#F7F8F5] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#174E52]">
              Our Journey
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#203B38] sm:text-4xl md:text-5xl">
              The Story of Our Clinic
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#687671] sm:text-base">
              Learn about the milestones that have shaped the clinic.
            </p>
          </div>

          <div className="mt-12 border-t border-[#D5E0D7]">
            {journey.map((item, index) => (
              <article
                key={`${item.year}-${item.title}`}
                className="flex flex-col gap-3 border-b border-[#D5E0D7] py-7 sm:flex-row sm:gap-10 sm:py-9"
              >
                <p className="w-full shrink-0 text-sm font-semibold text-[#174E52] sm:w-28">
                  {item.year}
                </p>

                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-[#203B38] sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#687671] sm:text-base">
                    {item.description}
                  </p>
                </div>

                <span className="hidden text-sm text-[#87938D] sm:block">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Appointment CTA */}
      <section className="bg-white px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 bg-[#153F40] px-7 py-12 sm:px-10 md:flex-row md:items-center md:px-14 md:py-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BFD5C8]">
              We Are Here to Help
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Have Questions About a Consultation?
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
              Get in touch with Mishra Homopathy Clinic to learn more
              about appointments and consultations.
            </p>
          </div>

          <Link
            href="/appointment"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#DCE7DF] px-6 py-3.5 text-sm font-semibold text-[#153F40] transition hover:bg-white"
          >
            Book Appointment <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
