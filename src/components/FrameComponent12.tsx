import { FunctionComponent } from "react";

export type FrameComponent12Type = {
  className?: string;
};

const FrameComponent12: FunctionComponent<FrameComponent12Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start min-w-[230px] text-left text-lg text-seagreen-200 font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[50px] px-[21px] pb-8 relative gap-[60px] mq450:gap-[30px]">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-khaki-100" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-px">
          <img
            className="h-[50px] w-10 relative z-[1]"
            alt=""
            src="/vector-210.svg"
          />
        </div>
        <div className="self-stretch relative leading-[28.8px] z-[1]">
          <p className="m-0">{`Receive regular updates on the `}</p>
          <p className="m-0">
            latest agricultural technology and equipment available in the
            market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent12;
