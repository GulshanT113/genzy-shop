import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_ORDER,
  CLEAR_CART,
} from "./constants";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (item) => {
  // console.log("action data => ", item);
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};

export const addOrder = (item) => {
  return {
    type: ADD_ORDER,
    payload: item,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
    payload: [],
  };
};
