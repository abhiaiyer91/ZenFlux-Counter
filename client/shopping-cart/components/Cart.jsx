Cart = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0;
  const nodes = !hasProducts ? <em> Please add some products to your cart </em> :
    products.map((product) => {
      return (
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product._id}/>
      )
    });

  return (
    <div>
      <h3>Your Cart</h3>

      <div>{nodes}</div>
      <p>Total: $ {total}</p>
      <button onClick={onCheckoutClicked}
              disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
};

Cart.propTypes = {
  products: React.PropTypes.array,
  total: React.PropTypes.number,
  onCheckoutClicked: React.PropTypes.func
};
