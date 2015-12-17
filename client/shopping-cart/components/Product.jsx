Product = ({ price, quantity, title}) => {
  return (
    <div> {title} - $ {price} {quantity ? `x ${quantity}` : null} </div>
  )
};

Product.propTypes = {
  price: React.PropTypes.number,
  quantity: React.PropTypes.number,
  title: React.PropTypes.string
}
