import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {



const navigate = useNavigate()

const handleGoBack = () => {
    navigate(-1) ;
}

    return (
        <div className='flex flex-col justify-center items-center gap-5 h-[100vh] border'>
            <img className='w-52' src="https://thumbs.dreamstime.com/b/error-icon-16125237.jpg" alt="" />
            <h1 className='text-5xl font-bold'>Oops...</h1>
            <h2 className='font-medium text-gray-600 text-center'>
                Please go back for better experience.
            </h2>
            
            <button className='btn btn-error btn-outline font-semibold px-5' onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default ErrorPage;