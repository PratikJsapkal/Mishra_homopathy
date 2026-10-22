
"use client";

import { useRef } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiPlay,
  FiVideo,
} from "react-icons/fi";

const videos = [
  {
    id: 1,
    title: "Understanding Homeopathy",
    video: "/videos/video1.mp4",
    category: "Health Education",
  },
  {
    id: 2,
    title: "A Look Inside Our Clinic",
    video: "/videos/video2.mp4",
    category: "Our Clinic",
  },
  {
    id: 3,
    title: "Patient Care at Our Clinic",
    video: "/videos/video3.mp4",
    category: "Patient Care",
  },
  {
    id: 4,
    title: "Common Health Concerns",
    video: "/videos/video4.mp4",
    category: "Health Education",
  },
  {
    id: 5,
    title: "Meet Our Doctor",
    video: "/videos/video1.mp4",
    category: "Meet Our Doctor",
  },
  {
    id: 6,
    title: "Your First Consultation",
    video: "/videos/video3.mp4",
    category: "Consultation",
  },
];

export default function ShortVideos() {
  const videoListRef = useRef(null);

  const scrollVideos = (direction) => {
    const container = videoListRef.current;
    if (!container) return;

    const firstCard = container.querySelector("[data-video-card]");
    const cardWidth = firstCard
      ? firstCard.getBoundingClientRect().width + 20
      : 320;

    container.scrollBy({
      left: direction === "next" ? cardWidth * 2 : -cardWidth * 2,
      behavior: "smooth",
    });
  };

  const arrowClass =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D8E3DA] bg-white text-[#174E52] transition-all duration-300 hover:border-[#174E52] hover:bg-[#174E52] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174E52] focus-visible:ring-offset-2";

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#174E52]" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#174E52] sm:text-sm">
                From Our Clinic
              </p>
            </div>

            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#243331] sm:text-4xl lg:text-5xl">
              A closer look at care and wellness.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#64716D] sm:text-base">
              Explore our clinic, meet our doctor, and learn more about
              consultations and homoeopathy through our short videos.
            </p>
          </div>

          {/* Desktop navigation */}
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              aria-label="Previous videos"
              onClick={() => scrollVideos("prev")}
              className={arrowClass}
            >
              <FiArrowLeft size={19} />
            </button>

            <button
              type="button"
              aria-label="Next videos"
              onClick={() => scrollVideos("next")}
              className={arrowClass}
            >
              <FiArrowRight size={19} />
            </button>
          </div>
        </div>

        {/* Video carousel */}
        <div
          ref={videoListRef}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-14"
        >
          {videos.map((video, index) => (
            <article
              key={video.id}
              data-video-card
              className="w-[76vw] max-w-[280px] shrink-0 snap-start sm:w-[260px] lg:w-[270px]"
            >
              {/* Video frame */}
              <div className="relative overflow-hidden rounded-2xl border border-[#E0E8E2] bg-[#EAF0EB] p-1.5">
                <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-[#DCE7DF]">
                  <video
                    src={video.video}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={video.title}
                    className="h-full w-full object-cover"
                  />

                  {/* Video number */}
                  <span className="pointer-events-none absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-[#174E52]/85 text-xs font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Video information */}
              <div className="px-1 pt-4">
                <div className="mb-2 flex items-center gap-2">
                  <FiVideo
                    size={14}
                    className="shrink-0 text-[#64877A]"
                  />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#64877A] sm:text-xs">
                    {video.category}
                  </p>
                </div>

                <h3 className="font-serif text-lg font-semibold leading-snug text-[#243331] sm:text-xl">
                  {video.title}
                </h3>

                <div className="mt-3 h-px w-10 bg-[#A9C4B2]" />
              </div>
            </article>
          ))}
        </div>

        {/* Mobile navigation */}
        <div className="mt-5 flex items-center justify-between md:hidden">
          <p className="text-xs text-[#829089]">
            Swipe to explore more videos
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous videos"
              onClick={() => scrollVideos("prev")}
              className={arrowClass}
            >
              <FiArrowLeft size={18} />
            </button>

            <button
              type="button"
              aria-label="Next videos"
              onClick={() => scrollVideos("next")}
              className={arrowClass}
            >
              <FiArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
