
import Image from "next/image";
import doctorsData from "@/app/Data/Doctors.json";

const doctors = doctorsData.doctors.team || [];

function DoctorCard({ doctor }) {
  const qualifications = (doctor.qualifications || []).filter(
    (qualification) =>
      qualification &&
      !qualification.toLowerCase().includes("to be added")
  );

  const experience =
    doctor.experience &&
    !doctor.experience.toLowerCase().includes("to be added")
      ? doctor.experience
      : null;

  return (
    <article className="min-w-0">
      
{/* Doctor portrait — prevent head/body cropping */}
<div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E8EEEA]">
  <Image
    src={doctor.image}
    alt={doctor.name.trim()}
    fill
    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
    className="object-cover object-center"
  />
</div>


      {/* Doctor information */}
      <div className="pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#55766B]">
          {doctor.designation}
        </p>

        <h2 className="mt-2 font-serif text-2xl leading-snug text-[#203B38] sm:text-[27px]">
          {doctor.name.trim()}
        </h2>

        <div className="mt-5 border-t border-[#DCE4DE] pt-4">
          {experience && (
            <div className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-0.5 text-[#55766B]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>

              <div>
                <h3 className="text-sm font-semibold text-[#304742]">
                  Experience
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#687671]">
                  {experience}
                </p>
              </div>
            </div>
          )}

          {qualifications.length > 0 && (
            <div className={experience ? "mt-5 flex gap-3" : "flex gap-3"}>
              <span
                aria-hidden="true"
                className="mt-0.5 text-[#55766B]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M12 3 20 7v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>

              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-[#304742]">
                  Qualifications
                </h3>

                <ul className="mt-1 space-y-1">
                  {qualifications.map((qualification, index) => (
                    <li
                      key={index}
                      className="text-sm leading-6 text-[#687671]"
                    >
                      {qualification}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {!experience && qualifications.length === 0 && (
            <p className="text-sm leading-6 text-[#687671]">
              Professional details will be updated soon.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-[#F7F8F5] text-[#243331] pt-5">
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        {/* Page heading */}
        <header className="mb-9 border-b border-[#DCE4DE] pb-7 sm:mb-12 sm:pb-9">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#55766B]">
            Our Medical Team
          </p>

          <h1 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-[#203B38] sm:text-4xl lg:text-5xl">
            Meet Our Doctors
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#687671] sm:text-base">
            Get to know our homeopathic physicians, their experience
            and professional qualifications.
          </p>
        </header>

        {/* Doctors */}
        {doctors.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-3 lg:gap-x-10">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        ) : (
          <p className="py-10 text-sm text-[#687671]">
            Doctor profiles will be available soon.
          </p>
        )}
      </section>
    </main>
  );
}
