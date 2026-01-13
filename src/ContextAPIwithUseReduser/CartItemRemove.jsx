import { CartContext } from "./CartContext";
import { useContext } from "react";

const CartItemRemove = ({item}) => {

    const {dispatch} = useContext(CartContext);

    return(
        <div>
            <p>{item.id}-{item.name}</p>
            <button onClick={()=>dispatch({type : "REMOVE_ITEM", layout : item})}>Remove Item</button>
            
        </div>
    )
}
export default CartItemRemove;