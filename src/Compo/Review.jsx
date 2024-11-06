import { useLoaderData } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { Helmet } from 'react-helmet-async';

const Review = () => {

    const customers = useLoaderData();

    // console.log(customers)

    return (
        <>

            <Helmet>
                <title>Review | Gadget Heaven</title>
                <meta name="description" content="Detailed information about the product." />
            </Helmet>

            <div>
                <div className="hero bg-purple-600 text-white py-6 mb-10 md:mb-0">
                    <div className="hero-content text-center">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-3xl font-bold leading-snug">Customers Review</h1>
                            <p className="pt-4 max-w-2xl mx-auto">
                                Wanna place an order?? Before that we recommend you to check our customers honest review.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="py-16 max-w-6xl mx-auto">
                    {
                        customers?.map((cust) => <ReviewCard key={cust.id} cust={cust}></ReviewCard>)
                    }
                </div>

            </div>
        </>
    );
};

export default Review;