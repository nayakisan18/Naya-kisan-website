import { FunctionComponent } from "react";

export type Content1Type = {
  className?: string;
};

// Import images from the assets folder
import clipPathGroup11 from "../assets/clip-path-group-11@2x.png";
import clipPathGroup21 from "../assets/clip-path-group-21@2x.png";

const Content1: FunctionComponent<Content1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end max-w-full text-left text-31xl text-khaki-100 font-poppins ${className}`}
    >
      <div className="w-[1149px] flex flex-row items-end justify-start gap-[49px] max-w-full mq750:gap-6 mq1050:flex-wrap">
        <div className="w-[530px] flex flex-col items-start justify-start pt-0 px-0 pb-[134px] box-border min-w-[530px] min-h-[412px] max-w-full mq450:pb-[87px] mq450:box-border mq750:min-w-full mq1050:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[29px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[60px] font-bold font-[inherit] z-[1] mq450:text-11xl mq450:leading-[36px] mq1050:text-21xl mq1050:leading-[48px]">
              Innovate Solutions For a Greener Tomorrow
            </h1>
            <div className="w-[429px] relative text-xl leading-[23px] font-semibold flex items-center max-w-full box-border pr-5 z-[1] mq450:text-base mq450:leading-[18px]">
              Combining Technology to Provide Compressive Solutions to Protect
              and Improve the Livelihoods of Farmers
            </div>
          </div>
        </div>
        <div className="h-[621px] flex-1 relative min-w-[370px] max-w-full mq450:min-w-full">
          <div className="absolute top-[321px] left-[30px] rounded-tl-131xl rounded-tr-none rounded-br-none rounded-bl-131xl bg-khaki-100 w-[540px] h-[300px] z-[1]" />
          <img
            className="absolute top-[0px] left-[218px] w-[311px] h-[607px] object-cover z-[2]"
            alt="clip path group 11"
            src={clipPathGroup11}
          />
          <img
            className="absolute top-[33px] left-[0px] w-[247px] h-[481px] object-cover z-[3]"
            alt="clip path group 21"
            src={clipPathGroup21}
          />
        </div>
      </div>
    </div>
  );
};

export default Content1;
