import { useContext } from "react";
import {  WishContext } from "./Root";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { PiShoppingCartBold } from "react-icons/pi";
import { toast } from "react-toastify";


const Wishlist = ({item}) => {

    const [wishList,setWishList] = useContext(WishContext) ;
const {product_title,price, product_image,description, product_id } = item ;

    const handleWishDelete = () => {
        const remaining = wishList?.filter( p => p.product_id !== product_id )
        // console.log(remaining)
        setWishList(remaining)
        toast.error('Item Deleted')
    }

    return (
        <div>
              <div className="bg-white rounded-2xl p-4 my-6 flex justify-between">
<div className="flex flex-col md:flex-row gap-10">
<div className=" h-[130px]">
<img
    className="mx-auto md:w-[180px] h-full object-contain object-center"
    src={product_image} alt="" />
</div>

<div className="flex flex-col justify-center items-start space-y-2 ">
<h2 className="font-bold text-xl ">{product_title}</h2>
<p className="text-gray-600  ">{description}</p>
<h2 className="font-semibold">Price: $ {price}</h2>
<button 
className="btn bg-purple-600 hover:bg-purple-500 duration-500 text-white rounded-full ">
     Add to Cart<PiShoppingCartBold className="text-lg font-extralight"></PiShoppingCartBold>
      </button>
</div>

</div>

<div>
<button onClick={handleWishDelete} className="hover:bg-red-100 rounded-full duration-500">
<IoIosCloseCircleOutline className=" text-4xl font-bold text-red-500"></IoIosCloseCircleOutline>
</button>
</div>
            </div>
        </div>
    );
};

export default Wishlist;