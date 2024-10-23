import { FunctionComponent } from "react";
import FrameComponent15 from "./FrameComponent15";

export type ContentType = {
  className?: string;
};

// Import the image from the assets folder
import img2x from "../assets/img@2x.png";

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[34.6px] box-border max-w-full text-left text-31xl text-khaki-200 font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start py-[65.2px] pl-[57px] pr-5 box-border relative gap-5 max-w-full shrink-0 mq750:pl-7 mq750:pt-[42px] mq750:pb-[42px] mq750:box-border">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt="img"
          src={img2x}
        />
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full">
          <h1 className="m-0 relative text-inherit leading-[29px] font-semibold font-[inherit] z-[1] mq450:text-11xl mq450:leading-[17px] mq1050:text-21xl mq1050:leading-[23px]">
            Welcome to Naya Kisan!
          </h1>
        </div>
        <div className="w-[562px] relative text-lg leading-[27px] font-medium font-poppins flex items-center max-w-full z-[1]">
          <span className="w-full">
            <p className="m-0">{` Our revolutionary WhatsApp bot is here to help `}</p>
            <p className="m-0">
              farmers and Home Gardeners like you reduce labour and operational
              costs, as well as make Data-backed decisions for your Farm and
              Garden all through the power of AI. By understanding key aspects
              of your farm, such as location, size, crops grown, and labour
              details, our AI provides tailor-made recommendations to optimize
              efficiency and minimize expenses.
            </p>
          </span>
        </div>
        <FrameComponent15 />
      </div>
    </section>
  );
};

export default Content;
