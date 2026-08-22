import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./constants";

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      let result = state.filter((item) => {
        // console.log("reducer compare => ", item.id);
        return item.id != action.payload;
      });
      return [...result];
    case CLEAR_CART:
      return [];

    default:
      return state;
  }
};
