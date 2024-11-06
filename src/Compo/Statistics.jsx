import { Helmet } from 'react-helmet-async';

const Statistics = () => {
    return (
<>
<Helmet>
                <title>Statistics | Gadget Heaven</title>
                <meta name="description" content="Detailed information about the product." />
            </Helmet>

                  <div className="hero bg-purple-600 text-white py-6 mb-10 md:mb-0">
<div className="hero-content text-center">
<div className="max-w-4xl mx-auto">
<h1 className="text-3xl font-bold leading-snug">Our Product's Statistics</h1>
<p className="pt-4 max-w-2xl mx-auto">
Wanna place an order?? Before that we recommend you to check our customers honest review. 
</p>
</div>
</div>
</div>
        </>
    );
};

export default Statistics;