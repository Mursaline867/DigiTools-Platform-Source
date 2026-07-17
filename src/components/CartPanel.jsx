import { CartIcon, XIcon } from "./Icons";
import writingIcon from "../assets/products/writing_2327400 1.png";
import designIcon from "../assets/products/design-tool.png";
import portfolioIcon from "../assets/products/portfolio.png";
import operationIcon from "../assets/products/operation.png";
import socialIcon from "../assets/products/social-media.png";

const icons = { writing: writingIcon, design: designIcon, portfolio: portfolioIcon, operation: operationIcon, social: socialIcon };

export default function CartPanel({ cart, onRemove, onCheckout, onClose }) {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-5 shadow-soft sm:p-8">
      <div className="flex items-center justify-between border-b border-slate-100 pb-5">
        <div>
          <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-ink">Your Cart</h3>
          <p className="mt-1 text-sm text-muted">{cart.length} {cart.length === 1 ? "product" : "products"} selected</p>
        </div>
        <button type="button" onClick={onClose} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-muted transition hover:border-brand hover:text-brand" aria-label="Close cart"><XIcon /></button>
      </div>

      {cart.length === 0 ? (
        <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-[#f1efff] text-brand"><CartIcon className="h-9 w-9" /></span>
          <h4 className="mt-6 text-xl font-extrabold text-ink">Your cart is empty</h4>
          <p className="mt-2 max-w-sm text-sm leading-6 text-muted">Add a premium tool to your cart and it will appear here.</p>
          <button type="button" onClick={onClose} className="brand-button mt-6">Browse Products</button>
        </div>
      ) : (
        <>
          <div className="divide-y divide-slate-100">
            {cart.map((product) => (
              <div key={product.id} className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#f5f3ff]"><img src={icons[product.icon]} alt="" className="h-8 w-8 object-contain" /></div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-extrabold text-ink">{product.name}</h4>
                  <p className="mt-1 text-sm text-muted">${product.price}/{product.period}</p>
                </div>
                <button type="button" onClick={() => onRemove(product.id)} className="btn btn-ghost min-h-0 h-10 self-start px-3 text-sm font-bold normal-case text-red-500 hover:bg-red-50 sm:self-auto">Remove</button>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-[#f8f8fc] p-5">
            <div className="flex items-center justify-between text-lg font-extrabold text-ink"><span>Total:</span><span>${total}</span></div>
            <p className="mt-1 text-xs text-muted">Monthly and one-time products are shown as a combined cart total.</p>
            <button type="button" onClick={onCheckout} className="brand-button mt-5 w-full">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
