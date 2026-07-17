export default function CTA() {
  return (
    <section id="cta" className="bg-brand-gradient py-16 sm:py-20">
      <div className="container-shell text-center text-white">
        <h2 className="text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl lg:text-[42px]">Ready to Transform Your Workflow?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#products" className="btn min-h-0 h-12 rounded-xl border-0 bg-white px-7 text-sm font-bold normal-case text-brand shadow-lg hover:bg-white/90">Explore Products</a>
          <a href="#pricing" className="btn min-h-0 h-12 rounded-xl border border-white/50 bg-transparent px-7 text-sm font-bold normal-case text-white hover:border-white hover:bg-white/10">View Pricing</a>
        </div>
        <p className="mt-8 text-xs font-medium text-white/75 sm:text-sm">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </section>
  );
}
