import { FunctionComponent } from "react";

export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: FunctionComponent<FrameComponent11Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`h-[523px] w-[707px] relative max-w-full z-[2] text-left text-xl text-seagreen-200 font-poppins ${className}`}
    >
      <div className="absolute top-[0px] left-[90px] w-[617px] h-[237px] opacity-[0]">
        <div className="absolute top-[0px] left-[0px] rounded-tl-131xl rounded-tr-none rounded-br-none rounded-bl-131xl bg-khaki-100 w-full h-full" />
        <div className="absolute top-[116px] left-[122.2px] leading-[21px] font-medium flex items-center w-[412.8px] h-[42px] z-[1] mq450:text-base mq450:leading-[17px]">{`Hit “Continue to Chat” Bouton `}</div>
        <h1 className="m-0 absolute top-[57px] left-[116px] text-31xl leading-[21px] font-bold font-[inherit] flex items-center w-[202px] h-[21px] z-[1] mq450:text-11xl mq450:leading-[13px] mq1050:text-21xl mq1050:leading-[17px]">
          Step 2 :
        </h1>
      </div>
      <div className="absolute top-[323px] left-[90px] w-[617px] h-[200px] opacity-[0]">
        <div className="absolute top-[0px] left-[0px] rounded-tl-131xl rounded-tr-none rounded-br-none rounded-bl-131xl bg-khaki-100 w-full h-full" />
        <div className="absolute top-[119.2px] left-[122.2px] leading-[21px] font-medium flex items-center w-[412.8px] h-[35.4px] z-[1] mq450:text-base mq450:leading-[17px]">
          Now you are in a Naya kisan’s bot interface now explore by providing
          some details.
        </div>
        <h1 className="m-0 absolute top-[57px] left-[116px] text-31xl leading-[21px] font-bold font-[inherit] flex items-center w-[212px] h-[21px] z-[1] mq450:text-11xl mq450:leading-[13px] mq1050:text-21xl mq1050:leading-[17px]">
          Step 3 :
        </h1>
      </div>
      <div className="absolute top-[146px] left-[0px] w-full h-[237px] z-[2]">
        <div className="absolute top-[0px] left-[0px] rounded-tl-131xl rounded-tr-none rounded-br-none rounded-bl-131xl bg-khaki-100 w-full h-full" />
        <div className="absolute top-[123px] left-[133px] leading-[21px] font-medium flex items-center w-[473px] z-[1] mq450:text-base mq450:leading-[17px]">
          Scan our QR Code it will redirect you to our Naya kisan Bot
        </div>
        <h1 className="m-0 absolute top-[64px] left-[126px] text-31xl leading-[21px] font-bold font-[inherit] z-[1] mq450:text-11xl mq450:leading-[13px] mq1050:text-21xl mq1050:leading-[17px]">
          Step 1 :
        </h1>
      </div>
    </div>
  );
};

export default FrameComponent11;
