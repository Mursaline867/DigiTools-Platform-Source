import SectionHeading from "./SectionHeading";
import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const steps = [
  { number: "01", icon: userIcon, title: "Create Account", text: "Sign up for free in seconds. No credit card required to get started." },
  { number: "02", icon: packageIcon, title: "Choose Products", text: "Browse our catalog and select the tools that fit your needs." },
  { number: "03", icon: rocketIcon, title: "Start Creating", text: "Download and start using your premium tools immediately." }
];

export default function Steps() {
  return (
    <section id="steps" className="bg-surface py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading title="Get Started in 3 Steps" description="Start using premium digital tools in minutes, not hours." />
        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div className="absolute left-[17%] right-[17%] top-[52px] hidden border-t-2 border-dashed border-brand/20 md:block" aria-hidden="true" />
          {steps.map((step) => (
            <article key={step.number} className="card-surface relative z-10 p-6 text-center sm:p-8">
              <span className="absolute right-5 top-5 rounded-full bg-[#ebe8ff] px-2.5 py-1 text-xs font-extrabold text-brand">{step.number}</span>
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-[#f3f1ff]"><img src={step.icon} alt="" className="h-14 w-14 object-contain" /></div>
              <h3 className="mt-6 text-xl font-extrabold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
