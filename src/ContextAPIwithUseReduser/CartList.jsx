import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItemRemove from "./CartItemRemove";

const CartList = () => {

    const {cart} = useContext(CartContext);

    return(
        <div>
            <h1>Cart List</h1>
            {cart.map((item)=> <CartItemRemove item={item}/>)}
        </div>
    )
}

export default CartList;