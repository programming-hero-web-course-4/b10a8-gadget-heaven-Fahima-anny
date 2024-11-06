import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {



const navigate = useNavigate()

const handleGoBack = () => {
    navigate(-1) ;
}

    return (
        <div className='flex flex-col justify-center items-center gap-5 h-[100vh] border'>
            <h1 className='text-5xl font-bold text-red-600'>Oops...</h1>
            <h2 className='font-semibold text-xl text-center'>Sorry,It seems like an error has occurred. 
                <br />
                Please go back for better experience.
            </h2>
            
            <button className='btn btn-error btn-outline text-2xl font-semibold px-5' onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default ErrorPage;