import { useContext, useState } from "react";
import Cart from "./Cart";
import { useLoaderData } from "react-router-dom";
import { CartContext, TotalContext, WishContext } from "./Root";
import { toast } from "react-toastify";
import Wishlist from "./Wishlist";


const Dashboard = () => {

    const [wishList] = useContext(WishContext) ;
const [cartActive, setCartActive] = useState(true) ;
const [cart,setCart] = useContext(CartContext) ;
const [total,setTotal] = useContext(TotalContext) ;

const handlePurchaseBtn = () => {
    if(cart.length > 0){
        toast.success('Purchased Successfully') }
    else{
        toast.error('Add Items To Cart') }
    setCart([]) ;
    setTotal(0)
}

const handleSortBtn = () => {
    console.log('sorted')
    if(cart.length === 0){
        toast.error('Add Item To Cart')
    }
    const sorted = [...cart].sort((a, b) => b.price - a.price);
    setCart(sorted)


}

    return (
        <>
        <div className="hero bg-purple-600 text-white py-6 mt-2">
<div className="hero-content text-center">
<div className="max-w-4xl mx-auto">
<h1 className="text-3xl font-bold leading-snug">Dashboard</h1>
<p className="pt-4 max-w-2xl mx-auto">
Welcome to the dash board area. Here you can purchase the products you have added to your cart.
</p>
<div className="md:flex gap-5 items-center justify-center pt-5">
    <button onClick={()=>setCartActive(!cartActive)} className={`btn ${cartActive 
    ? "bg-white hover:bg-white text-purple-600" 
        : "bg-purple-600 hover:bg-purple-700 text-white"} duration-500 rounded-full text-center w-40`}>Cart</button>
    <button onClick={()=>setCartActive(!cartActive)} className={`btn ${cartActive
    ? "bg-purple-600 hover:bg-purple-700 text-white"  
        : "bg-white hover:bg-white text-purple-600"} duration-500 rounded-full 
        text-center w-40`}>Wishlist</button>
</div>
</div>
</div>
</div>


<div className="py-16 max-w-6xl mx-auto">
{cartActive 
?
        <div className="">

        <div className="flex flex-col md:flex-row gap-4 flex-wrap justify-center md:justify-between items-center">
            <div className="text-xl font-bold">Cart</div>
            <div className="flex flex-wrap gap-3 justify-center  items-center">
        <h1 className="text-xl font-bold">Total cost: {total}</h1>
        <button 
        onClick={handleSortBtn}
        className="btn cartActive bg-base-200 border border-purple-600 hover:bg-purple-200 text-purple-600  duration-500 rounded-full text-center px-4"
           >Sort By Price</button>
        <button
        onClick={handlePurchaseBtn}
         className="btn cartActive bg-purple-600  hover:bg-purple-700 text-white duration-500 border border-purple-600 rounded-full text-center px-4"> Purchase </button>
            </div>
        </div>

       {
       cart.map( item => <Cart item={item}></Cart> )
       }

            </div>

:   
<div>
{
    wishList.map( (item, idx) => <Wishlist key={idx} item={item}></Wishlist> )
}
</div>
} 
</div>

</>
    );
};

export default Dashboard;