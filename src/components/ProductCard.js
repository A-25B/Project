function ProductCard({
  product,
  addToCart,
}) {
  const buyNow = () => {
    alert(
      `Proceeding to buy ${product.name}`
    );
  };

  return (
    <div className="product">

      <span className="badge">
        Best Seller
      </span>

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <div className="rating">
        {"⭐".repeat(
          product.rating
        )}
      </div>

      <h2>
        ₹
        {product.price.toLocaleString()}
      </h2>

      <button
        className="cartBtn"
        onClick={() =>
          addToCart(product)
        }
      >
        Add To Cart
      </button>

      <button
        className="buyBtn"
        onClick={buyNow}
      >
        Buy Now
      </button>

    </div>
  );
}

export default ProductCard;