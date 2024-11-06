import { Link } from "react-router-dom";


const ProductCard = ({product}) => {

const {product_title,price, product_image, product_id } = product

    return (
        // <div>
        //     {product.product_title}
        // </div>
        <div className="card card-compact p-5 hover:shadow-xl duration-500 bg-white">
  <figure>
    <img
    className="h-52"
      src={product_image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <p className=" text-gray-500 pb-4 font-medium">Price: {price}k</p>
    <div className="card-actions ">
     <Link to={`/ProductDetails/${product_id}`} >
     <button className={'btn rounded-full  border-2 border-purple-600 hover:border-2 hover:bg-purple-100 hover:border-purple-600 duration-500'}>View Details</button>
     </Link>
    </div>
  </div>
</div>
    );
};

export default ProductCard;