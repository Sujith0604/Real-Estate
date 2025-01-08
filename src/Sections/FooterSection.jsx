import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterSection = () => {
  return (
    <footer className="stat px-5 lg:px-40 mt-14">
      <div className="flex flex-col justify-center pt-12 pb-14">
        <div>
          <div className="flex flex-col md:flex-row md:justify-between gap-6">
            <div>
              <h5 className="text-[#1C1C1D] text-xl font-bold font-lato">
                Sections
              </h5>
              <ul className="mt-[42px] text-[#7A7A7E] text-[16px] font-normal space-y-[18px] font-poppins">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#feature">Feature</a>
                </li>
                <li>
                  <a href="#customer">Customer</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-[#1C1C1D] text-xl font-bold font-lato">
                Get in touch
              </h5>
              <p className="mt-[42px] text-[#7A7A7E] text-[16px] font-normal space-y-[18px] font-poppins">
                You’ll find your next home, in any style you prefer.
              </p>
            </div>
          </div>

          <div className="flex md:justify-between items-center justify-center footer-bottom mt-[74px]">
            <img
              className="hidden md:block h-[60px]"
              src="/img/SK-removebg-preview.png"
            />
            <p className="text-[#C2C2C2] text-sm font-normal font-poppins">
              Copyright 2024 SK Real Estate Agency. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
