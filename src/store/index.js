import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  return { counter: state.counter };
};

const store = createStore(counterReducer);

export default store;

// const counterSubscriber = () => {
//   const lastestState = store.getState();
//   console.log(lastestState);
// };

// store.subscribe(counterSubscriber);

// export const addDispatch = store.dispatch({ type: "increment" });

// export const minusDispatch = store.dispatch({ type: "decrement" });
