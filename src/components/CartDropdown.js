function CartDropdown({
  cart,
  total,
  removeItem,
  setShowCart,
}) {
  return (
    <div className="cartDropdown">

      <div className="cartHeader">
        <h3>Shopping Cart</h3>

        <button
          className="closeCart"
          onClick={() =>
            setShowCart(false)
          }
        >
          ✕
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="emptyCart">
          <p>Your Cart is Empty</p>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="cartProduct"
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cartInfo">
                <h4>{item.name}</h4>

                <p>
                  Qty: {item.qty}
                </p>

                <p>
                  ₹
                  {(
                    item.price *
                    item.qty
                  ).toLocaleString()}
                </p>
              </div>

              <button
                className="removeBtn"
                onClick={() =>
                  removeItem(item.id)
                }
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cartFooter">

            <h3>
              Total:
              ₹
              {total.toLocaleString()}
            </h3>

            <button className="checkoutBtn">
              Proceed To Checkout
            </button>

          </div>
        </>
      )}
    </div>
  );
}

export default CartDropdown;