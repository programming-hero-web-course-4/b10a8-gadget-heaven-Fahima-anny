import { Link } from 'react-router-dom';
import pic from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='relative mx-3 md:mx-10'>
                <div className="hero bg-purple-600 text-white pt-10 md:pb-52 rounded-b-3xl">
  <div className="hero-content text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold leading-snug">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-6 max-w-2xl mx-auto">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
     <Link to='/dashboard'> 
     <button className="btn rounded-full text-purple-600 bg-white font-bold">Shop Now</button>
     </Link>
    </div>
  </div>
</div>

<div className='w-full mt-4 md:absolute md:-bottom-96 '>
    <div className='max-w-4xl mx-auto md:p-5 bg-white rounded-3xl md:border-4 border-gray-100  bg-opacity-25'>
<img className='md:h-[70vh] w-full object-cover object-center rounded-3xl' src={pic} alt="" />
    </div>
</div>
<div className='md:mb-96'></div>

        </div>
    );
};

export default Banner;