In React you have components which have their own state. For example, if you have a form that form will have state that holds the value of each field ( API request data is also stored in state). When you have a large application with a lot of different components. managing	individual component state is very difficult and that is where Redux (or any state manager) comes in. In Redux, instead of component level state you get application level state as a one way data flow. State is immutable, it comes from the top down; you don’t change it, you recreate or reassign it.

Step 1: npm i redux react-redux redux-thunk
  react-redux is the library that binds Redux and React 
  redux-thunk is middleware for Redux which allows us to directly access the dispactch
  method so that we can make async calls from our redux actions

Step 2: Bring in "Provider" into the main App.js
  "Provider" is a React Component that binds React to Redux