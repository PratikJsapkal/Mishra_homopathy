
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiClock,
  FiHeart,
  FiMapPin,
  FiUser,
  FiPhone,
  FiMail,
  FiClipboard,
  FiShield,
} from "react-icons/fi";

const treatments = [
  "Allergies",
  "Asthma & Respiratory",
  "Skin Conditions",
  "Digestive Problems",
  "Migraine & Headaches",
  "Joint Problems",
  "Women's Health",
  "Children's Health",
  "Stress & Sleep",
];

const schedule = {
  Monday: { status: "available", hours: "3:00 PM – 9:00 PM" },
  Tuesday: { status: "available", hours: "3:00 PM – 9:00 PM" },
  Wednesday: { status: "limited", hours: "3:00 PM – 6:00 PM" },
  Thursday: { status: "available", hours: "3:00 PM – 9:00 PM" },
  Friday: { status: "available", hours: "3:00 PM – 9:00 PM" },
  Saturday: { status: "limited", hours: "12:00 PM – 5:00 PM" },
  Sunday: { status: "closed", hours: "Closed" },
};

const timeSlots = [
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
];

const steps = [
  { title: "Treatment", description: "Choose your consultation", icon: FiHeart },
  { title: "Date", description: "Pick a suitable day", icon: FiCalendar },
  { title: "Time", description: "Choose a time slot", icon: FiClock },
  { title: "Your Details", description: "Your contact information", icon: FiUser },
  { title: "Review", description: "Check your request", icon: FiClipboard },
];

const inputClass =
  "mt-2 w-full rounded-xl border border-[#DDE5DF] bg-white px-4 py-3.5 text-sm text-[#243331] outline-none transition placeholder:text-[#9AA6A0] focus:border-[#477B70] focus:ring-4 focus:ring-[#477B70]/10";

const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#174E52] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#103C3F] disabled:cursor-not-allowed disabled:bg-[#D8E0DB] disabled:text-[#84918A]";

const secondaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#DDE5DF] px-5 py-3 text-sm font-semibold text-[#43534D] transition hover:bg-[#F3F6F2]";

function formatDate(day) {
  if (!day) return "";
  return `${day.fullDay}, ${day.dayNumber} ${day.month} ${day.year}`;
}

