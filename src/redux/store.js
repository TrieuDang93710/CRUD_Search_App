import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createStoreHook } from "react-redux";
import { createStore } from "redux";

import orderReducer from "./reducers";

// const rootReducer = combineReducers({
//   order: orderReducer,
// });

const store = createStore(orderReducer);

export default store;
