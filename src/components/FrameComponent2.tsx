import { FunctionComponent } from "react";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1240px] flex flex-row items-start justify-end py-0 px-[25px] box-border max-w-full text-center text-31xl text-khaki-100 font-poppins ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[67px] max-w-full lg:gap-[33px] mq750:gap-[17px]">
        <h1 className="m-0 w-[1151px] relative text-inherit leading-[21px] font-bold font-[inherit] flex items-center justify-center max-w-full mq450:text-11xl mq450:leading-[13px] mq1050:text-21xl mq1050:leading-[17px]">
          For Gardeners
        </h1>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-0 box-border max-w-full text-left text-xl text-seagreen-200">
          <div className="flex-1 flex flex-col items-start justify-start gap-[57px] max-w-full mq750:gap-7">
            <div className="w-[1140px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="h-[3px] w-[203px] relative border-gold border-t-[3px] border-solid box-border" />
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[37.5px] max-w-full mq750:gap-[19px]">
              <div className="flex-[0.9878] rounded-xl bg-khaki-100 flex flex-col items-start justify-start pt-[25px] pb-[26px] pl-[27px] pr-5 box-border gap-[11px] min-w-[277px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border mq450:flex-1">
                <div className="w-[370px] h-[419px] relative rounded-xl bg-khaki-100 hidden max-w-full" />
                <div className="w-[272px] flex flex-row items-start justify-start py-0 px-px box-border">
                  <b className="flex-1 relative leading-[21px] whitespace-pre-wrap z-[1] mq450:text-base mq450:leading-[17px]">
                    Step 1 : Choose Your Gardener
                  </b>
                </div>
                <div className="w-[311px] h-[315px] relative text-sm leading-[21px] font-semibold flex items-center z-[1]">
                  Choosing the right gardener ensures that your garden receives
                  expert care tailored to its unique needs. A skilled gardener
                  brings specialized knowledge in plant care, garden design, and
                  sustainable practices, helping your garden thrive year-round.
                  They can identify and address issues like pests, diseases, and
                  soil health, while also enhancing the beauty and functionality
                  of your outdoor space. By selecting a gardener who understands
                  your preferences and garden's requirements, you save time,
                  avoid costly mistakes, and achieve a lush, vibrant garden that
                  reflects your vision and complements your lifestyle.
                </div>
              </div>
              <div className="flex-[0.9755] rounded-xl bg-khaki-100 flex flex-col items-start justify-start pt-[26px] pb-[22px] pl-[31px] pr-5 box-border gap-3.5 min-w-[277px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border mq450:flex-1">
                <div className="w-[370px] h-[419px] relative rounded-xl bg-khaki-100 hidden max-w-full" />
                <b className="w-[270px] relative leading-[21px] flex whitespace-pre-wrap items-center z-[1] mq450:text-base mq450:leading-[17px]">
                  Step 2 : Fill Full Details
                </b>
                <div className="w-[311px] h-[336px] relative text-sm leading-[21px] font-semibold flex items-center z-[1]">
                  Full details are essential to ensure the best match between
                  the gardener and the client's needs. By providing
                  comprehensive information, including the gardener's
                  experience, location, and areas of expertise, as well as
                  details about the client's garden, such as size and types of
                  plants, both parties can make informed decisions. This
                  transparency helps build trust and ensures that the gardener
                  can effectively address the specific requirements of the
                  garden, leading to better results and higher satisfaction.
                  Clear details also streamline communication, reducing
                  misunderstandings and fostering a more personalized gardening
                  experience.
                </div>
              </div>
              <div className="flex-1 rounded-xl bg-khaki-100 flex flex-col items-start justify-start pt-[19px] pb-3.5 pl-[27px] pr-4 box-border gap-2 min-w-[277px] max-w-full">
                <div className="w-[370px] h-[419px] relative rounded-xl bg-khaki-100 hidden max-w-full" />
                <div className="w-[272px] flex flex-row items-start justify-start py-0 px-px box-border">
                  <b className="flex-1 relative leading-[21px] z-[1] mq450:text-base mq450:leading-[17px]">
                    Step 3 : Ask Anything Related to Your Garden
                  </b>
                </div>
                <div className="self-stretch relative text-sm leading-[21px] font-semibold z-[1]">
                  Ask Anything Related to Your Garden" provides users with
                  direct access to expert advice, helping them solve problems
                  and improve their gardening practices. Whether it's dealing
                  with pests, choosing the right plants, or understanding soil
                  conditions, having a platform to ask specific questions
                  ensures that users get tailored, practical solutions. This
                  service enhances the user experience by offering personalized
                  guidance, reducing the trial-and-error approach, and
                  empowering gardeners with knowledge. It also fosters ongoing
                  engagement, as users can continuously seek advice, making
                  their gardening journey more successful and enjoyable.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
