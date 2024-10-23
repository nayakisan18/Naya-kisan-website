import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export type HeroContentType = {
  className?: string;
};

const HeroContent: FunctionComponent<HeroContentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <header
      className={`w-[1130px] flex flex-row items-start justify-between py-0 pl-0 pr-5 box-border gap-5 max-w-full text-left text-xl text-white font-inter ${className}`}
    >
      <Link to="/">
        <img
          className="h-[120px] w-[123.8px] relative object-cover z-[1]"
          loading="lazy"
          alt="Naya Kisan Logo"
          src="/logo@2x.png"
        />
      </Link>
      <div className="h-[89px] w-[556px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border max-w-full mq750:w-0">
        <div className="self-stretch flex-1 rounded-3xs bg-seagreen-200 flex flex-row items-start justify-start py-[7px] pl-[50px] pr-5 box-border gap-[30px] max-w-full mq750:hidden mq750:gap-[15px] mq750:pl-[25px] mq750:box-border">
          <div className="h-16 w-[556px] relative rounded-3xs bg-seagreen-200 hidden max-w-full" />
          <div className="flex flex-col items-start justify-start pt-[13px] pb-0 pl-0 pr-[9px]">
            <Link
              to="/"
              className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[58px] whitespace-nowrap z-[1]"
            >
              Home
            </Link>
          </div>
          <div className="flex flex-col items-start justify-start pt-[13px] pb-0 pl-0 pr-2.5">
            <Link
              to="/about-us"
              className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[85px] z-[1]"
            >
              About Us
            </Link>
          </div>
          <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
            <Link
              to="/contact-us"
              className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[109px] whitespace-nowrap cursor-pointer z-[1]"
            >
              Contact Us
            </Link>
          </div>
          <Link
            to="/services"
            className="self-stretch flex-1 z-[2] no-underline"
            style={{ textDecoration: "none" }}
          >
            <Button
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#f6d674",
                fontSize: "20",
                borderColor: "#f6d674",
                borderRadius: "40px",
                "&:hover": { borderColor: "#f6d674" },
              }}
            >
              Services
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeroContent;
