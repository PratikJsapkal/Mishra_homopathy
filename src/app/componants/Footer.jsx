
import Link from "next/link";
import {
  FiArrowUpRight,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

const treatments = [
  { label: "Allergies", href: "/treatments/allergies" },
  { label: "Asthma & Respiratory", href: "/treatments/asthma-respiratory" },
  { label: "Skin Conditions", href: "/treatments/skin-conditions" },
  { label: "Digestive Problems", href: "/treatments/digestive-problems" },
  { label: "Joint Problems", href: "/treatments/joint-problems" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Health Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const contactDetails = [
  {
    label: "Call Us",
    value: "+91 07947125112",
    href: "tel:+9107947125112",
    Icon: FiPhone,
  },
  {
    label: "Email Us",
    value: "clinic@example.com",
    href: "mailto:clinic@example.com",
    Icon: FiMail,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#153F40] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:py-16 md:px-8 lg:py-20">
        {/* Clinic identity and appointment CTA */}
        <div className="flex flex-col gap-8 border-b border-white/15 pb-10 sm:pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <Link href="/" className="inline-flex flex-col">
              <span className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
               Dr.Mishra's Homopathy 
              </span>

              <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B9D5C8] sm:text-xs">
                Health With Holistic Healing
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Thoughtful consultations, personalized attention, and a
              patient-first approach to care.
            </p>
          </div>

          <Link
            href="/appointment"
            className="inline-flex w-fit items-center justify-center gap-3 rounded-full bg-[#E5EEE6] px-6 py-3.5 text-sm font-semibold text-[#153F40] transition-colors duration-300 hover:bg-white"
          >
            Book an Appointment
            <FiArrowUpRight size={17} />
          </Link>
        </div>

        {/* Navigation and contact */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-10 sm:gap-x-10 sm:py-12 lg:grid-cols-4 lg:gap-10">
          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B9D5C8]">
              Explore
            </h3>

            <ul className="mt-5 space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B9D5C8]">
              Areas of Care
            </h3>

            <ul className="mt-5 space-y-3.5">
              {treatments.map((treatment) => (
                <li key={treatment.href}>
                  <Link
                    href={treatment.href}
                    className="text-sm leading-6 text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {treatment.label}
                  </Link>
                </li>
              ))}

              <li className="pt-1">
                <Link
                  href="/treatments"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D5E6D9] transition-colors hover:text-white"
                >
                  All Treatments
                  <FiArrowUpRight size={15} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B9D5C8]">
              Get in Touch
            </h3>

            <div className="mt-5 space-y-5">
              {contactDetails.map(({ label, value, href, Icon }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#D5E6D9]">
                    <Icon size={17} />
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs text-white/50">{label}</p>

                    <a
                      href={href}
                      className="mt-1 block break-words text-sm text-white/85 transition-colors hover:text-white"
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B9D5C8]">
              Visit Our Clinic
            </h3>

            <div className="mt-5 flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#D5E6D9]">
                <FiMapPin size={17} />
              </span>

              <div>
                <p className="text-sm leading-6 text-white/80">
                  Bandra West, Mumbai
                </p>

                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#D5E6D9] transition-colors hover:text-white"
                >
                  Contact & Directions
                  <FiArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} Mishra Homopathy Clinic. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
