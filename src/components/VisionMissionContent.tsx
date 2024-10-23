import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";

export type VisionMissionContentType = {
  className?: string;
};

const VisionMissionContent: FunctionComponent<VisionMissionContentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start max-w-full text-left text-31xl text-seagreen-200 font-roboto ${className}`}
    >
      <FrameComponent3 />
    </div>
  );
};

export default VisionMissionContent;