function DetailRow({ label, children }) {
  return (
    <div className="flex flex-col gap-1 border-b border-[#E9EEE9] px-5 py-4 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <span className="text-sm text-[#75817B]">{label}</span>
      <span className="break-words text-sm font-semibold text-[#243331] sm:max-w-[65%] sm:text-right">
        {children || "Not provided"}
      </span>
    </div>
  );
}

export default function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const [patient, setPatient] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const weekDays = useMemo(() => {
    const today = new Date();

    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date(today);
      date.setHours(0, 0, 0, 0);
      date.setDate(today.getDate() + index);

      return {
        date,
        dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
        fullDay: date.toLocaleDateString("en-US", { weekday: "long" }),
        dayNumber: date.getDate(),
        month: date.toLocaleDateString("en-US", { month: "short" }),
        year: date.getFullYear(),
      };
    });
  }, []);

  const selectedSchedule = selectedDate
    ? schedule[selectedDate.fullDay]
    : null;

  const availableTimes = useMemo(() => {
    if (!selectedDate || !selectedSchedule) return [];

    const [startText, endText] = selectedSchedule.hours.split(" – ");

    const toMinutes = (time) => {
      const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (!match) return 0;

      let hours = Number(match[1]) % 12;
      if (match[3].toUpperCase() === "PM") hours += 12;

      return hours * 60 + Number(match[2]);
    };

    const start = toMinutes(startText);
    const end = toMinutes(endText);

    return timeSlots.filter((time) => {
      const value = toMinutes(time);
      return value >= start && value < end;
    });
  }, [selectedDate, selectedSchedule]);

  // Demonstration only: replace with actual backend availability.
  const isTimeUnavailable = (time) => {
    const index = timeSlots.indexOf(time);
    return index === 2 || index === 6 || index === 9;
  };

  const handlePatientChange = (event) => {
    const { name, value } = event.target;
    setPatient((previous) => ({ ...previous, [name]: value }));
  };

  const handleDateSelect = (day) => {
    if (schedule[day.fullDay].status === "closed") return;

    setSelectedDate(day);
    setSelectedTime("");
  };

  const goNext = () => setStep((current) => Math.min(current + 1, 5));
  const goBack = () => setStep((current) => Math.max(current - 1, 1));

  const canContinue =
    (step === 1 && Boolean(selectedTreatment)) ||
    (step === 2 && Boolean(selectedDate)) ||
    (step === 3 && Boolean(selectedTime)) ||
    (step === 4 && Boolean(patient.name.trim()) && Boolean(patient.phone.trim()));

  const handleConfirm = () => {
    // UI demonstration only. Connect your booking API before production.
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <main className="min-h-screen bg-[#F7F8F5] px-5 pb-16 pt-28 md:px-8 md:pt-36">
        <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-[#E5EBE5] bg-white shadow-sm">
          <div className="bg-[#174E52] px-6 py-10 text-center text-white sm:px-12 sm:py-14">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
              <FiCheck size={30} />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#DCE7DF]">
              Appointment Request
            </p>
            <h1 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              Thank you, {patient.name}!
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/80">
              Your request has been recorded in this demo. The clinic will need
              to confirm the appointment with you.
            </p>
          </div>

          <div className="p-6 sm:p-10">
            <div className="mb-5 flex items-center gap-3">
              <FiCalendar className="text-[#477B70]" size={20} />
              <h2 className="font-serif text-xl text-[#243331]">
                Your selected appointment
              </h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#E5EBE5]">
              <DetailRow label="Treatment">{selectedTreatment}</DetailRow>
              <DetailRow label="Date">{formatDate(selectedDate)}</DetailRow>
              <DetailRow label="Time">{selectedTime}</DetailRow>
              <DetailRow label="Phone">{patient.phone}</DetailRow>
            </div>

            <p className="mt-5 flex items-start gap-2 text-xs leading-6 text-[#75817B]">
              <FiShield className="mt-1 shrink-0" />
              This screen does not save an appointment to the clinic's database
              or send a notification. Connect the booking API before using this
              flow with real patients.
            </p>

            <Link href="/" className={`${primaryButton} mt-7 w-full`}>
              Return to Home <FiArrowRight />
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F8F5] px-4 pb-16 pt-28 sm:px-6 md:px-8 md:pt-36">
      <div className="mx-auto max-w-6xl">
        {/* Page heading */}
        <header className="mb-9 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#DCE7DF] bg-white px-3.5 py-2 text-xs font-semibold text-[#477B70]">
            <FiHeart size={14} />
            MISHRA HOMOPATHY CLINIC
          </div>

          <h1 className="mt-5 font-serif text-4xl font-medium leading-tight text-[#243331] sm:text-5xl">
            Let&apos;s plan your visit.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#64716D] sm:text-base">
            Choose a treatment, find a suitable time, and share your contact
            details to request a consultation.
          </p>
        </header>

        {/* Booking layout */}
        <div className="overflow-hidden rounded-3xl border border-[#E5EBE5] bg-white shadow-[0_12px_45px_rgba(28,58,46,0.06)] lg:flex">
          {/* Step navigation */}
          <aside className="bg-[#174E52] p-6 text-white sm:p-8 lg:w-[285px] lg:shrink-0 xl:w-[310px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B9D5C8]">
              Your booking
            </p>

            <h2 className="mt-3 font-serif text-2xl">
              A few simple steps
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/65">
              Complete the details below to request your consultation.
            </p>

            <div className="mt-8 grid grid-cols-5 gap-1.5 lg:hidden">
              {steps.map((item) => (
                <div
                  key={item.title}
                  className={`h-1.5 rounded-full ${
                    step >= steps.indexOf(item) + 1
                      ? "bg-[#B9D5C8]"
                      : "bg-white/20"
                  }`}
                />
              ))}
            </div>

            <div className="mt-8 space-y-6">
              {steps.map((item, index) => {
                const number = index + 1;
                const active = step === number;
                const completed = step > number;
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-3.5">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                        active
                          ? "border-[#DCE7DF] bg-[#DCE7DF] text-[#174E52]"
                          : completed
                          ? "border-white/30 bg-white/10 text-white"
                          : "border-white/20 text-white/50"
                      }`}
                    >
                      {completed ? <FiCheck size={17} /> : <Icon size={17} />}
                    </div>
                    <div className="pt-0.5">
                      <p
                        className={`text-sm font-semibold ${
                          active ? "text-white" : "text-white/65"
                        }`}
                      >
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-white/45">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 hidden rounded-2xl border border-white/15 bg-white/[0.06] p-4 lg:block">
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <FiShield className="text-[#B9D5C8]" />
                Your details matter
              </div>
              <p className="mt-2 text-xs leading-5 text-white/60">
                Only provide information needed for the clinic to contact you.
              </p>
            </div>
          </aside>

          {/* Form content */}
          <section className="min-w-0 flex-1 p-5 sm:p-8 md:p-10 lg:p-12">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#477B70]">
                  Step {String(step).padStart(2, "0")} of 05
                </p>
                <h2 className="mt-2 font-serif text-2xl leading-tight text-[#243331] sm:text-3xl">
                  {[
                    "What would you like help with?",
                    "Choose your preferred date",
                    "Select a time that suits you",
                    "Your contact details",
                    "Review your request",
                  ][step - 1]}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#75817B]">
                  {[
                    "Choose the area that best matches your concern.",
                    "Select one of the days shown below.",
                    "Choose from the listed time slots.",
                    "The clinic can use these details to contact you.",
                    "Please check your details before continuing.",
                  ][step - 1]}
                </p>
              </div>

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF2EC] text-[#477B70] sm:flex">
                {step === 1 && <FiHeart size={22} />}
                {step === 2 && <FiCalendar size={22} />}
                {step === 3 && <FiClock size={22} />}
                {step === 4 && <FiUser size={22} />}
                {step === 5 && <FiClipboard size={22} />}
              </div>
            </div>

            {/* Step 1: Treatment */}
            {step === 1 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {treatments.map((treatment) => {
                  const selected = selectedTreatment === treatment;

                  return (
                    <button
                      key={treatment}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setSelectedTreatment(treatment)}
                      className={`flex min-h-[64px] items-center justify-between gap-3 rounded-xl border px-4 py-4 text-left text-sm font-medium transition ${
                        selected
                          ? "border-[#477B70] bg-[#EAF2EC] text-[#174E52] ring-2 ring-[#477B70]/10"
                          : "border-[#E5EBE5] text-[#43534D] hover:border-[#9BB8A9] hover:bg-[#FAFBF8]"
                      }`}
                    >
                      <span>{treatment}</span>
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                          selected
                            ? "border-[#477B70] bg-[#477B70] text-white"
                            : "border-[#D5DED7]"
                        }`}
                      >
                        {selected && <FiCheck size={12} />}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Step 2: Date */}
            {step === 2 && (
              <>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                  {weekDays.map((day) => {
                    const daySchedule = schedule[day.fullDay];
                    const closed = daySchedule.status === "closed";
                    const selected =
                      selectedDate?.date.toDateString() ===
                      day.date.toDateString();

                    return (
                      <button
                        key={day.date.toISOString()}
                        type="button"
                        disabled={closed}
                        aria-pressed={selected}
                        onClick={() => handleDateSelect(day)}
                        className={`rounded-2xl border p-4 text-left transition ${
                          closed
                            ? "cursor-not-allowed border-[#EDF0EC] bg-[#F8F9F6] opacity-60"
                            : selected
                            ? "border-[#477B70] bg-[#EAF2EC] ring-2 ring-[#477B70]/10"
                            : "border-[#E5EBE5] hover:border-[#9BB8A9] hover:bg-[#FAFBF8]"
                        }`}
                      >
                        <p className="text-xs font-medium text-[#75817B]">
                          {day.dayName}
                        </p>
                        <p className="mt-2 font-serif text-3xl text-[#243331]">
                          {day.dayNumber}
                        </p>
                        <p className="mt-1 text-xs text-[#75817B]">
                          {day.month} {day.year}
                        </p>
                        <span
                          className={`mt-4 inline-block rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                            closed
                              ? "bg-[#E8EBE7] text-[#75817B]"
                              : daySchedule.status === "limited"
                              ? "bg-[#F8EED9] text-[#86652C]"
                              : "bg-[#E4F2E8] text-[#34724C]"
                          }`}
                        >
                          {closed
                            ? "Closed"
                            : daySchedule.status === "limited"
                            ? "Limited"
                            : "Available"}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {selectedDate && (
                  <div className="mt-5 flex items-start gap-3 rounded-2xl bg-[#F3F6F2] p-4">
                    <FiClock className="mt-0.5 shrink-0 text-[#477B70]" />
                    <div>
                      <p className="text-sm font-semibold text-[#243331]">
                        {formatDate(selectedDate)}
                      </p>
                      <p className="mt-1 text-sm text-[#64716D]">
                        Listed clinic hours: {selectedSchedule?.hours}
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Step 3: Time */}
            {step === 3 && (
              <>
                <div className="flex items-start gap-3 rounded-2xl bg-[#F3F6F2] p-4">
                  <FiCalendar className="mt-0.5 shrink-0 text-[#477B70]" />
                  <div>
                    <p className="text-sm font-semibold text-[#243331]">
                      {formatDate(selectedDate)}
                    </p>
                    <p className="mt-1 text-sm text-[#64716D]">
                      Clinic hours: {selectedSchedule?.hours}
                    </p>
                  </div>
                </div>

                <p className="mb-4 mt-7 text-xs font-semibold uppercase tracking-[0.15em] text-[#75817B]">
                  Available time options
                </p>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {availableTimes.map((time) => {
                    const unavailable = isTimeUnavailable(time);
                    const selected = selectedTime === time;

                    return (
                      <button
                        key={time}
                        type="button"
                        disabled={unavailable}
                        aria-pressed={selected}
                        onClick={() => setSelectedTime(time)}
                        className={`flex min-h-12 items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium transition ${
                          unavailable
                            ? "cursor-not-allowed border-[#EDF0EC] bg-[#F8F9F6] text-[#B7C0B9] line-through"
                            : selected
                            ? "border-[#477B70] bg-[#174E52] text-white"
                            : "border-[#E5EBE5] text-[#43534D] hover:border-[#9BB8A9] hover:bg-[#F3F6F2]"
                        }`}
                      >
                        <FiClock size={14} />
                        {time}
                      </button>
                    );
                  })}
                </div>

                <p className="mt-5 text-xs leading-5 text-[#89938D]">
                  Time-slot availability is currently a demonstration. Actual
                  bookings must be checked against the clinic&apos;s schedule.
                </p>
              </>
            )}

            {/* Step 4: Patient details */}
            {step === 4 && (
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="patient-name"
                    className="text-sm font-semibold text-[#43534D]"
                  >
                    Full name <span className="text-[#477B70]">*</span>
                  </label>
                  <input
                    id="patient-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    value={patient.name}
                    onChange={handlePatientChange}
                    placeholder="Enter your full name"
                    className={inputClass}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="patient-phone"
                      className="text-sm font-semibold text-[#43534D]"
                    >
                      Phone number <span className="text-[#477B70]">*</span>
                    </label>
                    <div className="relative">
                      <FiPhone
                        className="absolute left-4 top-[26px] -translate-y-1/2 text-[#89938D]"
                        size={16}
                      />
                      <input
                        id="patient-phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        required
                        value={patient.phone}
                        onChange={handlePatientChange}
                        placeholder="Your phone number"
                        className={`${inputClass} pl-11`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="patient-email"
                      className="text-sm font-semibold text-[#43534D]"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <FiMail
                        className="absolute left-4 top-[26px] -translate-y-1/2 text-[#89938D]"
                        size={16}
                      />
                      <input
                        id="patient-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={patient.email}
                        onChange={handlePatientChange}
                        placeholder="you@example.com"
                        className={`${inputClass} pl-11`}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="patient-message"
                    className="text-sm font-semibold text-[#43534D]"
                  >
                    Additional message{" "}
                    <span className="font-normal text-[#89938D]">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="patient-message"
                    name="message"
                    rows={4}
                    value={patient.message}
                    onChange={handlePatientChange}
                    placeholder="Share any information you'd like the clinic to know."
                    className={`${inputClass} resize-y`}
                  />
                  <p className="mt-2 text-xs leading-5 text-[#89938D]">
                    Avoid including sensitive medical information in this
                    message.
                  </p>
                </div>
              </div>
            )}

            {/* Step 5: Review */}
            {step === 5 && (
              <div className="space-y-5">
                <div className="overflow-hidden rounded-2xl border border-[#E5EBE5]">
                  <div className="flex items-center gap-2 bg-[#F3F6F2] px-5 py-4">
                    <FiCalendar className="text-[#477B70]" />
                    <h3 className="text-sm font-semibold text-[#243331]">
                      Appointment details
                    </h3>
                  </div>
                  <DetailRow label="Treatment">{selectedTreatment}</DetailRow>
                  <DetailRow label="Date">{formatDate(selectedDate)}</DetailRow>
                  <DetailRow label="Time">{selectedTime}</DetailRow>
                </div>

                <div className="overflow-hidden rounded-2xl border border-[#E5EBE5]">
                  <div className="flex items-center gap-2 bg-[#F3F6F2] px-5 py-4">
                    <FiUser className="text-[#477B70]" />
                    <h3 className="text-sm font-semibold text-[#243331]">
                      Your details
                    </h3>
                  </div>
                  <DetailRow label="Full name">{patient.name}</DetailRow>
                  <DetailRow label="Phone">{patient.phone}</DetailRow>
                  {patient.email && (
                    <DetailRow label="Email">{patient.email}</DetailRow>
                  )}
                  {patient.message && (
                    <div className="px-5 py-4">
                      <p className="text-sm text-[#75817B]">
                        Additional message
                      </p>
                      <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-6 text-[#243331]">
                        {patient.message}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-[#DCE7DF] bg-[#F3F6F2] p-4">
                  <FiShield className="mt-0.5 shrink-0 text-[#477B70]" />
                  <p className="text-xs leading-6 text-[#64716D]">
                    Submitting this request allows the clinic to contact you
                    about your appointment. Your appointment is not confirmed
                    until the clinic verifies it.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-9 flex flex-col-reverse gap-3 border-t border-[#E9EEE9] pt-6 sm:flex-row sm:items-center sm:justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={goBack}
                  className={secondaryButton}
                >
                  <FiArrowLeft size={16} />
                  Back
                </button>
              ) : (
                <Link href="/" className={secondaryButton}>
                  <FiArrowLeft size={16} />
                  Home
                </Link>
              )}

              {step < 5 ? (
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!canContinue}
                  className={primaryButton}
                >
                  {step === 4 ? "Review request" : "Continue"}
                  <FiArrowRight size={16} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleConfirm}
                  className={primaryButton}
                >
                  Submit request
                  <FiCheck size={17} />
                </button>
              )}
            </div>

            <p className="mt-5 text-center text-xs leading-5 text-[#89938D]">
              Need help?{" "}
              <Link
                href="/contact"
                className="font-semibold text-[#477B70] underline underline-offset-4 hover:text-[#174E52]"
              >
                Contact the clinic
              </Link>
            </p>
          </section>
        </div>

        {/* Bottom reassurance */}
        <div className="mt-6 flex flex-col items-start gap-3 rounded-2xl border border-[#E5EBE5] bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF2EC] text-[#477B70]">
              <FiMapPin size={18} />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#243331]">
                Mishra Homopathy Clinic
              </p>
              <p className="mt-1 text-xs text-[#75817B]">
                Bandra West, Mumbai
              </p>
            </div>
          </div>
          <p className="text-xs leading-5 text-[#89938D]">
            Please wait for the clinic to confirm your requested slot.
          </p>
        </div>
      </div>
    </main>
  );
}
