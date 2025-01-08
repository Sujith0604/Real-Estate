const FeatureSection = () => {
  return (
    <section
      id="feature"
      className="featured-properties bg-[#F5FAFE] drop-shadow-lg px-5 lg:px-40 py-28 mt-10"
    >
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-end font-poppins">
        <div>
          <h4 className="text-[#000339] text-4xl	font-semibold text-center md:text-start">
            Featured Properties
          </h4>
          <p className="text-[#5A6473] text-base	font-normal mt-3.5 text-center md:text-start">
            Everything you need to know when you're looking
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-[30px] gap-y-[30px] mt-16">
        <div className="drop-shadow-[0_0_65px_#E2EEF9]">
          <img className="h-[270px] w-full" src="/img/1.jpg" />
          <div className="bg-white rounded-b-xl pl-5 pt-5 pb-5 pr-9 font-poppins">
            <h5 className="font-semibold text-xl text-[#000339]">$35000</h5>
            <p className="font-medium text-sm text-[#A3A6AB]">
              8502 Preston Rd. Inglewood, Maine 98280
            </p>
            <div className="flex flex-wrap text-sm mt-5 justify-between">
              <div className="grid grid-flow-col space-x-2">
                <img src="/img/Group 457.svg" />
                <p>6 Beds</p>
              </div>
              <div className="grid grid-flow-col space-x-2">
                <img src="/img/Group 458.svg" />
                <p>2 both</p>
              </div>
              <div className="grid grid-flow-col space-x-2">
                <img src="/img/Subtract.svg" />
                <p>3000 Sqft</p>
              </div>
            </div>
          </div>
        </div>
        <div className="drop-shadow-[0_0_65px_#E2EEF9]">
          <img className="h-[270px] w-full" src="/img/2.jpg" />
          <div className="bg-white rounded-b-xl pl-5 pt-5 pb-5 pr-9 font-poppins">
            <h5 className="font-semibold text-xl text-[#000339]">$35000</h5>
            <p className="font-medium text-sm text-[#A3A6AB]">
              8502 Preston Rd. Inglewood, Maine 98280
            </p>
            <div className="flex flex-wrap text-sm mt-5 justify-between">
              <div className="grid grid-flow-col space-x-2">
                <img src="/img/Group 457.svg" />
                <p>4 Beds</p>
              </div>
              <div className="grid grid-flow-col space-x-2">
                <img src="/img/Group 458.svg" />
                <p>2 both</p>
              </div>
              <div className="grid grid-flow-col space-x-2">
                <img src="/img/Subtract.svg" />
                <p>2000 Sqft</p>
              </div>
            </div>
          </div>
        </div>
        <div className="drop-shadow-[0_0_65px_#E2EEF9]">
          <img className="h-[270px] w-full" src="/img/3.jpg" />
          <div className="bg-white rounded-b-xl pl-5 pt-5 pb-5 pr-9 font-poppins">
            <h5 className="font-semibold text-xl text-[#000339]">$35000</h5>
            <p className="font-medium text-sm text-[#A3A6AB]">
              8502 Preston Rd. Inglewood, Maine 98280
            </p>
            <div className="flex flex-wrap text-sm mt-5 justify-between">
              <div className="grid grid-flow-col space-x-2">
                <img src="/img/Group 457.svg" />
                <p>3 Beds</p>
              </div>
              <div className="grid grid-flow-col space-x-2">
                <img src="/img/Group 458.svg" />
                <p>2 both</p>
              </div>
              <div className="grid grid-flow-col space-x-2">
                <img src="/img/Subtract.svg" />
                <p>2000 Sqft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
