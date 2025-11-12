// App.jsx
import React from "react";
import clpJobs from "./assets/clpjobs.png";

// images
import movingImg from "./assets/moving.webp";
import cleanImg from "./assets/clean.webp";
import outdoorImg from "./assets/outdoor.webp";
import propertyImg from "./assets/property.webp";
import somethingImg from "./assets/something.webp";
import howImg from "./assets/550.webp";

import clpPeople1 from "./assets/clppeople.webp";
import clpPeople2 from "./assets/clppeople2.webp";
import clpPeople3 from "./assets/clppeople3.webp";

import { motion, AnimatePresence } from "framer-motion";

// react icons
import {
  FiTruck, // moving
  FiTrash2, // clean out
  FiSun, // outdoor
  FiHome, // property
  FiHelpCircle, // something else
  // for how-it-works
  FiEdit3,
  FiUsers,
  FiMessageCircle,
  FiCheckCircle,
} from "react-icons/fi";

const BOOKING_URL = "https://booking.communitylaborpartnership.com/";

const HOW_STEPS = [
  { id: 1, title: "Tell us the job", desc: "What you need, where, and when.", icon: FiEdit3 },
  { id: 2, title: "We assign workers", desc: "Matched to the task and timing.", icon: FiUsers },
  { id: 3, title: "We text you details", desc: "Names, arrival window, instructions.", icon: FiMessageCircle },
  { id: 4, title: "They show up & work", desc: "You direct, they get it done.", icon: FiCheckCircle },
];

const WORKER_IMAGES = [clpPeople1, clpPeople2, clpPeople3];

const REVIEWS = [
  {
    author: "Joan D.",
    title: "Shed cleanout in 3 hours",
    text: "I needed help to empty, clean and reorganize my shed 12x14'. It was clear full! Thomas showed up on time and did a great job. In just 3 hours I have a brand new shed you can actually walk into and put stuff away. Great experience, great price.",
  },
  {
    author: "Julia B.",
    title: "Booked less than 24 hours",
    text: "I booked online less than 24 hours in advance for a move and it was great experience. All 3 workers showed up early and were very hard working. I would definitely use them again!",
  },
  {
    author: "Mark R.",
    title: "Unload a 16' POD",
    text: "We needed two guys to help unload a 16' POD and move a few heavy pieces inside. They confirmed by text, arrived right on the window, and worked straight through. Super respectful of the walls and floors, too.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <TopBar />
      <Hero />
      <StatBelt />
      <TaskCategories />
      {<HowItWorksChat />}
      <TrustSectionRail />
      <FinalCTA />
      <SiteFooter />
    </div>
  );
}

/* -------------------- Top bar -------------------- */
function TopBar() {
  return (
    <header className="bg-white">
      <div className="w-full h-20 flex flex-wrap md:flex-nowrap items-center justify-between gap-3 px-5 lg:px-10">
        {/* left: logo image */}
        <a href="/" className="flex items-center h-full">
          <img
            src={clpJobs}
            alt="Community Labor Partnership"
            className="h-12 sm:h-12 md:h-14 lg:h-16 w-auto"
          />
        </a>

        {/* right: phone + big pill */}
        <div className="flex items-center gap-3 sm:gap-5 ml-auto">
          <p className="hidden md:block text-base lg:text-lg text-slate-700">
            Call or text:{" "}
            <span className="font-bold text-slate-900">(888) 270-8355</span>
          </p>
          <a
            href={BOOKING_URL}
            className="rounded-full bg-slate-900 text-white px-6 sm:px-7 md:px-8 lg:px-9 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold hover:bg-slate-800 transition shrink-0"
          >
            Find workers
          </a>
        </div>
      </div>
    </header>
  );
}

