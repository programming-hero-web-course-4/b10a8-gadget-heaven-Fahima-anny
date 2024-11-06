

const Footer = () => {
    return (
        <div className="text-center text-gray-500 bg-white font-semibold space-y-3 px-3 md:px- py-16">
           <h1 className="font-bold text-3xl text-black ">Gadget Heaven</h1>
            <p>Leading the way in cutting-edge technology and innovation.</p>
            <footer className="footer grid md:grid-cols-3 max-w-5xl mx-auto pt-7">
  <nav className=" mx-auto">
    <h6 className=" mx-auto text-black font-bold text-xl pb-2">Services</h6>
    <a className="link link-hover mx-auto">Product Support</a>
    <a className="link link-hover mx-auto">Order Tracking</a>
    <a className="link link-hover mx-auto">Shipping & Delivery</a>
    <a className="link link-hover mx-auto">Returns</a>
  </nav>
  <nav className="mx-auto">
    <h6 className=" text-black font-bold text-xl pb-2 mx-auto">Company</h6>
    <a className="link mx-auto link-hover">About us</a>
    <a className="link mx-auto link-hover">Careers</a>
    <a className="link mx-auto link-hover">Contact</a>
  </nav>
  <nav className="mx-auto">
    <h6 className=" text-black font-bold text-xl pb-2 mx-auto">Legal</h6>
    <a className="link link-hover mx-auto">Terms of Service</a>
    <a className="link link-hover mx-auto">Privacy policy</a>
    <a className="link link-hover mx-auto">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;