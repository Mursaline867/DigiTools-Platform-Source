import { useState } from "react";
import Logo from "./Logo";
import { CartIcon, MenuIcon, XIcon } from "./Icons";

const navItems = [
  ["Products", "#products"],
  ["Features", "#steps"],
  ["Pricing", "#pricing"],
  ["Testimonials", "#cta"],
  ["FAQ", "#footer"]
];

export default function Navbar({ cartCount, onOpenCart }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100/90 bg-white/90 backdrop-blur-xl">
      <div className="container-shell flex h-[76px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-semibold text-[#485466] transition hover:text-brand">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button type="button" className="text-sm font-semibold text-ink transition hover:text-brand" onClick={() => window.alert("Demo login coming soon.")}>Login</button>
          <button type="button" className="brand-button h-10 px-5" onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}>Get Started</button>
          <button type="button" className="relative grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-ink transition hover:border-brand hover:text-brand" aria-label={`Open cart with ${cartCount} products`} onClick={onOpenCart}>
            <CartIcon />
            {cartCount > 0 && <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-brand px-1 text-[10px] font-extrabold text-white">{cartCount}</span>}
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button type="button" className="relative grid h-10 w-10 place-items-center rounded-xl border border-slate-200" aria-label={`Open cart with ${cartCount} products`} onClick={onOpenCart}>
            <CartIcon />
            {cartCount > 0 && <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-brand px-1 text-[10px] font-extrabold text-white">{cartCount}</span>}
          </button>
          <button type="button" className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200" aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-5 py-5 shadow-soft lg:hidden" aria-label="Mobile navigation">
          <div className="container-shell flex flex-col gap-1 px-0">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm font-semibold text-ink hover:bg-violet-50 hover:text-brand">{label}</a>
            ))}
            <button type="button" className="brand-button mt-3 w-full" onClick={() => { closeMenu(); document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" }); }}>Get Started</button>
          </div>
        </nav>
      )}
    </header>
  );
}
