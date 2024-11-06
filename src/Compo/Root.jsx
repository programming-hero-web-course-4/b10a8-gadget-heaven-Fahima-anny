import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer" ;
import { createContext, useState } from "react";

export const WishContext = createContext({}) ;
export const CartContext = createContext({}) ;
export const TotalContext = createContext(0) ; 
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {};

const Root = () => {

    const [wishList,setWishList] = useState([]) ;
    const [cart,setCart] = useState([]) ;    
   const  [total,setTotal] = useState(0)

// console.log(wishList)

    return (
        <HelmetProvider context={helmetContext}>
        <TotalContext.Provider value={[total,setTotal]}>
    <WishContext.Provider value={[wishList,setWishList]}>
          <CartContext.Provider value={[cart,setCart]}>
          <div className="bg-base-200 pt-3 md:pt-10">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
      </CartContext.Provider>
    </WishContext.Provider>
    </TotalContext.Provider>
    </HelmetProvider>
    );
};

export default Root;