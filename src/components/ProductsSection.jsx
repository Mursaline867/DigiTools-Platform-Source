import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import CartPanel from "./CartPanel";

export default function ProductsSection({ products, cart, activeTab, setActiveTab, onAdd, onRemove, onCheckout }) {
  return (
    <section id="products" className="bg-white py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading title="Premium Digital Tools" description="Choose from our curated collection of premium digital products designed to boost your productivity and creativity." />
        <div className="mx-auto mt-8 flex w-fit rounded-xl bg-[#f1f2f7] p-1.5">
          <button type="button" onClick={() => setActiveTab("products")} className={`rounded-lg px-6 py-2.5 text-sm font-bold transition ${activeTab === "products" ? "bg-white text-brand shadow-sm" : "text-muted hover:text-ink"}`}>Products</button>
          <button type="button" onClick={() => setActiveTab("cart")} className={`rounded-lg px-6 py-2.5 text-sm font-bold transition ${activeTab === "cart" ? "bg-white text-brand shadow-sm" : "text-muted hover:text-ink"}`}>Cart ({cart.length})</button>
        </div>

        {activeTab === "products" ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => <ProductCard key={product.id} product={product} isInCart={cart.some((item) => item.id === product.id)} onAdd={onAdd} />)}
          </div>
        ) : (
          <div className="mt-12"><CartPanel cart={cart} onRemove={onRemove} onCheckout={onCheckout} onClose={() => setActiveTab("products")} /></div>
        )}
      </div>
    </section>
  );
}
