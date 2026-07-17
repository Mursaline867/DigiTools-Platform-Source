import banner from "../assets/banner.png";
import playIcon from "../assets/Play.png";
import { ArrowIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <div className="hero-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(to_right,black,transparent_65%)]" aria-hidden="true" />
      <div className="container-shell relative grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-10">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#eef0ff] px-4 py-2 text-xs font-bold text-brand sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_0_5px_rgba(79,57,246,.12)]" />
            New: AI-Powered Tools Available
          </div>
          <h1 className="max-w-[690px] text-4xl font-extrabold leading-[1.08] tracking-[-0.055em] text-ink sm:text-5xl lg:text-[66px]">
            Supercharge Your <span className="gradient-text">Digital Workflow</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#products" className="brand-button gap-2">
              Explore Products <ArrowIcon />
            </a>
            <button type="button" className="group outline-button gap-2" onClick={() => document.querySelector("#steps")?.scrollIntoView({ behavior: "smooth" })}>
              <img src={playIcon} alt="" className="h-5 w-5 shrink-0 object-contain transition duration-300 group-hover:brightness-0 group-hover:invert group-active:brightness-0 group-active:invert" /> Watch Demo
            </button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-muted sm:text-sm">
            <span className="flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-green-100 text-[11px] font-bold text-green-600">✓</span> No credit card required</span>
            <span className="flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-green-100 text-[11px] font-bold text-green-600">✓</span> Instant access</span>
          </div>
        </div>

        <div className="hero-glow relative mx-auto flex w-full max-w-[500px] justify-center lg:justify-end">
          <div className="absolute left-5 top-10 h-24 w-24 rounded-full border border-brand/20 bg-white/50 backdrop-blur-sm" aria-hidden="true" />
          <div className="absolute bottom-14 right-0 h-16 w-16 rounded-2xl bg-brand-gradient opacity-15 rotate-12" aria-hidden="true" />
          <img src={banner} alt="Professional using digital productivity technology" className="relative z-10 h-auto w-[86%] max-w-[430px] object-contain drop-shadow-[0_28px_36px_rgba(16,23,39,.16)]" />
        </div>
      </div>
    </section>
  );
}
