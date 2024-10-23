import { FunctionComponent } from "react";

export type FrameComponent13Type = {
  className?: string;
};

const FrameComponent13: FunctionComponent<FrameComponent13Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start min-w-[230px] text-left text-lg text-seagreen-200 font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[52px] px-[38px] pb-[33px] relative gap-[29px]">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-khaki-100" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-px">
          <img
            className="h-[50px] w-[50px] relative z-[1]"
            alt=""
            src="/vector-110.svg"
          />
        </div>
        <div className="h-36 relative leading-[28.8px] flex items-center z-[1]">
          <span>
            <p className="m-0">{`Our AI considers your unique `}</p>
            <p className="m-0">{`circumstances, excluding `}</p>
            <p className="m-0">{`redundant measures and `}</p>
            <p className="m-0">{`recommending only what's `}</p>
            <p className="m-0">necessary.</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent13;
