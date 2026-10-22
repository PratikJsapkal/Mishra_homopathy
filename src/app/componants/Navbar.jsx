"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import navbarData from "@/app/Data/Navbar.json";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTreatmentOpen, setIsTreatmentOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setIsTreatmentOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsTreatmentOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-sm">
      <nav className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">

    {/* LOGO */}
<Link
  href="/"
  aria-label="Mishra Homopathy Clinic home"
  className="flex shrink-0 items-center"
>
  <Image
    src="/logo.svg"
    alt="Mishra Homopathy Clinic — Always There. Always Genuine."
    width={240}
    height={100}
    priority
    className="h-12 w-auto object-contain sm:h-14 lg:h-16"
  />
</Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-5 md:flex lg:gap-8">
          <div className="flex items-center gap-5 lg:gap-7">
            {navbarData.links.map((link) => {
              if (link.dropdown && link.items) {
                return (
                  <div
                    key={link.label}
                    className="group relative flex items-center"
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 whitespace-nowrap text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-[#174E52]"
                    >
                      {link.label}

                      <svg
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>

                    <div className="pointer-events-none absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
                        {link.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block border-b border-gray-100 px-5 py-3 text-sm text-gray-700 last:border-b-0 hover:bg-gray-50 hover:text-[#174E52]"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="whitespace-nowrap text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-[#174E52]"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* DESKTOP APPOINTMENT BUTTON */}
          <Link
            href={navbarData.cta.href}
            className="whitespace-nowrap rounded-full bg-[#174E52] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#103D40] hover:shadow-md"
          >
            {navbarData.cta.label}
          </Link>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="flex shrink-0 items-center gap-1.5 md:hidden">
          <Link
            href={navbarData.cta.href}
            onClick={closeMobileMenu}
            className="whitespace-nowrap rounded-full bg-[#174E52] px-3 py-2 text-[11px] font-semibold text-white transition-colors duration-200 hover:bg-[#103D40] min-[380px]:px-4 min-[380px]:text-xs"
          >
            {navbarData.cta.label}
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 shrink-0 items-center justify-center"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full bg-[#171717] transition-all duration-300 ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-[#171717] transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 w-full bg-[#171717] transition-all duration-300 ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-[700px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-5 py-3">
          {navbarData.links.map((link) => {
            if (link.dropdown && link.items) {
              return (
                <div
                  key={link.label}
                  className="border-b border-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="py-4 text-base font-medium text-gray-800 transition-colors duration-200 hover:text-[#174E52]"
                    >
                      {link.label}
                    </Link>

                    <button
                      type="button"
                      aria-label="Toggle treatments"
                      aria-expanded={isTreatmentOpen}
                      onClick={() =>
                        setIsTreatmentOpen((prev) => !prev)
                      }
                      className="flex h-10 w-10 items-center justify-center"
                    >
                      <svg
                        className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${
                          isTreatmentOpen ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isTreatmentOpen
                        ? "max-h-[600px] pb-2"
                        : "max-h-0"
                    }`}
                  >
                    <div className="flex flex-col">
                      {link.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="border-t border-gray-50 py-3 pl-4 text-sm text-gray-600 transition-colors duration-200 hover:text-[#174E52]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="border-b border-gray-100 py-4 text-base font-medium text-gray-800 transition-colors duration-200 hover:text-[#174E52]"
              >
                {link.label}
              </Link>
            );
          })}

          {/* MOBILE MENU APPOINTMENT BUTTON */}
          <Link
            href={navbarData.cta.href}
            onClick={closeMobileMenu}
            className="mb-3 mt-5 flex items-center justify-center rounded-full bg-[#174E52] px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#103D40]"
          >
            {navbarData.cta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}