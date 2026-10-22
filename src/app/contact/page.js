
import Link from "next/link";
import contactData from "@/app/Data/Contact.json";

export default function Contact() {
  const { contact } = contactData;
  const { details, map, appointment } = contact;

  const phoneNumber = details.phone.replace(/[^\d+]/g, "");

  return (
    <main className="bg-white pt-20">
      {/* Page introduction */}
      <section className="bg-[#F7F8F5] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#174E52]">
            {contact.label}
          </p>

          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h1 className="max-w-2xl font-serif text-4xl font-semibold leading-tight text-[#203B38] sm:text-5xl md:text-6xl">
              {contact.title}
            </h1>

            <p className="max-w-lg text-sm leading-7 text-[#687671] sm:text-base">
              {contact.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact details and map */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
            {/* Contact information */}
            <div className="w-full lg:w-[38%]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#174E52]">
                Get in Touch
              </p>

              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#203B38]">
                Contact Information
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#687671]">
                Reach out to us for clinic information, consultation
                timings, or help planning your visit.
              </p>

              {/* Phone */}
              <div className="mt-8 flex gap-4 border-b border-[#E1E8E2] pb-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#DCE7DF] text-xl text-[#174E52]">
                  ☎
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-[#203B38]">
                    Phone
                  </h3>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="mt-2 block break-words text-sm text-[#687671] transition hover:text-[#174E52]"
                  >
                    {details.phone}
                  </a>
                  <p className="mt-1 text-xs text-[#87938D]">
                    Call us for enquiries
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 border-b border-[#E1E8E2] py-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#DCE7DF] text-lg text-[#174E52]">
                  ✉
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-[#203B38]">
                    Email
                  </h3>
                  <a
                    href={`mailto:${details.email}`}
                    className="mt-2 block break-words text-sm text-[#687671] transition hover:text-[#174E52]"
                  >
                    {details.email}
                  </a>
                  <p className="mt-1 text-xs text-[#87938D]">
                    Send us your enquiries
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 border-b border-[#E1E8E2] py-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#DCE7DF] text-xl text-[#174E52]">
                  ⌖
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-[#203B38]">
                    Clinic Address
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#687671]">
                    {details.address}
                  </p>

                  {map.directionsUrl && (
                    <a
                      href={map.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#174E52] hover:underline"
                    >
                      Get Directions <span>↗</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Opening hours */}
              <div className="pt-6">
                <div className="flex items-center gap-3">
                  <span className="text-lg text-[#174E52]">◷</span>
                  <h3 className="text-sm font-semibold text-[#203B38]">
                    Opening Hours
                  </h3>
                </div>

                <div className="mt-4 flex flex-col gap-3">
                  {details.openingHours.map((item) => (
                    <div
                      key={item.days}
                      className="flex flex-wrap justify-between gap-2 text-sm"
                    >
                      <span className="text-[#687671]">{item.days}</span>
                      <span className="text-right font-medium text-[#203B38]">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full lg:flex-1">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-[#203B38]">
                    Find Our Clinic
                  </h2>
                  <p className="mt-2 text-sm text-[#687671]">
                    Plan your visit using Google Maps.
                  </p>
                </div>
              </div>

              <div className="relative mt-6 min-h-[350px] overflow-hidden border border-[#E1E8E2] bg-[#F7F8F5] sm:min-h-[430px]">
                {map.embedUrl ? (
                  <iframe
                    title="Mishra Homopathy Clinic location on Google Maps"
                    src={map.embedUrl}
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      position: "absolute",
                      inset: 0,
                    }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex min-h-[350px] flex-col items-center justify-center px-6 text-center sm:min-h-[430px]">
                    <span className="text-3xl text-[#174E52]">⌖</span>
                    <h3 className="mt-4 font-serif text-xl font-semibold text-[#203B38]">
                      Google Maps
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-[#687671]">
                      Add the clinic's Google Maps embed URL to display its
                      exact location here.
                    </p>

                    {map.directionsUrl && (
                      <a
                        href={map.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#174E52] px-5 py-3 text-sm font-semibold text-white hover:bg-[#153F40]"
                      >
                        Open in Google Maps ↗
                      </a>
                    )}
                  </div>
                )}
              </div>

              {map.directionsUrl && (
                <a
                  href={map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#174E52] hover:underline"
                >
                  Open Directions in Google Maps <span>↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="bg-[#F7F8F5] px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 bg-[#153F40] px-7 py-10 sm:px-10 md:flex-row md:items-center md:px-14 md:py-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BFD5C8]">
              Schedule a Visit
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {appointment.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">
              {appointment.description}
            </p>
          </div>

          <Link
            href={appointment.href}
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#DCE7DF] px-6 py-3.5 text-sm font-semibold text-[#153F40] transition hover:bg-white"
          >
            {appointment.buttonLabel}
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
