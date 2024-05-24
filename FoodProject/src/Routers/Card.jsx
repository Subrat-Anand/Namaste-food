import { useDispatch, useSelector } from "react-redux";
import Heading from "../Components/Header";
import ItemList from "./ItemsList";
import { clearCart } from "../Utils/CartSlice";
const Cart =()=>{
    const CartPage = useSelector((store)=> store.cart.Items)
    const dispatch = useDispatch()
    const handleClear = ()=>{
        dispatch(clearCart())
    }
    return(
        <>
        <Heading/>
            <div className="w-6/12 m-auto">
                <ItemList Items={CartPage}/>
                <button className="bg-black p-2 m-2 rounded-lg text-white"
                onClick={handleClear}
                >Clear</button>
                {CartPage.length === 0 && <h1 className="text-gray-300">Please add some Items on the cart</h1>}
            </div>
        </>
    )
}
export default Cart