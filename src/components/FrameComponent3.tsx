import { FunctionComponent } from "react";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1097px] flex flex-row items-start justify-start py-0 pl-0 pr-5 box-border gap-[30px] max-w-full text-left text-31xl text-seagreen-200 font-roboto mq1050:flex-wrap ${className}`}
    >
      <div className="flex-[0.9874] rounded-3xs bg-khaki-100 flex flex-col items-start justify-start pt-[35px] pb-[43px] pl-[34px] pr-5 box-border gap-[43px] max-w-full z-[1] mq750:gap-[21px] mq750:flex-1">
        <div className="w-[525px] h-[285px] relative rounded-3xs bg-khaki-100 hidden max-w-full" />
        <div className="flex flex-row items-start justify-start py-0 px-[74px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex flex-row items-start justify-start gap-[30px]">
            <div className="w-[50px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
              <img
                className="self-stretch h-[38px] relative max-w-full overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/vector-310.svg"
              />
            </div>
            <h1 className="m-0 relative text-inherit leading-[29px] font-semibold font-[inherit] z-[1] mq450:text-11xl mq450:leading-[17px] mq1050:text-21xl mq1050:leading-[23px]">
              Vision
            </h1>
          </div>
        </div>
        <div className="w-[452px] h-[116px] relative text-lg leading-[28.8px] font-poppins flex items-center max-w-full z-[1]">{`To make farm-from-home possible where a farmer doesn’t have to micromanage his farm and can manage daily operations from his home without compromising on quality and output. `}</div>
      </div>
      <div className="flex-1 rounded-3xs bg-khaki-100 flex flex-col items-start justify-start pt-[35px] pb-[43px] pl-8 pr-4 box-border gap-[38px] max-w-full z-[1] mq750:gap-[19px]">
        <div className="w-[522px] h-[285px] relative rounded-3xs bg-khaki-100 hidden max-w-full" />
        <div className="w-96 flex flex-row items-start justify-start py-0 px-[61px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 flex flex-row items-start justify-start gap-[25px] mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <img
                className="w-[50px] h-[50px] relative object-cover z-[1]"
                alt=""
                src="/group-11@2x.png"
              />
            </div>
            <h1 className="m-0 flex-1 relative text-inherit leading-[29px] font-semibold font-[inherit] inline-block min-w-[122px] z-[1] mq450:text-11xl mq450:leading-[17px] mq1050:text-21xl mq1050:leading-[23px]">
              Mission
            </h1>
          </div>
        </div>
        <div className="self-stretch relative text-lg leading-[28.8px] font-poppins z-[1]">
          To bridge the gap between farmers and technology and promote farming
          as a profitable side business for urban and rural citizens as well and
          make agriculture more profitable in India.
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
