import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import FrameComponent10 from "./FrameComponent10";

// Importing the image from the assets folder
import clipPathGroupImg from "../assets/clip-path-group-2@2x.png";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-16 pl-5 pr-[21px] box-border max-w-full text-left text-31xl text-khaki-100 font-roboto mq450:pb-[42px] mq450:box-border ${className}`}
    >
      <div className="w-[867px] flex flex-col items-start justify-start gap-[58px] max-w-full mq450:gap-[29px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[29px] font-semibold font-[inherit] mq450:text-11xl mq450:leading-[17px] mq1050:text-21xl mq1050:leading-[23px]">
          Want to Join Naya Kisan Community?
        </h1>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-lg font-poppins">
          <div className="w-[499px] flex flex-col items-end justify-start gap-[50px] max-w-full mq750:gap-[25px]">
            <div className="self-stretch relative leading-[28.8px]">
              Join Naya Kisan and Get Artificial intelligence Consultant to your
              Farm.
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[25px] pr-5">
              <FrameComponent10 />
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[78px] pr-[71px] box-border max-w-full mq750:pl-[39px] mq750:pr-[35px] mq750:box-border">
              <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
                <img
                  className="h-[63.8px] w-[68px] absolute !m-[0] top-[-45px] left-[-6.6px] object-contain"
                  alt="Clip Path Group"
                  src={clipPathGroupImg}
                />
                <Button
                  className="h-20 flex-1 max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#1f673c",
                    fontSize: "30",
                    background: "#f2dd82",
                    borderRadius: "10px",
                    "&:hover": { background: "#f2dd82" },
                    height: 80,
                  }}
                  onClick={() => {
                    window.open("https://wa.me/8380074040", "_blank");
                  }}
                >
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
