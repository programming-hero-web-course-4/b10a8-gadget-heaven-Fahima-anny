
import { NavLink, Outlet } from "react-router-dom";
import './GadgetSection.css'



const GadgetsSection = ({categories}) => {

    return (
        <div className="py-20 px-4 md:px-0 max-w-7xl mx-auto ">
            <h1 className="font-bold text-3xl pb-10 text-center">Explore Cutting-Edge Gadgets</h1>

<div className="md:grid grid-cols-5 gap-6">
<div className="">
<div id='btnDiv' className="bg-white border p-5 rounded-xl mb-5">
<NavLink to='/' className=" rounded-full btn w-full text-gray-600 mb-3 hover:bg-slate-200 duration-500">All Products</NavLink>
{
categories.map( (category,idx) =>
    <NavLink
      key={idx}
     to={`/category/${category.name}`}
      className="rounded-full btn w-full text-gray-600 mb-3 hover:bg-slate-200 duration-500"
      >{category.name}</NavLink>
)
}

</div>
 </div>
    <div className="col-span-4 ">
        <Outlet></Outlet>
    </div>
</div>

        </div>
    );
};

export default GadgetsSection;