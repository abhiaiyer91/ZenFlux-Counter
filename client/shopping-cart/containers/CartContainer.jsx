CartContainer = class CartContainer extends React.Component {
  render() {
    const { products, total } = this.props;

    return (
      <Cart
        products={products}
        total={total}
        onCheckoutClicked={() => this.props.checkout()} />
    )
  }
};

CartContainer.propTypes = {
  products: React.PropTypes.arrayOf(React.PropTypes.shape({
    _id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    quantity: React.PropTypes.number.isRequired
  })).isRequired,
  total: React.PropTypes.number,
  //checkout: React.PropTypes.func.isRequired
}
