ProductsContainer = class ProductsContainer extends React.Component {
  render() {
    const { store, products, addToCart } = this.props;
    return (
      <div className="row">
        <ProductsList title="Products">
          {products.map(product =>
              <ProductItem
                key={product._id}
                product={product}
                onAddToCartClicked={addToCart}/>
          )}
        </ProductsList>
      </div>
    )
  }
};

ProductsContainer.propTypes = {
  products: React.PropTypes.arrayOf(React.PropTypes.shape({
    _id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    inventory: React.PropTypes.number.isRequired
  })).isRequired,
  addToCart: React.PropTypes.func.isRequired
};
