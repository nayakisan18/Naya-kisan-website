import { Button } from "@mui/material";
import { FunctionComponent, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";

// Importing logo from the assets folder
import logoImg from "../assets/logo@2x.png";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onServicesTextClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  return (
    <div
      className={`w-[1267px] flex flex-row items-start justify-end py-0 px-[45px] box-border max-w-full mq700:pl-[22px] mq700:pr-[22px] mq700:box-border ${className}`}
    >
      <header className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 text-left text-xl text-white font-inter">
        <img
          className="h-[120px] w-[123.8px] relative object-cover"
          loading="lazy"
          alt="Naya Kisan Logo"
          src={logoImg}
        />
        <div className="w-[556px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border max-w-full mq700:w-0">
          <div className="self-stretch rounded-3xs bg-seagreen-200 flex flex-row items-start justify-start py-[7px] pl-[50px] pr-[39px] box-border gap-[29px] max-w-full mq700:hidden mq700:pl-[25px] mq700:box-border">
            <div className="h-16 w-[556px] relative rounded-3xs bg-seagreen-200 hidden max-w-full" />
            <div className="flex flex-col items-start justify-start pt-[13px] pb-0 pl-0 pr-2.5">
              <Link
                to="/"
                className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[58px] whitespace-nowrap z-[1]"
              >
                Home
              </Link>
            </div>
            {/* <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
              <Link
                to="/about-us"
                className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[85px] z-[1]"
              >
                About Us
              </Link>
            </div> */}
            <Link
              to="/contact-us"
              className="no-underline"
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
                Contact Us
              </Button>
            </Link>
            <Link
              to="/services"
              className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[86px] whitespace-nowrap cursor-pointer z-[1]"
            >
              Services
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent;
