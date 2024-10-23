import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export type NavBarType = {
  className?: string;
};

const NavBar: FunctionComponent<NavBarType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-3xs bg-seagreen-200 overflow-hidden flex flex-row items-start justify-between py-5 pl-[50px] pr-[15px] gap-5 text-left text-xl text-white font-inter mq750:hidden mq750:pl-[25px] mq750:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[33px] text-khaki-100">
        <div className="flex flex-row items-start justify-start relative">
          <div className="h-[50px] w-[125px] absolute !m-[0] top-[calc(50%_-_25px)] left-[-34px] rounded-21xl border-khaki-100 border-[1px] border-solid box-border" />
          <Link
            to="/"
            className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[58px] whitespace-nowrap z-[1]"
          >
            Home
          </Link>
        </div>
      </div>
      <Link
        to="/about-us"
        className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[85px]"
      >
        About Us
      </Link>
      <Link
        to="/contact-us"
        className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[109px] whitespace-nowrap"
      >
        Contact Us
      </Link>
      <Link
        to="/services"
        className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[86px] whitespace-nowrap"
      >
        Services
      </Link>
    </div>
  );
};

export default NavBar;
