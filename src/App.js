import { useEffect, useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";

import productsData from "./data/products";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState("");

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to cart
  const addToCart = (product) => {
    const exists = cart.find((i) => i.id === product.id);

    if (exists) {
      setCart(
        cart.map((i) =>
          i.id === product.id
            ? { ...i, qty: i.qty + 1 }
            : i
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Remove item
  const removeItem = (id) => {
    setCart(cart.filter((i) => i.id !== id));
  };

  // Increase qty
  const increaseQty = (id) => {
    setCart(
      cart.map((i) =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      )
    );
  };

  // Decrease qty
  const decreaseQty = (id) => {
    setCart(
      cart
        .map((i) =>
          i.id === id
            ? { ...i, qty: i.qty - 1 }
            : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const total = cart.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  // Filter products by search
  const filteredProducts = Object.fromEntries(
    Object.entries(productsData).map(
      ([category, items]) => [
        category,
        items.filter((p) =>
          p.name
            .toLowerCase()
            .includes(search.toLowerCase())
        ),
      ]
    )
  );

  return (
    <div>

      <Navbar
        cart={cart}
        showCart={showCart}
        setShowCart={setShowCart}
        total={total}
        removeItem={removeItem}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        setSearch={setSearch}
      />

      {/* Menu */}
      <div className="menu">
        <span>☰ All</span>
        <span>Mobiles</span>
        <span>Laptops</span>
        <span>TVs</span>
        <span>Headphones</span>
        <span>Toys</span>
        <span>Fashion</span>
      </div>

      <Hero />

      {Object.entries(filteredProducts).map(
        ([category, items]) =>
          items.length > 0 && (
            <ProductSection
              key={category}
              title={category}
              products={items}
              addToCart={addToCart}
            />
          )
      )}

      <Footer />
    </div>
  );
}

export default App;