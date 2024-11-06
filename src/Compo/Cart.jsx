import { useContext, useState } from "react";
import { CartContext, TotalContext } from "./Root";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";

const Cart = ({item}) => {

    const [cart,setCart] = useContext(CartContext) ;
const [total,setTotal] = useContext(TotalContext) ;

const {product_title,price, product_image,description, product_id } = item ;

    const handleDelete = () => {
        const remaining = cart.filter( p => p.product_id !== product_id )
        console.log(remaining)
        setCart(remaining)
        setTotal(total - price)
        toast.error('Item Deleted')
    }



    return (
        <div className="bg-white rounded-2xl p-4 my-6 flex justify-between">
<div className="flex flex-col md:flex-row gap-10">
<div className=" h-[130px]">
<img
    className="mx-auto md:w-[180px] h-full object-contain object-center"
    src={product_image} alt="" />
</div>

<div className="flex flex-col justify-center space-y-4 ">
<h2 className="font-bold text-xl ">{product_title}</h2>
<p className="text-gray-600  ">{description}</p>
<h2 className="font-semibold">Price: $ {price}</h2>
</div>

</div>

<div>
<button onClick={handleDelete} className="hover:bg-red-100 rounded-full duration-500">
<IoIosCloseCircleOutline className=" text-4xl font-bold text-red-500"></IoIosCloseCircleOutline>
</button>
</div>
            </div>
    );
};

export default Cart;