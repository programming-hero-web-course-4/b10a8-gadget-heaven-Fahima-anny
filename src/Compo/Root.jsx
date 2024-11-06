import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer" ;
import { createContext, useState } from "react";

export const WishContext = createContext(null) ;
export const CartContext = createContext(null) ;
export const TotalContext = createContext(0) ; 

const Root = () => {

    const [wishList,setWishList] = useState([]) ;
    const [cart,setCart] = useState([]) ;    
   const  [total,setTotal] = useState(0)

    return (
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
    );
};

export default Root;