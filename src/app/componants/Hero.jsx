
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5EF]">
      {/* Subtle decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full border border-[#174E52]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-44 h-56 w-56 rounded-full border border-[#174E52]/10"
      />

      <div className="mx-auto max-w-[1440px] px-5 pb-14 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-20 lg:pt-36">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-14 xl:gap-20">
          {/* Left: Main message and centered booking CTA */}
          <div className="relative z-10 flex-1 text-center lg:max-w-[51%]">
            <div className="mb-7 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#174E52]" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#174E52]">
                Mishra Homopathy Clinic
              </p>
              <span className="h-px w-10 bg-[#174E52]" />
            </div>

            <h1 className="font-serif text-[2.7rem] font-medium leading-[1.12] tracking-tight text-[#243331] sm:text-6xl lg:text-[4.2rem] xl:text-[4.8rem]">
              A more personal
              <span className="mt-2 block text-[#174E52]">
                approach to
              </span>
              your healthcare.
            </h1>

            <p className="mx-auto mt-7 max-w-lg text-base leading-8 text-[#586562] sm:text-lg">
              Every health journey is personal. Start with a conversation,
              share what concerns you, and explore your care options with
              our clinic.
            </p>

            {/* Prominent primary appointment button */}
            <div className="mt-9 flex flex-col items-center">
              <Link
                href="/appointment"
                className="group inline-flex min-h-[64px] w-full max-w-[350px] items-center justify-center gap-4 rounded-sm bg-[#174E52] px-8 py-5 text-base font-semibold text-white shadow-[0_12px_30px_rgba(23,78,82,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#103D40] hover:shadow-[0_18px_38px_rgba(23,78,82,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#174E52] sm:min-h-[70px] sm:text-lg"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-6 w-6 shrink-0"
                >
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M16 3v4M8 3v4M3 10h18" />
                </svg>

                <span>Book an Appointment</span>

                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>

              <Link
                href="/doctors"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#243331] transition-colors hover:text-[#174E52] sm:text-base"
              >
                Get to Know Our Doctors
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            {/* Brand signature */}
            <div className="mt-10 flex items-center justify-center gap-4 border-t border-[#174E52]/15 pt-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#174E52]/25 text-[#174E52]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="h-6 w-6"
                >
                  <path
                    d="M16 26V8M16 16C8 16 6 10 6 6C12 6 16 10 16 16ZM16 20C24 20 26 14 26 10C20 10 16 14 16 20Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="text-left">
                <p className="font-serif text-lg text-[#243331]">
                  Always There. Always Genuine.
                </p>
                <p className="mt-1 text-xs leading-5 text-[#697570]">
                  A welcoming space for your healthcare conversations.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Photography and supporting appointment card */}
          <div className="relative w-full flex-1 lg:max-w-[49%]">
            <div className="relative ml-3 mr-3 sm:ml-6 sm:mr-6 lg:ml-0 lg:mr-3">
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 h-full w-full border border-[#174E52]/30 sm:-right-5 sm:-top-5"
              />

              <div className="relative aspect-[4/5] max-h-[650px] overflow-hidden bg-[#DCE7DF] sm:aspect-[5/5.5]">
                <Image
                  src="/hero1.jpg"
                  alt="A welcoming environment at Mishra Homopathy Clinic"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 48vw"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#172B29]/35 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
                  <p className="max-w-[220px] font-serif text-2xl leading-snug text-white sm:text-3xl">
                    Care begins with a conversation.
                  </p>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/60 text-white">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-5 w-5"
                    >
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Secondary appointment prompt */}
              <div className="relative -mt-1 ml-auto w-[94%] border border-[#174E52]/10 bg-white p-5 shadow-[0_18px_50px_rgba(36,51,49,0.10)] sm:absolute sm:-bottom-7 sm:-left-12 sm:mt-0 sm:w-[310px] sm:p-6 lg:-left-14">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#DCE7DF] text-[#174E52]">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-6 w-6"
                    >
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M16 3v4M8 3v4M3 10h18" />
                    </svg>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-serif text-xl text-[#243331]">
                      Your visit starts here.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#697570]">
                      Choose a suitable time to request your consultation.
                    </p>
                    <Link
                      href="/appointment"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#174E52] hover:underline hover:underline-offset-4"
                    >
                      Schedule a visit
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-12 right-0 -z-0 h-28 w-28 rounded-full bg-[#DCE7DF]/70 blur-2xl"
            />
          </div>
        </div>
      </div>

      {/* Bottom brand strip */}
      <div className="bg-[#174E52]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-5 text-center sm:px-8 md:flex-row md:items-center md:justify-between md:px-12">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/90">
            Health With Holistic Healing
          </p>
          <p className="text-xs text-white/70">
            Bandra West, Mumbai
          </p>
        </div>
      </div>
    </section>
  );
}