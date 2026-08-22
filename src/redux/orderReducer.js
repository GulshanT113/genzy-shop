import { ADD_ORDER } from "./constants";
// const initialState = {
//   cart: [],
//   orders: [],
// };

// export const orderReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_ORDER:
//       return {
//         ...state,
//         orders: [...state.orders, ...action.payload],
//       };

//     default:
//       return state;
//   }
// };

const initialState = {
  orders: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, ...action.payload],
      };

    default:
      return state;
  }
};
