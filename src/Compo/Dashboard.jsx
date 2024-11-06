import React ,{ useContext, useState } from "react";
import Cart from "./Cart";
import { CartContext, TotalContext, WishContext } from "./Root";
import { toast } from "react-toastify";
import Wishlist from "./Wishlist";
import { Helmet } from 'react-helmet-async';
import img from "../assets/Group.png"
import { useNavigate } from "react-router-dom";
import { PiSlidersFill } from "react-icons/pi";

const Dashboard = () => {

    const [wishList] = useContext(WishContext) ;
const [cartActive, setCartActive] = useState(true) ;
const [wishActive, setWishActive] = useState(false) ;
const [cart,setCart] = useContext(CartContext) ;
const [total,setTotal] = useContext(TotalContext) ;
const navigate = useNavigate() ;

const handleCart = () => {
setCartActive(true) ;
setWishActive(false) ;
}

const handleWish = () => {
setCartActive(false) ;
setWishActive(true) ;
}

const handlePurchaseBtn = () => {
    setCart([]) ;
    setTotal(0) ;
    document.getElementById('my_modal_2').showModal();
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

<Helmet>
                <title>Dashboard | Gadget Heaven</title>
                <meta name="description" content="Detailed information about the product." />
            </Helmet>

        <div className="hero bg-purple-600 text-white py-6">
<div className="hero-content text-center">
<div className="max-w-4xl mx-auto">
<h1 className="text-3xl font-bold leading-snug">Dashboard</h1>
<p className="pt-4 max-w-2xl mx-auto">
Welcome to the dash board area. Here you can purchase the products you have added to your cart.
</p>
<div className="md:flex gap-5 items-center justify-center pt-5">
    <button onClick={handleCart} className={`btn ${cartActive 
    ? "bg-white hover:bg-white text-purple-600" 
        : "bg-purple-600 hover:bg-purple-700 text-white"} duration-500 rounded-full text-center w-40`}>Cart</button>
    <button onClick={handleWish} className={`btn ${cartActive
    ? "bg-purple-600 hover:bg-purple-700 text-white"  
        : "bg-white hover:bg-white text-purple-600"} duration-500 rounded-full 
        text-center w-40`}>Wishlist</button>
</div>
</div>
</div>
</div>

<dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <img src={img} className="mx-auto pb-2" alt="" />
    <h3 className="font-bold text-2xl text-center text-green-500">Congratulations!!</h3>
    <p className="py-4 text-center">You have purchased the products successfully</p>
    <div className="modal-action flex justify-center ">
      <form method="dialog" className="w-full">
        {/* if there is a button in form, it will close the modal */}
        <button onClick={()=> navigate('/')} className="btn bg-purple-600  hover:bg-purple-700 text-white duration-500 border border-purple-600 rounded-full text-center w-full">Close</button>
      </form>
    </div>
  </div>
</dialog>

<div className="py-16 max-w-6xl mx-auto">
{cartActive 
? <>
        <div className="flex flex-col md:flex-row gap-4 flex-wrap justify-center md:justify-between items-center">
            <div className="text-xl font-bold">Cart</div>
            <div className="flex flex-wrap gap-3 justify-center  items-center">
        <h1 className="text-xl font-bold">Total cost: {total}</h1>
        <button 
        onClick={handleSortBtn}
        className="btn cartActive bg-base-200 border border-purple-600 hover:bg-purple-200 text-purple-600 flex items-center duration-500 rounded-full text-center px-4"
           >Sort By Price <PiSlidersFill className="text-2xl"></PiSlidersFill></button>
        <button
        disabled={ cart.length>0 && total > 0 ? false : true }
        onClick={handlePurchaseBtn}
         className="btn bg-purple-600  hover:bg-purple-700 text-white duration-500 border border-purple-600 rounded-full text-center px-4"> Purchase </button>
            </div>
        </div>

       {
       cart?.map( item => <Cart key={item.id} item={item}></Cart> )
       }
            </>

:   
<div>
{
    wishList?.map( (item, idx) => <Wishlist key={idx} item={item}></Wishlist> )
}
</div>
} 
</div>

</>
    );
};

export default Dashboard;