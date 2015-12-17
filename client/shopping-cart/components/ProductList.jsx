ProductsList = ({title, children}) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  )
};

ProductsList.propTypes = {
  children: React.PropTypes.node,
  title: React.PropTypes.string.isRequired
};
