import { FaRegHeart } from "react-icons/fa6";
import { PiShoppingCartBold } from "react-icons/pi";
import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useContext } from "react";
import { CartContext, TotalContext, WishContext } from "./Root";
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const ProductDetails = () => {
    const products = useLoaderData() ;
    const {id} = useParams() ;
    const idx = parseInt(id)
    
const result = products.find(p=> p.product_id === idx)
const {product_title,price, product_image, product_id,description,category,Specification, availability, rating } = result ;

const firstExample = {
    size: 30,
    value: rating ,
    edit: false,
    color: "gray",
    activeColor: "gold",
    a11y: true,
    isHalf: true,
  };

const [wishList,setWishList] = useContext(WishContext) ;
const [cart,setCart] = useContext(CartContext) ;
const [total,setTotal] = useContext(TotalContext) ;

const handleWishlistBtn = (e) => {
    setWishList([...wishList, result]) ;
e.currentTarget.disabled = true;
toast("Added to Wish List")
}

const handleCartBtn = () => {
    setCart([...cart, result]) ;
    toast.success("Added to Cart")
    setTotal(total + price) ;
}

    return (
<>

<Helmet>
                <title>Product Details | Gadget Heaven</title>
                <meta name="description" content="Detailed information about the product." />
            </Helmet>

<div className='relative'>
        <div className="hero bg-purple-600 text-white pt-6  md:pb-52 mb-10 md:mb-0">
<div className="hero-content text-center">
<div className="max-w-4xl mx-auto">
<h1 className="text-3xl font-bold leading-snug">Product Details</h1>
<p className="pt-4 max-w-2xl mx-auto">
Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
</p>

</div>
</div>
</div>

<div 
className='w-full md:absolute  rounded-3xl top-48'>
<div className="max-w-6xl bg-white mx-auto   md:py-5 md:px-7 rounded-3xl">
<div className="card lg:card-side gap-10 items-center">
  <figure className="">
    <img
    className="rounded-xl md:h-[300px] object-cover object-center"
      src={product_image}
      alt="Album" />
  </figure>
  <div className="card-body justify-start py-0">
    <h2 className="card-title font-bold text-2xl">{product_title}</h2>
    <h2 className="card-title text-lg text-gray-600">Price: $ {price}</h2>
    {availability ? 
      <button className="rounded-full border-2 text-green-500 py-1 max-w-40 border-green-500">In Stock</button>
    : <button className="rounded-full border-2 text-red-500 py-1 max-w-40 border-red-500">Out of Stock</button> 
    }
    <p className="text-gray-500 ">{description}</p>
    <div>
    <h3 className="font-bold pb-1">Specification:</h3> 
<div>
{Specification.map((s, idx)=><p key={idx} className="text-gray-500">{s}</p>)  }
</div>
    </div>
    <div className="font-bold">Rating</div>
    <div className="flex gap-3 items-center">
        <div>
        <ReactStars {...firstExample} />
        </div>
        <div className="rounded-full w-16 text-center bg-base-200">
            {rating}
        </div>
    </div>
    <div className="card-actions ">
      <button onClick={handleCartBtn} className="btn bg-purple-600 hover:bg-purple-500 duration-500 text-white rounded-full px-5">
        Add to Cart
        <PiShoppingCartBold className="text-lg font-extralight"></PiShoppingCartBold>
      </button>

      <button onClick={handleWishlistBtn} className="btn btn-circle border border-gray-300  bg-white">
      <div className="indicator">
      <FaRegHeart className="text-xl"></FaRegHeart>
      </div>
    </button>
    </div>
  </div>
</div>
</div>
</div>
<div className='md:mb-96'></div>

</div>
</>

    );
};

export default ProductDetails;