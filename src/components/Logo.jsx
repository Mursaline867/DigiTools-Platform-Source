export default function Logo({ inverted = false }) {
  return (
    <a href="#top" className="group inline-flex items-center gap-2.5" aria-label="DigiTools home">
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-brand-gradient shadow-purple transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
        <span className="absolute h-4 w-4 -translate-x-1.5 -translate-y-1.5 rounded-[5px] border-2 border-white/90" />
        <span className="absolute h-4 w-4 translate-x-1.5 translate-y-1.5 rounded-[5px] border-2 border-white/90" />
      </span>
      <span className={`text-xl font-extrabold tracking-[-0.04em] ${inverted ? "text-white" : "text-ink"}`}>
        Digi<span className={inverted ? "text-white" : "gradient-text"}>Tools</span>
      </span>
    </a>
  );
}
