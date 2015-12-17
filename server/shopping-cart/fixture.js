Meteor.methods({
  'products:insertProduct': function (sampleProducts) {
    sampleProducts.forEach((product) => {
      return Products.insert(product);
    });
  }
});


const sampleProducts = [
  {
    "title": "iPad 4 Mini",
    "price": 500.01,
    "inventory": 2
  },
  {
    "title": "H&M T-Shirt White",
    "price": 10.99,
    "inventory": 10
  },
  {
    "title": "Charli XCX - Sucker CD",
    "price": 19.99,
    "inventory": 5
  }
];

if (Products.find().count() === 0) {
  Meteor.call('products:insertProduct', sampleProducts);
}
