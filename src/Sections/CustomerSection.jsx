const CustomerSection = () => {
  return (
    <section id="customer" className="stat px-5 lg:px-40 mt-16 font-poppins">
      <div className="flex flex-col lg:flex-row lg:pt-12 justify-center items-center">
        <div className="relative">
          <div className="hidden absolute lg:flex flex-col bg-white drop-shadow-sm rounded-b-xl divide-solid divide-y w-60 h-64 px-5 justify-center lg:-left-1/3">
            <div className="mb-6">
              <div className="flex justify-between">
                <h5 className="font-semibold text-[26px] text-[#000339]">
                  40,000+
                </h5>
                <img src="/img/high.svg" />
              </div>
              <p className="text-[#A7A7A7] text-xs font-normal mt-2">
                By avarage for 2 bedroom apments in San Francisco, CA
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex mt-6 space-x-3.5">
                <img className="h-4" src="/img/user1.svg" />
                <img className="h-4" src="/img/user1.svg" />
                <img className="h-4" src="/img/user1.svg" />
              </div>
              <div className="flex space-x-3.5">
                <img className="h-4" src="/img/user1.svg" />
                <img className="h-4" src="/img/user1.svg" />
                <img className="h-4" src="/img/user1.svg" />
                <img className="h-4" src="/img/user1.svg" />
              </div>
            </div>
          </div>
          <img
            className="hidden lg:basis-2/3 lg:block w-[400px] h-[460px]"
            src="/img/house.svg"
          />
        </div>
        <div className="lg:basis-1/3 lg:pl-40 lg:pr-14 lg:pb-16 pt-8">
          <div className="bg-[#000339] font-semibold rounded-xl w-10 h-1"></div>
          <h4 className="text-[#000339] font-semibold text-3xl pt-2.5">
            You’ve found a neighborhood you love.
          </h4>
          <p className="text-[#5A6473] text-base	font-normal md:text-start mt-5">
            When you own a home, you’re committing to living in one location for
            a while. In a recent Trulia survey, we found that five out of six
            respondents said finding the right neighborhood
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-10 lg:mt-28 mb-12 items-center space-y-4 md:justify-between font-poppins">
        <div>
          <h5 className="font-semibold text-[#000339] text-[64px]">2,500</h5>
          <p className="text-[#7D8589] text-[18px] font-medium text-center md:text-start">
            Homes For Sale
          </p>
        </div>
        <div>
          <h5 className="font-semibold text-[#000339] text-[64px]">5,000+</h5>
          <p className="text-[#7D8589] text-[18px] font-medium text-center md:text-start">
            Homes Recently Sold
          </p>
        </div>
        <div>
          <h5 className="font-semibold text-[#000339] text-[64px]">170+</h5>
          <p className="text-[#7D8589] text-[18px] font-medium text-center md:text-start">
            Price Reduced
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
