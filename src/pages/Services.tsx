import { FunctionComponent } from "react";
import HeroContent from "../components/HeroContent";
import Content1 from "../components/Content1";
import Features from "../components/Features";
import AgricultureFeature from "../components/AgricultureFeature";
import FrameComponent2 from "../components/FrameComponent2";
import Footer from "../components/Footer";

const Services: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-seagreen-200 flex flex-col items-end justify-start pt-[50px] px-0 pb-0 box-border gap-[47px] leading-[normal] tracking-[normal] mq750:gap-[23px]">
      <img
        className="w-full h-[648px] absolute !m-[0] top-[170px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/clip-path-group1@2x.png"
      />
      <section className="w-[1243px] flex flex-col items-start justify-start pt-0 pb-[45px] pl-5 pr-0 box-border gap-[27px] max-w-full mq450:pb-5 mq450:box-border mq1050:pb-[29px] mq1050:box-border">
        <HeroContent />
        <Content1 />
      </section>
      <Features />
      <AgricultureFeature />
      <FrameComponent2 />
      <img
        className="w-[251px] h-[262px] absolute !m-[0] top-[1951px] left-[170px] rounded-8xs object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/whatsapp-image-20240819-at-22558-pm-1-1@2x.png"
      />
      <Footer
        vector="/vector-2.svg"
        socialIcon3="/vector-8.svg"
        socialIcon6="/vector-11.svg"
        propTextDecoration="unset"
      />
    </div>
  );
};

export default Services;
