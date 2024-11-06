import { Link, NavLink, useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { PiShoppingCartBold } from "react-icons/pi";
import './Navbar.css'
import { useContext } from "react";
import { CartContext, TotalContext, WishContext } from "./Root";

const Navbar = () => {

  const {pathname} = useLocation() ;
  console.log(pathname)

const links = <>
<li className="font-semibold"><NavLink to='/'>Home</NavLink></li>
<li className="font-semibold"><NavLink to='/statistics'>Statistics</NavLink></li>
<li className="font-semibold"><NavLink to='/dashboard'>Dashboard</NavLink></li>
<li className="font-semibold"><NavLink to='/review'>Review</NavLink></li>
</>

const [wishList] =useContext(WishContext) ;
const [cart] =useContext(CartContext) ;
const [total] =useContext(TotalContext) ;

    return (
        <div className={`navbar w-auto mx-3 md:mx-10 md:px-40 rounded-t-3xl py-3 
         ${pathname === '/dashboard' || pathname === '/statistics' || pathname === '/review' 
              ? "bg-base-200"  : "bg-purple-600"
            }
         `}>
        <div className="navbar-start md:w-1/2 ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-black menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className={`text-2xl font-bold 
             ${pathname === '/dashboard' || pathname === '/statistics' || pathname === '/review' 
              ? "text-black"  : "text-white"
            }
            `}>Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul 
          className={`menu menu-horizontal px-1 
            ${pathname === '/dashboard' || pathname === '/statistics' || pathname === '/review' 
              ? "text-gray-600"  : "text-white"
            }
            `} id='nav1'>
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-4">
        <button className="btn btn-circle border border-gray-300 bg-white indicator px-3 dropdown dropdown-hover">
           <PiShoppingCartBold className="text-xl"></PiShoppingCartBold>
           {cart.length > 0  
        ? <span className="badge bg-gray-200 indicator-item w-[25px] h-[25px]">{cart.length}</span> 
        : ''
      }
       <ul tabIndex={0} className="dropdown-content bg-white mt-[190px] menu rounded-box z-[1] w-52 p-2 shadow">
    <li>
      <h3 className="border-b hover:bg-white" >{cart.length} Items in Cart</h3>
     {cart.length > 0 ?  <p className="font-bold hover:bg-white text-purple-600">Subtotal: $ {total}</p> : ''}
     <Link to='/dashboard'>
     <span className="btn bg-purple-600 hover:bg-purple-500 duration-500 text-white rounded-full"> Dashboard</span>
     </Link>
    </li>
  
  </ul>
    </button>

    <button className="btn btn-circle border border-gray-300 bg-white indicator px-3 dropdown  dropdown-hover ">
      <FaRegHeart className="text-xl"></FaRegHeart>
        {wishList.length > 0  
        ? <span className="badge bg-gray-200 indicator-item w-[25px] h-[25px]">{wishList.length}</span> 
        : ''
      }
    </button>
        </div>
      </div>


    //     <div className="navbar max-w-7xl mx-auto">
    //     <div className="navbar-start">
    //       <div className="dropdown">
    //         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-5 w-5"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor">
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h8m-8 6h16" />
    //           </svg>
    //         </div>
    //         <ul
    //         id='nav'
    //           tabIndex={0}
    //           className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              
    //           {links}
    //         </ul>
    //       </div>
    //       <a className="text-2xl font-bold ">Gadget Heaven</a>
    //     </div>
    //     <div className="navbar-center hidden lg:flex">
    //       <ul className="menu menu-horizontal px-1" id='nav'>
    //         {links}
    //       </ul>
    //     </div>
    //     <div className="navbar-end gap-4">
    //     <button className="btn btn-circle border bg-white">
    //        <PiShoppingCartBold className="text-xl"></PiShoppingCartBold>
    // </button>
    // <button className="btn btn-circle border bg-white">
    //   <div className="indicator">
    //   <FaRegHeart className="text-xl"></FaRegHeart>
    //     <span className="badge badge-xs badge-primary indicator-item"></span>
    //   </div>
    // </button>
    //     </div>
    //   </div>
    );
};

export default Navbar;