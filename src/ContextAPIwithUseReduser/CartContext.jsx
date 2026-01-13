import { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReduser = (state,action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.payload];
            break;

        case "REMOVE_ITEM" :
            return state.filter((item)=>item.id !== action.payload.id)
            break; 

        default:
            throw Error ("Invalid Action");
            break;
    }
}

export const CartProvider = ({children}) => {

    const [cart, dispatch] = useReducer(cartReduser,[
        {id : "1" , name : "Apple"},
        {id : "2" , name : "Banana"},
        {id : "3" , name : "Grapes"}
    ]);

    return(
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

    