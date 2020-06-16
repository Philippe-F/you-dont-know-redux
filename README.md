In React you have components which have their own state. For example, if you have a form that form will have state that holds the value of each field ( API request data is also stored in state). When you have a large application with a lot of different components. managing	individual component state is very difficult and that is where Redux (or any state manager) comes in. In Redux, instead of component level state you get application level state as a one way data flow. State is immutable, it comes from the top down; you don’t change it, you recreate or reassign it.

## Step 1: npm i redux react-redux redux-thunk
  react-redux is the library that binds Redux and React 
  redux-thunk is middleware for Redux which allows us to directly access the dispactch
  method so that we can make async calls from our redux actions


## Step 2: Bring in "Provider" into the main App.js
  "Provider" is a React Component that binds React to Redux


## Step 3: Wrap the app inside if the "Provider" component and pass the "store" into "Provider"
  A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.

  A store is not a class. It's just an object with a few methods on it. 

  ### State Tree 
    State (also called the state tree) is a broad term, but in the Redux API it usually refers to the single state value that is managed by the store and returned by getState(). It represents the entire state of a Redux application, which is often a deeply nested object.

    By convention, the top-level state is an object or some other key-value collection like a Map, but technically it can be any type. Still, you should do your best to keep the state serializable. Don't put anything inside it that you can't easily turn into JSON.


## Explaination of Create Store
  "createStore(reducer, [preloadedState], [enhancer])" is a function that takes in three things 
    1. Root Reducer: a function that holds all of the reducers for each component.
      Create a root reducer file and use the combineReducer() helper function to 
      collect all reducers

        The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.

        The resulting reducer calls every child reducer, and gathers their results into a single state object. The state produced by combineReducers() namespaces the states of each reducer under their keys as passed to combineReducers().

    2.  PreloadedState: initial state

    3. Enhancers: enhance the store with third-party capabilities such as middleware,
       time travel, persistence, etc. The onlystore enhancer that ships with Redux is applyMiddleware(). We will use applyMiddleware() to connect our store to thunk.


## Step 4: Actually Create Store
  - Create a store file

  - Import "createStore", "applyMiddleware", "RootReducer", and "thunk"
    [import { createStore, applyMiddleware } from "redux"] 
    [import RootReducer from "../reducers/root_reducer"]
    [import thunk from "redux-thunk"]
  
  - Create a function that takes in the preloadedstate as an argument
    const configureStore = (preloadedState = {}) => ( ); 

  - Use create store function to create the store
    const configureStore = (preloadedState = {}) =>
      createStore(RootReducer, preloadedState, applyMiddleware(thunk));

## Step 5: See each file for explainations 