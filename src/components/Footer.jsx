import Logo from "./Logo";
import { FacebookIcon, SocialInstagramIcon, SocialXIcon } from "./Icons";

const columns = [
  { title: "Product", links: ["Features", "Pricing", "Templates", "Integrations"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
  { title: "Resources", links: ["Documentation", "Help Center", "Community", "Contact"] }
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-ink py-14 text-white sm:py-16">
      <div className="container-shell">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.5fr_1fr_1fr] lg:grid-cols-[1.65fr_.75fr_.75fr_.9fr_1fr]">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-base font-extrabold">{column.title}</h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => <li key={link}><a href="#top" className="text-sm text-white/60 transition hover:text-white">{link}</a></li>)}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-base font-medium">Social Links</h3>
            <div className="mt-4 flex gap-3">
              <a href="#top" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink transition hover:-translate-y-0.5 hover:bg-brand hover:text-white"><SocialInstagramIcon /></a>
              <a href="#top" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink transition hover:-translate-y-0.5 hover:bg-brand hover:text-white"><FacebookIcon /></a>
              <a href="#top" aria-label="X" className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink transition hover:-translate-y-0.5 hover:bg-brand hover:text-white"><SocialXIcon /></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2"><a href="#top" className="hover:text-white">Privacy Policy</a><a href="#top" className="hover:text-white">Terms of Service</a><a href="#top" className="hover:text-white">Cookies</a></div>
        </div>
      </div>
    </footer>
  );
}
