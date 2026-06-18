import ProductCard from "./ProductCard";

function ProductSection({
  title,
  products,
  addToCart,
}) {
  return (
    <section
      className="section"
    >

      <h2 className="sectionTitle">
        {title}
      </h2>

      <div className="products">

        {products.map(
          (product) => (
            <ProductCard
              key={product.id}
              product={
                product
              }
              addToCart={
                addToCart
              }
            />
          )
        )}

      </div>

    </section>
  );
}

export default ProductSection;