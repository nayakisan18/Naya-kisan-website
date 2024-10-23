import { FunctionComponent } from "react";
import FrameComponent14 from "./FrameComponent14";
import FrameComponent13 from "./FrameComponent13";
import FrameComponent12 from "./FrameComponent12";

export type SmartRecommendationsType = {
  className?: string;
};

const SmartRecommendations: FunctionComponent<SmartRecommendationsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1067px] flex flex-col items-start justify-start gap-[41px] max-w-full text-center text-31xl text-khaki-100 font-roboto mq750:gap-5 ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-11 mq750:gap-[22px]">
        <h1 className="m-0 self-stretch h-[57px] relative text-inherit leading-[28.8px] font-semibold font-[inherit] flex items-center justify-center shrink-0 mq450:text-11xl mq450:leading-[17px] mq1050:text-21xl mq1050:leading-[23px]">
          Smart Recommendations for Farmers
        </h1>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="h-[3px] w-[203px] relative border-gold border-t-[3px] border-solid box-border" />
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[74px] text-left text-lg text-seagreen-200 mq750:gap-[18px] mq1050:gap-[37px]">
        <FrameComponent14 />
        <FrameComponent13 />
        <FrameComponent12 />
      </div>
    </div>
  );
};

export default SmartRecommendations;
