const {combineProcedures} = ZenProcess;

const fakeProcedure = (state, action) => {

};

ShoppingCartApp = class App extends React.Component {
  getMeteorData() {
    const products = {products: Products.find().fetch()};
    return {
      store: new ZenStore(fakeProcedure, products)
    }
  }

  render() {
    const store = this.data.store;
    const products = this.data.store.getState().products;
    return (
      <div>
        <hr/>
        <ProductsContainer addToCart={(id) => {console.log(id)}} store={store} products={products}/>
        <hr/>
        <CartContainer store={store} products={products} total={products.length}/>
      </div>
    )
  }
};

reactMixin(ShoppingCartApp.prototype, ReactMeteorData);
