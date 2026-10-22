
"use client";

import Link from "next/link";
import reviewsData from "@/app/Data/Reviews.json";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";

const googleReviewsUrl =
  "https://www.google.com/maps/search/?api=1&query=Mishra+Homopathy+Clinic+Bandra+West+Mumbai";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6" aria-label="Google">
      <path
        fill="#4285F4"
        d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z"
      />
      <path
        fill="#34A853"
        d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z"
      />
      <path
        fill="#FBBC05"
        d="M12.6 27.6a12 12 0 0 1 0-7.2v-5.3H5.8a20 20 0 0 0 0 17.8l6.8-5.3Z"
      />
      <path
        fill="#EA4335"
        d="M24 12c3 0 5.7 1 7.8 3.1l5.8-5.8A19.4 19.4 0 0 0 24 4 20 20 0 0 0 5.8 15.1l6.8 5.3C14.2 15.6 18.7 12 24 12Z"
      />
    </svg>
  );
}

export default function Reviews() {
  const { reviews } = reviewsData;

  return (
    <section className="bg-[#F7F8F5] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        {/* Heading */}
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#174E52]">
            {reviews.label}
          </p>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#243331] sm:text-4xl lg:text-5xl">
            {reviews.title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#64716D] sm:text-base">
            {reviews.description}
          </p>
        </div>

        {/* Google rating summary */}
        <div className="mb-6 flex flex-col gap-5 rounded-xl border border-[#E0E8E2] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-center gap-4">
            <GoogleIcon />

            <div>
              <p className="text-sm font-semibold text-[#243331]">
                Google Reviews
              </p>

              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span className="font-serif text-2xl font-semibold text-[#243331]">
                  {reviews.rating}
                </span>

                <span className="text-sm tracking-wide text-[#E4A11B]">
                  ★★★★★
                </span>

                <span className="text-xs text-[#64716D]">
                  ({reviews.totalReviews} reviews)
                </span>
              </div>
            </div>
          </div>

          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 self-start rounded-full border border-[#174E52] px-5 py-2.5 text-sm font-semibold text-[#174E52] transition-colors hover:bg-[#174E52] hover:text-white sm:self-center"
          >
            View on Google
            <FiExternalLink size={15} />
          </a>
        </div>

        {/* Vertical Google review cards */}
        <div className="space-y-4">
          {reviews.items.map((review) => (
            <article
              key={review.id}
              className="rounded-xl border border-[#E0E8E2] bg-white p-5 transition-shadow duration-300 hover:shadow-sm sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  {review.authorPhoto ? (
                    <img
                      src={review.authorPhoto}
                      alt=""
                      loading="lazy"
                      className="h-11 w-11 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF2EC] font-semibold text-[#174E52]">
                      {review.authorName?.charAt(0)?.toUpperCase() || "P"}
                    </div>
                  )}

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-[#243331]">
                      {review.authorName}
                    </h3>

                    <p className="mt-1 text-xs text-[#829089]">
                      {review.relativeTime}
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  <GoogleIcon />
                </div>
              </div>

              <div
                className="mt-4 flex gap-1 text-base text-[#E4A11B]"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>
                    {star <= review.rating ? "★" : "☆"}
                  </span>
                ))}
              </div>

              <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[#53645D]">
                {review.text}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-8 text-center">
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 rounded-full bg-[#174E52] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#103C3F]"
          >
            Book an Appointment
            <FiArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
