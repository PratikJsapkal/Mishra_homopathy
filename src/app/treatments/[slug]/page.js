import Link from "next/link";
import { notFound } from "next/navigation";

import treatmentsData from "@/app/Data/Treatments.json";

const treatments = treatmentsData.treatments;

export async function generateStaticParams() {
  return treatments.map((treatment) => ({
    slug: treatment.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const treatment = treatments.find(
    (item) => item.slug === slug
  );

  if (!treatment) {
    return {
      title: "Treatment Not Found | Mishra Homopathy Clinic",
    };
  }

  return {
    title: `${treatment.title} | Mishra Homopathy Clinic`,
    description: treatment.shortDescription,
  };
}

export default async function TreatmentPage({ params }) {
  const { slug } = await params;

  const treatment = treatments.find(
    (item) => item.slug === slug
  );

  if (!treatment) {
    notFound();
  }

  const relatedTreatments = treatments.filter(
    (item) => item.slug !== slug
  );

  return (
    <main className="bg-white pt-20">

      {/* Breadcrumb */}
      <section className="border-b border-black/10 bg-[#F3F1EE]">
        <div className="mx-auto max-w-7xl px-5 py-5 md:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-black/60"
          >
            <Link
              href="/"
              className="transition hover:text-[#C82506]"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/treatments"
              className="transition hover:text-[#C82506]"
            >
              Treatments
            </Link>

            <span>/</span>

            <span className="text-black">
              {treatment.title}
            </span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-[#F3F1EE] px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#C82506]">
              Treatment
            </p>

            <h1 className="font-serif text-4xl leading-tight text-black md:text-6xl">
              {treatment.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65 md:text-xl">
              {treatment.shortDescription}
            </p>

          </div>
        </div>
      </section>

      {/* About Treatment */}
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:gap-20">

          <div className="md:w-1/3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C82506]">
              About This Treatment
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
              Understanding your concerns starts with listening.
            </h2>
          </div>

          <div className="md:w-2/3">
            <p className="max-w-3xl text-lg leading-8 text-black/70">
              {treatment.shortDescription}
            </p>

            <p className="mt-6 max-w-3xl text-base leading-7 text-black/60">
              At Mishra Homopathy Clinic, consultations focus on
              understanding each patient's individual concerns,
              relevant health information and medical history before
              discussing the appropriate next steps.
            </p>
          </div>

        </div>
      </section>

      {/* Consultation Approach */}
      <section className="bg-[#F3F1EE] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C82506]">
              Our Approach
            </p>

            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              Care that starts with understanding.
            </h2>

            <p className="mt-5 leading-7 text-black/60">
              Every consultation is individual. Our doctors take time
              to understand your concerns and discuss the next steps
              clearly.
            </p>
          </div>

          <div className="mt-14 flex flex-col md:flex-row">

            <div className="flex-1 border-t border-black/15 py-8 md:border-l md:px-8 md:first:border-l-0">
              <span className="text-sm text-[#C82506]">
                01
              </span>

              <h3 className="mt-5 font-serif text-2xl">
                Listen
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-black/60">
                We take time to understand your concerns and
                individual circumstances.
              </p>
            </div>

            <div className="flex-1 border-t border-black/15 py-8 md:border-l md:px-8">
              <span className="text-sm text-[#C82506]">
                02
              </span>

              <h3 className="mt-5 font-serif text-2xl">
                Understand
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-black/60">
                Relevant health information and medical history
                are considered during the consultation.
              </p>
            </div>

            <div className="flex-1 border-t border-black/15 py-8 md:border-l md:px-8">
              <span className="text-sm text-[#C82506]">
                03
              </span>

              <h3 className="mt-5 font-serif text-2xl">
                Guide
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-black/60">
                The doctor explains the consultation and discusses
                appropriate next steps.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl bg-[#171717] px-6 py-14 text-white md:px-14 md:py-16">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
                Take the Next Step
              </p>

              <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
                Ready to discuss your concerns?
              </h2>

              <p className="mt-4 leading-7 text-white/65">
                Book a consultation with Mishra Homopathy Clinic
                to discuss your health concerns.
              </p>
            </div>

            <Link
              href="/appointment"
              className="inline-flex shrink-0 items-center justify-center bg-[#C82506] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#a91f05]"
            >
              Book Appointment
            </Link>

          </div>
        </div>
      </section>

      {/* Related Treatments */}
      <section className="border-t border-black/10 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C82506]">
                Explore More
              </p>

              <h2 className="mt-4 font-serif text-3xl md:text-4xl">
                Other Treatments
              </h2>
            </div>

            <Link
              href="/treatments"
              className="text-sm font-medium text-[#C82506] hover:underline"
            >
              View All Treatments →
            </Link>

          </div>

          <div className="mt-12 flex flex-col">

            {relatedTreatments.map((item) => (
              <Link
                key={item.slug}
                href={`/treatments/${item.slug}`}
                className="group flex items-center justify-between border-t border-black/10 py-6"
              >
                <span className="font-serif text-xl transition group-hover:text-[#C82506] md:text-2xl">
                  {item.title}
                </span>

                <span className="text-xl text-black/40 transition group-hover:translate-x-1 group-hover:text-[#C82506]">
                  →
                </span>
              </Link>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}