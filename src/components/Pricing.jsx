import { toast } from "react-toastify";
import SectionHeading from "./SectionHeading";
import { CheckIcon } from "./Icons";

const plans = [
  { name: "Starter", subtitle: "Perfect for getting started", price: 0, features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"], button: "Get Started Free" },
  { name: "Pro", subtitle: "Best for professionals", price: 29, features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"], button: "Start Pro Trial", popular: true },
  { name: "Enterprise", subtitle: "For teams and businesses", price: 99, features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"], button: "Contact Sales" }
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading title="Simple, Transparent Pricing" description="Choose the plan that fits your needs. Upgrade or downgrade anytime." />
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className="group relative flex flex-col rounded-2xl border border-[#e3e5eb] bg-[#f8f9fb] p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-2 hover:border-transparent hover:bg-brand-gradient hover:text-white hover:shadow-purple active:-translate-y-2 active:border-transparent active:bg-brand-gradient active:text-white active:shadow-purple sm:p-8">
              {plan.popular && <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold text-orange-700">Most Popular</span>}
              <h3 className="text-2xl font-extrabold text-ink transition-colors duration-300 group-hover:text-white group-active:text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted transition-colors duration-300 group-hover:text-white/80 group-active:text-white/80">{plan.subtitle}</p>
              <div className="mt-6 flex items-end gap-1.5"><span className="text-5xl font-extrabold tracking-[-0.05em] text-ink transition-colors duration-300 group-hover:text-white group-active:text-white">${plan.price}</span><span className="pb-1.5 text-sm text-muted transition-colors duration-300 group-hover:text-white/85 group-active:text-white/85">/Month</span></div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => <li key={feature} className="flex gap-3 text-sm text-[#63758a] transition-colors duration-300 group-hover:text-white group-active:text-white"><span className="grid h-5 w-5 shrink-0 place-items-center text-emerald-500 transition-colors duration-300 group-hover:text-white group-active:text-white"><CheckIcon className="h-4 w-4" /></span>{feature}</li>)}
              </ul>
              <button type="button" onClick={() => toast.success(`${plan.name} plan selected`)} className="btn mt-auto min-h-0 h-12 w-full rounded-full border-0 bg-brand-gradient px-6 pt-0 text-sm font-bold normal-case text-white shadow-purple transition-all duration-300 hover:-translate-y-0.5 group-hover:bg-none group-hover:bg-white group-hover:text-brand group-active:bg-none group-active:bg-white group-active:text-brand">{plan.button}</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