/* -------------------- Hero -------------------- */
function Hero() {
  return (
    <section className="bg-white">
      {/* doubled-ish vertical space */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-32 md:pt-36 lg:pt-42 pb-16 sm:pb-20 md:pb-24 lg:pb-42 text-center">
        <h1 className="mx-auto max-w-5xl text-[2.4rem] sm:text-[2.7rem] md:text-[3.6rem] lg:text-[5.5rem] font-bold leading-[1.15] sm:leading-[1.15] md:leading-[1.15] lg:leading-[1.20] text-slate-900">
          On-site help <span className="text-sky-500">when you need it.</span>
        </h1>

        {/* slightly larger + thicker hero copy */}
        <p className="mt-6 sm:mt-7 mx-auto max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-700 font-base">
          For moving, clearing out rooms, or jobs outside, tell us what’s needed
          and we’ll staff it.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
          {/* bigger, more modern CTA */}
          <a
            href={BOOKING_URL}
            className="w-full sm:w-auto justify-center rounded-full bg-slate-900 text-white px-7 sm:px-9 py-3.5 text-sm md:text-base font-semibold hover:bg-slate-800 transition inline-flex items-center gap-2 shadow-sm"
          >
            Book workers
            <span aria-hidden="true" className="text-base">
              →
            </span>
          </a>
          {/* keep this, but make it feel like it belongs */}
          <p className="text-sm text-slate-500 font-base px-2 sm:px-4 py-2 text-center">
            Fast assignment · Reliable workers · Same day service
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Stat belt (dark divider) -------------------- */
function StatBelt() {
  return (
    <section className="relative bg-slate-950 overflow-hidden">
      {/* soft spotlight, no gap at the top */}
      <div
        className="pointer-events-none absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(72,160,255,0.2),rgba(15,23,42,0)_70%)]"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-14 xl:gap-x-20 text-center">
          <Stat number="96%" label="Fill Rate" />
          <Stat number="120,000+" label="Jobs Staffed" />
          <Stat number="90,000" label="Vetted Workers" />
          <Stat number="4.8 / 5" label="Google Rating" />
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-[2.7rem] md:text-[4rem] leading-none font-bold text-white tracking-tight">
        {number}
      </div>
      <div className="text-sm md:text-lg font-semibold text-slate-100/90">
        {label}
      </div>
    </div>
  );
}

/* -------------------- Task categories (interactive, wider selector) -------------------- */
function TaskCategories() {
  const options = [
    {
      id: "moving",
      title: "Moving & lifting",
      subtitle: "Load/unload trucks, PODs, or storage units",
      desc: "You bring the vehicle — we send strong, reliable workers who can carry the heavy stuff and follow directions.",
      badge: "Most booked",
      image: movingImg,
      chips: ["Flex crew size", "Apartments / homes", "Same-day booking"],
    },
    {
      id: "cleanout",
      title: "Clean out a space",
      subtitle: "Garages, basements, sheds",
      desc: "Tell us what stays and what goes — workers do the carrying, bagging, and moving so you don’t have to.",
      image: cleanImg,
      chips: ["Sort + haul", "You point, they move", "Indoor / outdoor"],
    },
    {
      id: "outdoor",
      title: "Outdoor & yard jobs",
      subtitle: "Raking, bagging, hauling branches",
      desc: "You’ve got the tools or materials — we send labor to rake, bag, move soil, or help with exterior jobs.",
      image: outdoorImg,
      chips: ["Heavy yard work", "Seasonal cleanups", "Crew format"],
    },
    {
      id: "property",
      title: "Property & turnover work",
      subtitle: "Unit prep, furniture moves, junk removal",
      desc: "Pick the day and time — we send workers to help turn units, move furniture, or remove junk for landlords and small operators.",
      image: propertyImg,
      chips: ["Landlords", "Small biz", "Repeat jobs"],
    },
    {
      id: "other",
      title: "Something else?",
      subtitle: "Describe the job and we’ll staff it",
      desc: "If you need people on-site and the task is clear, we can assign workers in your area.",
      image: somethingImg,
      chips: ["Events", "Odd jobs", "One-offs"],
    },
  ];

  const iconMap = {
    moving: FiTruck,
    cleanout: FiTrash2,
    outdoor: FiSun,
    property: FiHome,
    other: FiHelpCircle,
  };

  const [active, setActive] = React.useState(options[0]);
  const previewRef = React.useRef(null);

  return (
    <section className="bg-white pt-16 sm:pt-20 lg:pt-24 pb-0 sm:pb-20 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* header */}
        <header className="max-w-3xl mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            What do you need help with today?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-700">
            Pick a job type — we’ll send workers that match it.
          </p>
        </header>

        {/* body */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* left preview */}
          <div
            ref={previewRef}
            className="flex-1 rounded-3xl border border-slate-100 bg-slate-50/60 overflow-hidden flex flex-col"
          >
            <div className="relative h-52 sm:h-56 md:h-64 lg:h-[420px] xl:h-[460px]">
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent pointer-events-none" />
              {active.badge ? (
                <span className="absolute top-5 left-5 inline-flex items-center gap-1 rounded-full bg-white/90 text-slate-900 text-[0.65rem] font-semibold px-3 py-1">
                  {active.badge}
                </span>
              ) : null}
            </div>

            <div className="p-5 sm:p-6 lg:p-8 space-y-5">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {active.title}
                </h3>
                <p className="mt-2 text-sm md:text-xl text-slate-600 leading-relaxed">
                  {active.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {active.chips?.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-white border border-slate-100 px-3 py-1 text-xs text-slate-600"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <a
                href={BOOKING_URL}
                className="w-full sm:w-auto flex justify-center sm:justify-start rounded-full bg-slate-900 text-white px-6 py-3 text-base font-semibold hover:bg-slate-800 transition inline-flex items-center gap-1.5"
              >
                Book
                <span aria-hidden="true">→</span>
              </a>

              <p className="text-[0.65rem] text-slate-400 pt-1">
                Labor-only service — you provide any trucks, tools, or materials.
              </p>
            </div>
          </div>

          {/* right selector */}
          <div className="w-full lg:w-[440px] xl:w-[470px] space-y-3">
            {options.map((item) => {
              const isActive = item.id === active.id;
              const Icon = iconMap[item.id];
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActive(item);
                    if (typeof window !== "undefined" && window.innerWidth < 1024 && previewRef.current) {
                      previewRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className={`group w-full flex items-start sm:items-center gap-4 rounded-2xl border transition py-6 lg:py-7 min-h-[110px]
                    ${
                      isActive
                        ? "border-sky-200 bg-sky-50/70 shadow-[0_12px_45px_rgba(15,23,42,0.05)] ring-2 ring-sky-100"
                        : "border-slate-100 hover:border-slate-200 hover:bg-slate-50/70"
                    }`}
                >
                  <div
                    className={`h-10 w-1 rounded-full transition
                    ${
                      isActive
                        ? "bg-sky-500"
                        : "bg-slate-200 group-hover:bg-slate-300"
                    }`}
                  />
                  <div className="h-10 w-10 rounded-2xl bg-sky-50 flex items-center justify-center shrink-0">
                    {Icon ? (
                      <Icon
                        className={`text-sky-500 ${isActive ? "scale-110" : ""}`}
                        size={18}
                      />
                    ) : (
                      <span className="text-sky-500 text-xs">•</span>
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <p
                      className={`text-sm md:text-lg font-bold ${
                        isActive ? "text-slate-900" : "text-slate-800"
                      }`}
                    >
                      {item.title}
                    </p>
                    <p className="text-xs md:text-[0.9rem] text-slate-500 mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                  <span
                    className={`text-xs transition ${
                      isActive
                        ? "text-sky-500"
                        : "text-slate-300 group-hover:text-slate-400"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksChat() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      {/* added lg:items-stretch so the right column can be full height */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-8 sm:gap-10 lg:items-stretch">
        {/* left: pills */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            How it <span className="text-sky-500">Works</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-700">
            Four steps and you’ve got people on-site.
          </p>

          <div className="mt-8 space-y-4">
            {HOW_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white transition shadow-[0_16px_35px_rgba(15,23,42,0.02)] p-4"
                >
                  <div className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center mt-0.5 shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-xs uppercase tracking-wide text-slate-400">
                        Step {step.id}
                      </p>
                    </div>
                    <h3 className="text-base md:text-xl font-bold text-slate-900 mt-1">
                      {step.title}
                    </h3>
                    <p className="text-base text-slate-500 mt-1">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* right: just the big image */}
        <div className="w-full lg:w-[420px] lg:min-h-[420px]">
          <img
            src={howImg}
            alt="Confirmed workers"
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function TrustSectionRail() {
  const [active, setActive] = React.useState(0);
  const total = REVIEWS.length;

  React.useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 5000); // slow, subtle
    return () => clearInterval(id);
  }, [total]);

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            People use us for everyday jobs
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-700">
            Real feedback from customers using Community Labor Partnership.
          </p>
        </div>

        {/* content row */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 items-stretch">
          {/* LEFT: image carousel (clean) */}
          <div className="w-full lg:w-[420px] xl:w-[460px]">
            <div className="rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm h-full min-h-[280px] sm:min-h-[360px]">
              <div className="relative w-full h-full min-h-[280px] sm:min-h-[360px]">
                <AnimatePresence mode="sync">
                  <motion.img
                    key={active}
                    src={WORKER_IMAGES[active]}
                    alt="CLP worker"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 0.05, ease: "easeOut" }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* RIGHT: review synced with image */}
          <div className="flex-1">
            <div className="h-full rounded-3xl bg-white border border-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.03)] p-5 sm:p-6 md:p-8 flex flex-col justify-between min-h-[280px] sm:min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                    <span className="text-amber-400 text-base">★★★★★</span>
                    <span className="text-xs text-slate-400">
                      {REVIEWS[active].author} on Google
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    {REVIEWS[active].title}
                  </h3>
                  <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
                    {REVIEWS[active].text}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* dots */}
              <div className="mt-6 flex gap-2">
                {REVIEWS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActive(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      idx === active
                        ? "w-8 bg-slate-900"
                        : "w-2.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                    aria-label={`Show review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Tag({ children }) {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 text-sm text-slate-700 leading-relaxed">
      {children}
    </div>
  );
}

/* -------------------- Final CTA -------------------- */
function FinalCTA() {
  return (
    <section className="bg-slate-950 py-20 sm:py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        {/* left copy */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="mt-1 lg:mt-5 text-3xl md:text-5xl font-bold tracking-tight text-white">
            Ready to get help?
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-200">
            Tell us the job and when you want it. We’ll assign workers and text you the plan.
          </p>
        </div>

        {/* right actions */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full lg:w-auto justify-center lg:justify-end">
          <a
            href={BOOKING_URL}
            className="w-full sm:w-auto text-center rounded-full bg-white text-slate-950 px-8 lg:px-10 py-3.5 text-base lg:text-lg font-semibold hover:bg-slate-100 transition"
          >
            Book workers
          </a>
          <button className="w-full sm:w-auto rounded-full border border-white/20 text-base lg:text-lg text-white px-8 lg:px-10 py-3.5 hover:bg-white/10 transition">
            Call (888) 270-8355
          </button>
        </div>
      </div>
    </section>
  );
}
/* -------------------- Footer -------------------- */
function SiteFooter() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Community Labor Partnership · (888) 270-8335
        </p>
        <div className="flex gap-4 text-xs text-slate-400 justify-center md:justify-end">
          <button>Terms</button>
          <button>Privacy</button>
        </div>
      </div>
    </footer>
  );
}
