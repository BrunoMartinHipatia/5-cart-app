import { Route, Routes, Navigate } from "react-router-dom"
import { CartView } from "../components/CartView"
import {  useNavigate } from 'react-router-dom';
import { CatalogView } from "../components/CatalogView"
export const CartRoutes=({handlerAddProductCart,handlerDeleteProductCart, cartItems} ) =>{
    const navigate = useNavigate();
    const onCatalog=()=>{
        navigate('/catalog')
    }
    return (
    <Routes>
    <Route path="catalog" element={<CatalogView handler={handlerAddProductCart} />} />
    <Route path="cart" element={(

        cartItems?.length <= 0? 
        <div>
        <div className="alert alert-warning">No hay productos en el carrito de compras!</div>
        <button className='btn btn-success' onClick={onCatalog}>Seguir comprando</button>
        </div>
        :(
            <div className="my-4 w-50">
                <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
            </div>
        )
    )} />
<Route path="/" element={<Navigate to ={'catalog'}/>}/>

</Routes>


)
}