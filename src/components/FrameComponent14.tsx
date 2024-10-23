import { FunctionComponent } from "react";

export type FrameComponent14Type = {
  className?: string;
};

const FrameComponent14: FunctionComponent<FrameComponent14Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start min-w-[230px] text-left text-lg text-seagreen-200 font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[52px] pb-[67px] pl-[23px] pr-[22px] relative gap-[52px] mq450:gap-[26px]">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-khaki-100" />
        <div className="self-stretch flex flex-row items-start justify-center">
          <img
            className="h-[50px] w-[50px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className="h-[87px] relative leading-[28.8px] flex items-center z-[1]">
          <span>
            <p className="m-0">{`Discover tools, equipment, and `}</p>
            <p className="m-0">{`technology that suit your budget `}</p>
            <p className="m-0">and help reduce labor costs.</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent14;
