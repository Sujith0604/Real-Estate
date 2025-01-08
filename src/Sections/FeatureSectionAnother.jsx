const FeatureSectionAnother = () => {
  return (
    <section className="stat px-5 lg:px-40 mt-12 font-poppins">
      <div className="pt-10">
        <div className="flex bg-[#063183] rounded-[20px] w-full h-[23.125rem] justify-center items-center">
          <div className="basis-1/2 flex flex-col md:pl-20 md:block">
            <h4 className="text-white font-semibold text-3xl text-center md:text-start">
              Featured Properties
            </h4>
            <p className="text-[#9cadce] text-[16px] font-normal pt-4 text-center md:text-start">
              Everything you need to know when you're looking
            </p>
          </div>
          <div className="hidden md:block">
            <img className="max-w-none" src="/img/phone.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSectionAnother;
