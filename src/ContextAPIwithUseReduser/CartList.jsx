import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import CartItemRemove from "./CartItemRemove";

const CartList = () => {

    const {cart,dispatch} = useContext(CartContext);
    const [input, setInput] = useState("")

    return(
        <div>
            <h1>Cart List</h1>
            <input type="text"  placeholder="Enter fruit names" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={()=>dispatch(
                {type : "ADD_ITEM",
                payload : {id : cart.length+1 , name: input}
                })}>Add Fruit</button>
            {cart.map((item)=><CartItemRemove item={item}/>)}
        </div>
    )
}

export default CartList;