import { combineReducers } from "redux";
import productsReducer from "./products-reducer";
import loginReducer from "./login-reducer";
export default combineReducers({
  login: loginReducer,
  products: productsReducer,
});
