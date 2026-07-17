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
            <article key={plan.name} className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-card sm:p-8 ${plan.popular ? "border-brand ring-2 ring-brand/10 lg:-translate-y-3" : "border-[#e8eaf2]"}`}>
              {plan.popular && <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold text-orange-700">Most Popular</span>}
              <h3 className="text-2xl font-extrabold text-ink">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted">{plan.subtitle}</p>
              <div className="mt-6 flex items-end gap-1.5"><span className="text-5xl font-extrabold tracking-[-0.05em] text-ink">${plan.price}</span><span className="pb-1.5 text-sm text-muted">/month</span></div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => <li key={feature} className="flex gap-3 text-sm text-[#485466]"><span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#ece9ff] text-brand"><CheckIcon className="h-3 w-3" /></span>{feature}</li>)}
              </ul>
              <button type="button" onClick={() => toast.success(`${plan.name} plan selected`)} className={`${plan.popular ? "brand-button" : "outline-button"} mt-auto w-full pt-0`}>{plan.button}</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
