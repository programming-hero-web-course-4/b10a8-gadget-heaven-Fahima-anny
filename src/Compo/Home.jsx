import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import GadgetsSection from "./GadgetsSection";
import { Helmet } from 'react-helmet-async';

const Home = () => {

    const categories = useLoaderData();

    return (

        <>
            <Helmet>
                <title>Gadgets | Gadget Heaven</title>
                <meta name="description" content="Detailed information about the product." />
            </Helmet>
            <div>
                <Banner></Banner>
                <GadgetsSection categories={categories}></GadgetsSection>
            </div>
        </>
    );
};

export default Home;