/* Counter Example */

/**
 * Register a mixin to Zen Mixins to increment the store
 */
ZenMixins.registerMixin('counterMixin', {
  incrementStore(state) {
    state.update({}, {$inc: {counter: 1}});
  },
  decrementStore(state) {
    state.update({}, {$inc: {counter: -1}});
  }
});

// Procedures are just a way to describe how the state could possibly change
const incrementProcedures = (storeReference, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // do something
      return action.incrementStore(storeReference);

    case 'DECREMENT':
      console.log(action);
      return action.decrementStore(storeReference);
    default:
      return;
  }
};

// Second thing we need to do is create our Store.
// Since this data is non persistent, we can create it outside
// of our component container.
const CounterStore = new ZenStore(incrementProcedures, {counter: 0});

// React Component
class CounterComponent extends React.Component {
  constructor() {
    super();
    this.actionCreator = ZenAction(['counterMixin']);
    this.storeCount = this.storeCount.bind(this);
    this.dispatchIncrement = this.dispatchIncrement.bind(this);
    this.dispatchDecrement = this.dispatchDecrement.bind(this);
  }

  storeCount() {
    return CounterStore.getState().counter;
  }

  dispatchIncrement() {
    return CounterStore.dispatch(Object.assign({
      type: 'INCREMENT'
    }, this.actionCreator));
  }

  dispatchDecrement() {
    return CounterStore.dispatch(Object.assign({
      type: 'DECREMENT'
    }, this.actionCreator));
  }

  render() {
    return (

      <div className="button-wrap">
        <div className="media-flex">
          <button onClick={this.dispatchIncrement}
                  className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            Add
          </button>
          <button onClick={this.dispatchDecrement}
                  className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
            Subtract
          </button>

          <p> You've pressed the button {this.storeCount()} times.</p>
        </div>
      </div>
    )
  }
}

reactMixin(CounterComponent.prototype, TrackerReact);

Meteor.startup(() => {
  ReactDOM.render(<CounterComponent/>, document.getElementById('counter-app'));
});

