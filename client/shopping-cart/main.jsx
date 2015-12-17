AppWrapComponent = class AppWrapContainer extends React.Component {
  getMeteorData() {
    let productSub = Meteor.subscribe('products');
    return {
      isReady: productSub.ready()
    }
  }

  render() {
    if (!this.data.isReady) {
      return <p>Loading...</p>
    };

    return (
      <div>
        <ShoppingCartApp/>
      </div>
    )
  }
};

reactMixin(AppWrapComponent.prototype, ReactMeteorData);

Meteor.startup(()=> {
  ReactDOM.render(<AppWrapComponent/>, document.getElementById('shopping-cart'));
});
