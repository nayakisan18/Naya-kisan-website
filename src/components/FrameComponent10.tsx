import { FunctionComponent } from "react";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: FunctionComponent<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-row items-start justify-center gap-[30px] mq450:flex-wrap ${className}`}
    >
      <img
        className="h-[50px] w-[50px] relative min-h-[50px]"
        alt=""
        src="/vector-410.svg"
      />
      <img
        className="h-[50px] w-[49.8px] relative min-h-[50px]"
        loading="lazy"
        alt=""
        src="/-icon-whatsapp.svg"
      />
      <img
        className="h-[50px] w-[50px] relative min-h-[50px]"
        alt=""
        src="/vector-57.svg"
      />
      <img
        className="h-[50px] w-[50px] relative min-h-[50px]"
        alt=""
        src="/vector-61.svg"
      />
    </div>
  );
};

export default FrameComponent10;
