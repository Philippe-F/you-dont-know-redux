import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "../reducers/RootReducer";

const store = (preloadedState = {}) =>
  createStore(RootReducer, preloadedState, applyMiddleware(thunk));

export default store;