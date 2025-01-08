const HeaderSection = () => {
  return (
    <header className="bg-[#E6F0FF]">
      <nav className="flex px-5 lg:px-40 pt-9 justify-between items-center font-poppins font-medium text-[14px]">
        <div className="flex-none">
          <img src="/img/SK-removebg-preview.png" className=" h-[60px]" />
        </div>
        <div className="hidden space-x-6 md:pl-8 lg:pl-16 md:inline-flex md:flex-row text-[#4F5361]">
          <a href="#">Home</a>
          <a href="#waitlist">waitlist</a>
          <a href="#service">Service</a>
          <a href="#feature">Feature</a>
          <a href="#customer">Customer</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="flex flex-col lg:flex-row lg:justify-between items-center pt-10 font-poppins">
        <div className="mx-8 lg:ml-40 lg:basis-1/2">
          <p className="text-[#687690] font-medium text-[18px]">
            Welcome to SK Real Estate Agency
          </p>
          <h2 className="text-[#000336] text-[56px] md:text-[64px] font-bold leading-[4.75rem]">
            We’re Here to Guide You Home
          </h2>
          <h5 className="text-[#5A6473] text-[18px] font-normal">
            get the best real estate deals first, before they hit the mass
            market! HOT FORECLOSURE DEALS with one simple search
          </h5>
          <button className="w-44	h-12 bg-[#0F1B4C] rounded-xl py-3.5 px-9 my-10 text-white text-[13px] font-medium lg:px-5 lg:py-2.5">
            More About Us
          </button>
        </div>
        <div className="hidden lg:flex lg:justify-end lg:basis-1/2 lg:mr-16">
          <img className="w-full h-full" src="/img/header.svg" />
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
