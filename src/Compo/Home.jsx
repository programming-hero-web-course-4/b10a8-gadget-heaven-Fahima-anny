import { Link, Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import GadgetsSection from "./GadgetsSection";


const Home = () => {

    const categories = useLoaderData() ;

    return (
        <div>
       <Banner></Banner>
       <GadgetsSection categories={categories}></GadgetsSection>
        </div>
    );
};

export default Home;