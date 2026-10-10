import { useState } from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState(0)

  const products = [
    { id: 1, name: 'Premium Headphones', price: '?2,499', icon: '??' },
    { id: 2, name: 'Smart Watch', price: '?3,999', icon: '?' },
    { id: 3, name: 'Wireless Earbuds', price: '?1,499', icon: '??' },
    { id: 4, name: 'Smart Phone', price: '?19,999', icon: '??' },
  ]

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="nova-app">
      <header className="navbar">
        <div className="logo">NOVA<span>?</span></div>

        <div className="search">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>??</button>
        </div>

        <button className="cart" onClick={() => setCart(cart + 1)}>
          ?? Cart ({cart})
        </button>
      </header>

      <main>
        <section className="hero">
          <div>
            <p className="tag">SMART COMMERCE</p>
            <h1>Shop smarter with <span>NOVA</span></h1>
            <p className="subtitle">
              Discover trending products, great prices and a smarter shopping
              experience.
            </p>
            <button className="shop-btn">Explore Products ?</button>
          </div>
          <div className="hero-icon">???</div>
        </section>

        <section className="products">
          <div className="section-title">
            <h2>Featured Products</h2>
            <p>Discover our latest products</p>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image">{product.icon}</div>
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <button onClick={() => setCart(cart + 1)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <strong>NOVA Smart Commerce</strong>
        <p>Smart shopping. Simple experience.</p>
      </footer>
    </div>
  )
}

export default App
