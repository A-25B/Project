import CartDropdown from "./CartDropdown";

function Navbar({
  cart,
  showCart,
  setShowCart,
  total,
  removeItem,
}) {
  return (
    <nav className="navbar">

      {/* Logo */}

      <div className="logoContainer">

        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
        />

      </div>

      {/* Location */}

      <div className="location">

        <span>📍</span>

        <div>
          <small>
            Deliver to
          </small>

          <strong>
            India
          </strong>
        </div>

      </div>

      {/* Search */}

      <div className="searchContainer">

        <select>
          <option>All</option>
          <option>Mobiles</option>
          <option>Laptops</option>
          <option>TVs</option>
          <option>Headphones</option>
          <option>Toys</option>
        </select>

        <input
          type="text"
          placeholder="Search Amazon"
        />

        <button>
          🔍
        </button>

      </div>

      {/* Navigation */}

      <div className="navLinks">

        <div className="navItem">
          <small>
            Hello, Sign in
          </small>

          <strong>
            Account & Lists
          </strong>
        </div>

        <div className="navItem">
          <small>
            Returns
          </small>

          <strong>
            & Orders
          </strong>
        </div>

        {/* Cart */}

        <div
          className="cartWrapper"
          onClick={() =>
            setShowCart(
              !showCart
            )
          }
        >

          <div className="cartIcon">

            🛒

            <span>
              {cart.length}
            </span>

          </div>

          <strong>
            Cart
          </strong>

          {showCart && (
            <CartDropdown
              cart={cart}
              total={total}
              removeItem={
                removeItem
              }
              setShowCart={
                setShowCart
              }
            />
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;