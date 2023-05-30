// const cart = [];
// const handleCart = (state = cart, action) => {
//     const product = action.payload;
//     switch (action.type) {
//         case "ADDITEM":
//             // Check if Product is Already Exist
//             const exist = state.find((x) => x.id === product.id);
//             if (exist) {
//                 // Increase the Quantity
//                 return state.map((x) =>
//                     x.id === product.id ? { ...x, qty: x.qty + 1 } : x
//                 );
//             } else {
//                 const product = action.payload;
//                 return [
//                     ...state,
//                     {
//                         ...product,
//                         qty: 1,
//                     }
//                 ]
//             }
//             break;

//         case "DELITEM":
//             const exist1 = state.find((x) => x.id === product.id);
//             if (exist1.qty === 1) {
//                 return state.filter((x) => x.id !== exist1.id);
//             } else {
//                 return state.map((x) =>
//                     x.id === product.id ? { ...x, qty: x.qty - 1 } : x
//                 );
//             }
//             break;
//         default:
//             return state;
//             break;
//     }
// }

import { combineReducers } from "redux";

// Action Types
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

// Reducer for handling cart items
const handleCart = (state = [], action) => {
const product = action.payload;
    switch (action.type) {
    case ADD_ITEM:
      // Check if Product Already Exists
    const exist = state.find((x) => x.id === product.id);
    if (exist) {
        // Increase the Quantity
        return state.map((x) =>
    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
    } else {
        return [
        ...state,
    {
            ...product,
            qty: 1,
    },
        ];
}

    case DELETE_ITEM:
    const exist1 = state.find((x) => x.id === product.id);
    if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
    } else {
        return state.map((x) =>
    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
    }

    default:
    return state;
    }
};

// Combine reducers
const rootReducers = combineReducers({
    cart: handleCart,
});

export default rootReducers;

// Action Creators
export const addItemToCart = (product) => {
    return {
    type: ADD_ITEM,
    payload: product,
    };
};

export const deleteItemFromCart = (product) => {
    return {
    type: DELETE_ITEM,
    payload: product,
    };
};
