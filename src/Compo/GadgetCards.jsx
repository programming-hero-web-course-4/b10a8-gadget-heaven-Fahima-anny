import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";


const GadgetCards = () => {

    const [products, setProducts] = useState([]) ;
const allProducts = useLoaderData() ;

const category = useParams() ;

useEffect(() => {
if(!category.category){
    setProducts(allProducts)
}
else{
    const filteredProducts = [...allProducts]?.filter(p => p.category === category.category )
    setProducts(filteredProducts)
}
} , [allProducts, category])

    return (
        <div>
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
       {
            products?.map(product => <ProductCard key={product.product_id} product={product}></ProductCard>)
            }
       </div>
            
        </div>
    );
};

export default GadgetCards;