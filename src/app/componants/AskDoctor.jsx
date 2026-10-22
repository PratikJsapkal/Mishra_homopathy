
"use client";

import { useState } from "react";
import {
  FiMail,
  FiMessageCircle,
  FiArrowUpRight,
  FiShield,
} from "react-icons/fi";

export default function AskDoctor() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  // Replace with the clinic's actual email address.
  const doctorEmail = "your-clinic-email@example.com";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Patient Question from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Hello Doctor,

My name is ${formData.name}.
My email is ${formData.email}.

My Question:
${formData.question}

Thank you.`
    );

    window.location.href =
      `mailto:${doctorEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-[#F7F5EF] px-4 py-14 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">

          {/* INTRO - ABOVE FORM ON MOBILE, LEFT ON DESKTOP */}
          <div>
            <div className="mb-4 flex items-center justify-center gap-2 text-sm font-medium text-[#174E52] lg:justify-start">
              <FiMessageCircle size={18} />
              <span>PERSONAL GUIDANCE</span>
            </div>

            <h2 className="text-center font-serif text-3xl leading-tight text-[#243331] sm:text-4xl lg:text-left lg:text-5xl">
              Have a question?
              <span className="mt-1 block text-[#174E52]">
                Ask our doctor.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-center text-base leading-7 text-[#5F6B66] sm:text-lg lg:mx-0 lg:text-left">
              Every health concern deserves attention. Send us your
              question and our clinic will get back to you by email.
            </p>

            {/* INFORMATION POINTS - DESKTOP ONLY */}
            <div className="mt-8 hidden space-y-5 lg:block">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#174E52]">
                  <FiMail size={20} />
                </div>

                <div>
                  <h3 className="font-medium text-[#243331]">
                    Direct email communication
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#69746F]">
                    Share your concern with our clinic from the comfort
                    of your home.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#174E52]">
                  <FiShield size={20} />
                </div>

                <div>
                  <h3 className="font-medium text-[#243331]">
                    Your concern matters
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#69746F]">
                    Please avoid including sensitive personal or medical
                    information in your initial message.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* QUESTION FORM */}
          <div className="rounded-2xl border border-[#E5E5DC] bg-white p-5 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-7">
              <h3 className="font-serif text-2xl text-[#243331] sm:text-3xl">
                Ask your question
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#69746F]">
                Fill in the details below to prepare your email.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* NAME */}
              <div>
                <label
                  htmlFor="patient-name"
                  className="mb-2 block text-sm font-medium text-[#243331]"
                >
                  Your name
                </label>

                <input
                  id="patient-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  maxLength={100}
                  autoComplete="name"
                  className="w-full rounded-lg border border-[#DDE2DC] bg-[#FCFCFA] px-4 py-3 text-sm text-[#243331] outline-none transition placeholder:text-[#9AA39D] focus:border-[#174E52] focus:ring-2 focus:ring-[#174E52]/10"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="patient-email"
                  className="mb-2 block text-sm font-medium text-[#243331]"
                >
                  Email address
                </label>

                <input
                  id="patient-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  maxLength={254}
                  autoComplete="email"
                  className="w-full rounded-lg border border-[#DDE2DC] bg-[#FCFCFA] px-4 py-3 text-sm text-[#243331] outline-none transition placeholder:text-[#9AA39D] focus:border-[#174E52] focus:ring-2 focus:ring-[#174E52]/10"
                />
              </div>

              {/* QUESTION */}
              <div>
                <label
                  htmlFor="patient-question"
                  className="mb-2 block text-sm font-medium text-[#243331]"
                >
                  Your question
                </label>

                <textarea
                  id="patient-question"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  placeholder="Tell us briefly how we can help..."
                  required
                  maxLength={2000}
                  rows={5}
                  className="w-full resize-y rounded-lg border border-[#DDE2DC] bg-[#FCFCFA] px-4 py-3 text-sm leading-6 text-[#243331] outline-none transition placeholder:text-[#9AA39D] focus:border-[#174E52] focus:ring-2 focus:ring-[#174E52]/10"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#174E52] px-5 py-3.5 text-sm font-medium text-white transition hover:bg-[#103D40] focus:outline-none focus:ring-2 focus:ring-[#174E52] focus:ring-offset-2"
              >
                Send Question
                <FiArrowUpRight size={18} />
              </button>

              <p className="text-center text-xs leading-5 text-[#7A847E]">
                This opens your email application. Your message is not
                sent automatically.
              </p>
            </form>
          </div>

          {/* INFORMATION POINTS - MOBILE ONLY, BELOW FORM */}
          <div className="grid gap-6 sm:grid-cols-2 lg:hidden">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#174E52]">
                <FiMail size={20} />
              </div>

              <div>
                <h3 className="font-medium text-[#243331]">
                  Direct email communication
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#69746F]">
                  Share your concern with our clinic from the comfort
                  of your home.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#174E52]">
                <FiShield size={20} />
              </div>

              <div>
                <h3 className="font-medium text-[#243331]">
                  Your concern matters
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#69746F]">
                  Please avoid including sensitive personal or medical
                  information in your initial message.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
