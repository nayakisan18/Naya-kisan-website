import { FunctionComponent } from "react";
import Main from "../components/Main";
import Content from "../components/Content";
import SmartRecommendations from "../components/SmartRecommendations";
import BotDescription from "../components/BotDescription";
import VisionMissionContent from "../components/VisionMissionContent";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent1 from "../components/FrameComponent1";
import Footer from "../components/Footer";

const HomePage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-seagreen-200 overflow-hidden flex flex-col items-end justify-start pt-[50px] px-0 pb-0 box-border leading-[normal] tracking-[normal]">
      <Main />
      <img
        className="w-[377px] h-[495.6px] absolute !m-[0] top-[1554px] left-[203px] object-cover z-[1]"
        alt=""
        src="/frame-4@2x.png"
      />
      <Content />
      <section className="w-[1264px] flex flex-row items-start justify-end pt-0 px-[58px] pb-[379.4px] box-border relative max-w-full lg:pb-[247px] lg:box-border mq450:pb-[105px] mq450:box-border mq750:pl-[29px] mq750:pr-[29px] mq750:box-border mq1050:pb-[161px] mq1050:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[101px] max-w-full lg:gap-[50px] mq750:gap-[25px]">
          <SmartRecommendations />
          <BotDescription />
        </div>
        <img
          className="h-[486px] w-[1063px] absolute !m-[0] bottom-[-117px] left-[92px] object-cover"
          alt=""
          src="/clip-path-group-1@2x.png"
        />
      </section>
      <section      
        className="w-[1199px] flex flex-col items-end justify-start pt-0 pb-[214px] pl-5 pr-0 box-border gap-11 max-w-full text-left text-31xl text-khaki-100 font-poppins lg:pb-[139px] lg:box-border mq750:gap-[22px] mq750:pb-[90px] mq750:box-border"
      >
        <VisionMissionContent />
        <div id="join-section"className="w-[956px] flex flex-col items-start justify-start gap-[84.6px] max-w-full mq750:gap-[21px] mq1050:gap-[42px]">
          <div className="w-[652px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[65.4px] max-w-full mq450:gap-4 mq750:gap-[33px]">
            <h1  className="m-0 self-stretch relative text-inherit leading-[21px] font-bold font-[inherit] mq450:text-11xl mq450:leading-[13px] mq1050:text-21xl mq1050:leading-[17px]">
              Steps to join Naya Kisan
            </h1>
            <div className="w-[600px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div  className="h-[3px] w-[203px] relative border-gold border-t-[3px] border-solid box-border" />
            </div>
          </div>
          <div  className="self-stretch flex flex-row items-start justify-end max-w-full">
            <FrameComponent11 />
          </div>
        </div>
      </section>
      <FrameComponent1 />
      <div className="!m-[0] absolute top-[3418px] left-[490px] flex flex-row items-start justify-start">
        <img
          className="h-[703px] w-[664px] absolute !m-[0] top-[-563px] left-[-447px] object-cover"
          alt=""
          src="/frame-125@2x.png"
        />
        <img
          className="h-[221px] w-[216px] relative rounded-3xs object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/naya-kisan-1@2x.png"
        />
      </div>
      <Footer
        vector="/vector-2.svg"
        socialIcon3="/vector-8.svg"
        socialIcon6="/vector-11.svg"
      />
    </div>
  );
};

export default HomePage;
