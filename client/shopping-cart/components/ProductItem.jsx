ProductItem = ({ product, onAddToCartClicked }) => {
  return (
    <div
      style={{ marginBottom: 20 }} className="col-sm-4 text-center">
      <Product
        title={product.title}
        price={product.price}/>
      <br/>
      <button
        className="btn btn-success"
        onClick={onAddToCartClicked.bind(product._id)}
        disabled={product.inventory > 0 ? '' : 'disabled'}>
        {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
      </button>
    </div>
  )
};

ProductItem.propTypes = {
  product: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    inventory: React.PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: React.PropTypes.func.isRequired
};
