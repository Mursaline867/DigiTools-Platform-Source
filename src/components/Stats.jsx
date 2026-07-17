import { StarIcon } from "./Icons";

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "200+", label: "Premium Tools" },
  { value: "4.9", label: "Rating", star: true }
];

export default function Stats() {
  return (
    <section className="bg-brand-gradient py-8 sm:py-10">
      <div className="container-shell grid grid-cols-1 divide-y divide-white/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center justify-center px-5 py-5 text-center text-white sm:py-0">
            <div className="flex items-center gap-2 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
              {stat.value}{stat.star && <StarIcon className="h-6 w-6 text-amber-300" />}
            </div>
            <p className="mt-2 text-sm font-medium text-white/85 sm:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
