import { FunctionComponent } from "react";

export type BotDescriptionType = {
  className?: string;
};

const BotDescription: FunctionComponent<BotDescriptionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] text-left text-31xl text-khaki-100 font-roboto mq1050:flex-wrap ${className}`}
    >
      <div className="flex-[0.9808] flex flex-col items-start justify-start pt-[54px] pb-0 pl-0 pr-[11px] box-border min-w-[372px] max-w-full mq450:pt-[23px] mq450:box-border mq750:min-w-full mq1050:flex-1 mq1050:pt-[35px] mq1050:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[71px] max-w-full mq450:gap-[18px] mq750:gap-[35px]">
          <h1 className="m-0 relative text-inherit leading-[29px] font-semibold font-[inherit] inline-block max-w-full mq450:text-11xl mq450:leading-[17px] mq1050:text-21xl mq1050:leading-[23px]">{`What is Naya kisan bot? `}</h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full text-lg font-poppins">
            <div className="self-stretch relative leading-[28.8px] shrink-0">
              Naya kisan bot is a personal AI Farm Advisor for farmers and
              gardeners that help them in making more informed and data-backed
              decisions as well as update them with latest farming practices and
              bridge the gap between farmer and technology.
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-14 box-border max-w-full mq750:pl-7 mq750:pr-7 mq750:box-border">
              <img
                className="h-[495.6px] w-[377px] relative overflow-hidden shrink-0 object-cover max-w-full"
                alt=""
                src="/frame-4-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[80.8px] min-w-[374px] max-w-full mq450:gap-5 mq750:gap-10 mq750:min-w-full mq1050:flex-1">
        <img
          className="self-stretch h-[352px] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/clip-path-group@2x.png"
        />
        <div className="w-[514px] flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[68px] max-w-full mq450:gap-[17px] mq750:gap-[34px]">
            <h1 className="m-0 w-[338px] relative text-inherit leading-[29px] font-semibold font-[inherit] flex items-center max-w-full mq450:text-11xl mq450:leading-[17px] mq1050:text-21xl mq1050:leading-[23px]">
              What we offer
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0 box-border max-w-full text-lg font-poppins">
              <div className="h-[173px] flex-1 relative leading-[28.8px] flex items-center max-w-full">
                <span>
                  <p className="m-0">{`Our platform provides valuable resources and support to farmers in India, helping them optimize their agricultural practices and improve productivity. `}</p>
                  <p className="m-0">
                    We also cater to individuals who have a passion for farming
                    as a hobby or a side business, offering insights and tips to
                    enhance their farming experience.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotDescription;
