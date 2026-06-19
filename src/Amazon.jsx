import { useMemo, useState } from 'react'

const products = [
  { id: 1, name: 'Performance Laptop', category: 'Computers', price: 45999, icon: '💻' },
  { id: 2, name: 'Smartphone Pro', category: 'Mobiles', price: 19999, icon: '📱' },
  { id: 3, name: 'Wireless Headphones', category: 'Audio', price: 1499, icon: '🎧' },
  { id: 4, name: 'Smart Watch', category: 'Wearables', price: 2999, icon: '⌚' },
]

export default function Amazon() {
  const [query, setQuery] = useState('')
  const [cart, setCart] = useState([])
  const filtered = useMemo(() => products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())), [query])

  return (
    <section className="shop-page fade-in">
      <div className="section-heading">
        <div><h2>Amazon Shopping</h2><p>Find everyday technology at exceptional prices.</p></div>
        <span className="cart-pill">Cart · {cart.length}</span>
      </div>
      <div className="shop-search">
        <span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products..." />
      </div>
      <div className="product-grid">
        {filtered.map((item) => (
          <article className="product-card glass-card" key={item.id}>
            <div className="product-art">{item.icon}</div>
            <small>{item.category}</small><h3>{item.name}</h3>
            <div className="product-bottom"><strong>₹{item.price.toLocaleString('en-IN')}</strong><button className="btn btn-primary" onClick={() => setCart((old) => [...old, item])}>Add to Cart</button></div>
          </article>
        ))}
      </div>
    </section>
  )
}
