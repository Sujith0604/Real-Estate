const ClientSection = () => {
  return (
    <section className="clients px-5 lg:px-40 mt-20">
      <div className="py-10">
        <div className="flex flex-col md:flex-row items-center font-poppins md:justify-between">
          <div>
            <div className="flex flex-row justify-center md:justify-start">
              <img src="/img/SK-removebg-preview.png" className=" h-[70px]" />
            </div>
            <p className="text-[#7D8589] text-[16px] font-medium text-center my-6">
              More than 450+ companies trust SK Realestate Agency
            </p>
          </div>
          <div>
            <div className="flex flex-row justify-center md:justify-end">
              <img className="w-28" src="/img/star.svg" />
            </div>
            <p className="text-[#7D8589] text-[16px] font-medium text-center my-3.5">
              5 Star Ratings (2k+ Review)
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 mt-16 lg:mt-16 lg:flex-row lg:justify-between">
          <img className="w-36" src="/img/meundies.svg" />
          <img className="w-36" src="/img/slack.svg" />
          <img className="w-36" src="/img/amazon.svg" />
          <img className="w-36" src="/img/woocommerce.svg" />
          <img className="w-36" src="/img/sitepoint.svg" />
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
