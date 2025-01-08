const HowWeWorkSection = () => {
  return (
    <section id="service" className="how-its-work mt-20 px-5 lg:px-40">
      <div className="flex flex-col font-poppins py-20">
        <div className="flex flex-col items-center">
          <div className="bg-[#000339] font-semibold rounded-xl w-10 h-1"></div>
          <h4 className="text-[#000339] font-semibold text-3xl pt-2.5">
            How its works ?
          </h4>
          <p className="text-[#5A6473] text-[16px] text-center pt-5 font-normal">
            Everything you need to know when you're looking to buy, rent, or
            sell - all in one place.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:space-x-36 md:flex-row pt-16">
          <div className="flex flex-col items-center">
            <img className="w-12" src="/img/addtocart.svg" />
            <h5 className="text-[#3B3C45] font-medium text-xl pt-6">
              We Buy properties.
            </h5>
          </div>
          <div className="flex flex-col items-center py-12 md:py-0">
            <img className="w-12" src="/img/rent.svg" />
            <h5 className="text-[#3B3C45] font-medium text-xl pt-6">
              We rent properties
            </h5>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-12" src="/img/buy.svg" />
            <h5 className="text-[#3B3C45] font-medium text-xl pt-6">
              We sell Properties
            </h5>
          </div>
        </div>
        <div className="flex flex-col items-center pt-12">
          <button className="bg-[#0F1B4C] font-normal rounded-xl text-white py-3.5 px-6 text-[13px]">
            Launching Soon
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
