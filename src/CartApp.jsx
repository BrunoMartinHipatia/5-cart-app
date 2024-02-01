
import { NavBar } from "./components/NavBar"
import { useItemsCart } from "./hooks/useItemsCart"

import { CartRoutes } from "../src/routes/CartRoutes"

export const CartApp = () => {

    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();
  
    return (
        <>
            <NavBar></NavBar>
            <div className="container my-4">

                <h3>Cart App</h3>
               <CartRoutes 
               cartItems={cartItems} 
               handlerAddProductCart={handlerAddProductCart} 
               handlerDeleteProductCart={handlerDeleteProductCart}></CartRoutes>



            </div>
        </>
    )
}