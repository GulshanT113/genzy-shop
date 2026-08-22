import { combineReducers } from "redux";
import { reducer } from "./reducer";
import { orderReducer } from "./orderReducer";

export default combineReducers({
  reducer,
  orderReducer,
});
