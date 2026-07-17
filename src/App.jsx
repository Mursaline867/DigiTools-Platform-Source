import { useState } from "react";
import { toast } from "react-toastify";
import products from "./data/products.json";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ProductsSection from "./components/ProductsSection";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState("products");

  const addToCart = (product) => {
    setCart((current) => {
      if (current.some((item) => item.id === product.id)) {
        toast.info(`${product.name} is already in your cart`);
        return current;
      }
      toast.success(`${product.name} added to cart`);
      return [...current, product];
    });
  };

  const removeFromCart = (id) => {
    const product = cart.find((item) => item.id === id);
    setCart((current) => current.filter((item) => item.id !== id));
    if (product) toast.warn(`${product.name} removed from cart`);
  };

  const checkout = () => {
    if (!cart.length) {
      toast.info("Your cart is empty");
      return;
    }
    setCart([]);
    toast.success("Checkout completed successfully");
    setActiveTab("products");
  };

  const openCart = () => {
    setActiveTab("cart");
    window.setTimeout(() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" }), 20);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar cartCount={cart.length} onOpenCart={openCart} />
      <main>
        <Hero />
        <Stats />
        <ProductsSection products={products} cart={cart} activeTab={activeTab} setActiveTab={setActiveTab} onAdd={addToCart} onRemove={removeFromCart} onCheckout={checkout} />
        <Steps />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
