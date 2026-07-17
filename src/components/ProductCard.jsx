import { useState } from "react";
import { CheckIcon } from "./Icons";
import writingIcon from "../assets/products/writing_2327400 1.png";
import designIcon from "../assets/products/design-tool.png";
import portfolioIcon from "../assets/products/portfolio.png";
import operationIcon from "../assets/products/operation.png";
import socialIcon from "../assets/products/social-media.png";

const icons = { writing: writingIcon, design: designIcon, portfolio: portfolioIcon, operation: operationIcon, social: socialIcon };
const tagStyles = {
  "best-seller": "bg-orange-50 text-orange-700",
  popular: "bg-indigo-50 text-indigo-700",
  new: "bg-emerald-50 text-emerald-700"
};

export default function ProductCard({ product, isInCart, onAdd }) {
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAdd(product);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1300);
  };

  return (
    <article className="card-surface relative flex min-h-[420px] flex-col p-6">
      <span className={`absolute right-5 top-5 rounded-full px-3 py-1.5 text-[11px] font-bold ${tagStyles[product.tagType]}`}>{product.tag}</span>
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#f5f3ff]">
        <img src={icons[product.icon]} alt="" className="h-9 w-9 object-contain" />
      </div>
      <h3 className="mt-6 pr-20 text-xl font-extrabold tracking-[-0.02em] text-ink">{product.name}</h3>
      <p className="mt-3 min-h-[52px] text-sm leading-6 text-muted">{product.description}</p>
      <div className="mt-5 flex items-end gap-1.5">
        <span className="text-3xl font-extrabold tracking-[-0.04em] text-ink">${product.price}</span>
        <span className="pb-1 text-sm font-medium text-muted">/{product.period}</span>
      </div>
      <ul className="mt-5 space-y-3">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm text-[#485466]">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#ece9ff] text-brand"><CheckIcon className="h-3 w-3" /></span>
            {feature}
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleAdd} disabled={isInCart} className={`btn mt-auto min-h-0 h-11 w-full rounded-xl normal-case transition duration-300 ${isInCart ? "border-brand/20 bg-brand/10 text-brand" : "border-0 bg-brand-gradient text-white shadow-purple hover:brightness-110"}`}>
        {isInCart ? "Added to Cart" : justAdded ? "Added ✓" : "Buy Now"}
      </button>
    </article>
  );
}
