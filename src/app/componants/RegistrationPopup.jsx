"use client";

import { useEffect, useState } from "react";
import { X, UserRound, Mail, MapPin, ArrowRight } from "lucide-react";

export default function RegistrationPopup({
  isOpen,
  onClose,
  onRegister,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
      submit: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Please enter your location.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    if (!onRegister) {
      setErrors({
        submit: "Registration service is not connected yet.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setErrors({});

      await onRegister({
        name: formData.name.trim(),
        email: formData.email.trim(),
        location: formData.location.trim(),
      });
    } catch (error) {
      setErrors({
        submit:
          error?.message ||
          "Unable to complete registration. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose?.();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="registration-title"
        className="relative my-auto w-full max-w-4xl overflow-hidden bg-white shadow-2xl"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close registration"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center bg-white text-black/60 transition hover:text-[#C82506]"
        >
          <X size={22} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left panel */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-[#171717] px-6 py-8 text-white sm:px-9 sm:py-10 md:w-[42%] md:px-10 md:py-12">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
            <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full border border-white/10" />

            <div className="relative">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">
                Mishra Homopathy Clinic
              </p>

              <div className="mb-5 mt-8 h-px w-12 bg-[#C82506]" />

              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
                Your health journey starts here.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
                Create your account to make appointment booking and
                managing your visits easier.
              </p>
            </div>

            <div className="relative mt-8 hidden border-t border-white/15 pt-5 md:block">
              <p className="font-serif text-lg italic text-white/80">
                Always There. Always Genuine.
              </p>
            </div>
          </div>

          {/* Form panel */}
          <div className="px-5 py-8 sm:px-9 sm:py-10 md:w-[58%] md:px-12 md:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C82506]">
              Create Account
            </p>

            <h2
              id="registration-title"
              className="mt-3 font-serif text-3xl text-black sm:text-4xl"
            >
              Register
            </h2>

            <p className="mt-3 text-sm leading-6 text-black/55">
              Enter your details to get started.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="registration-name"
                  className="mb-2 block text-sm font-medium text-black/80"
                >
                  Full Name
                </label>

                <div className="flex items-center border border-black/15 transition focus-within:border-[#C82506]">
                  <UserRound
                    size={18}
                    className="ml-4 shrink-0 text-black/40"
                  />

                  <input
                    id="registration-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? "registration-name-error" : undefined
                    }
                    className="min-w-0 w-full bg-transparent px-3 py-3.5 text-sm outline-none placeholder:text-black/35"
                  />
                </div>

                {errors.name && (
                  <p id="registration-name-error" className="mt-1.5 text-xs text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="registration-email"
                  className="mb-2 block text-sm font-medium text-black/80"
                >
                  Email Address
                </label>

                <div className="flex items-center border border-black/15 transition focus-within:border-[#C82506]">
                  <Mail
                    size={18}
                    className="ml-4 shrink-0 text-black/40"
                  />

                  <input
                    id="registration-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? "registration-email-error" : undefined
                    }
                    className="min-w-0 w-full bg-transparent px-3 py-3.5 text-sm outline-none placeholder:text-black/35"
                  />
                </div>

                {errors.email && (
                  <p id="registration-email-error" className="mt-1.5 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="registration-location"
                  className="mb-2 block text-sm font-medium text-black/80"
                >
                  Location
                </label>

                <div className="flex items-center border border-black/15 transition focus-within:border-[#C82506]">
                  <MapPin
                    size={18}
                    className="ml-4 shrink-0 text-black/40"
                  />

                  <input
                    id="registration-location"
                    name="location"
                    type="text"
                    autoComplete="address-level2"
                    placeholder="Enter your city or location"
                    value={formData.location}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.location)}
                    aria-describedby={
                      errors.location
                        ? "registration-location-error"
                        : undefined
                    }
                    className="min-w-0 w-full bg-transparent px-3 py-3.5 text-sm outline-none placeholder:text-black/35"
                  />
                </div>

                {errors.location && (
                  <p id="registration-location-error" className="mt-1.5 text-xs text-red-600">
                    {errors.location}
                  </p>
                )}
              </div>

              {errors.submit && (
                <p role="alert" className="text-sm text-red-600">
                  {errors.submit}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-3 bg-[#C82506] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#a91f05] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Please wait..." : "Create Account"}

                {!isSubmitting && <ArrowRight size={18} />}
              </button>

              <p className="text-center text-xs leading-5 text-black/45">
                By registering, you agree to our{" "}
                <a href="/terms" className="text-[#C82506] underline">
                  Terms
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-[#C82506] underline">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}