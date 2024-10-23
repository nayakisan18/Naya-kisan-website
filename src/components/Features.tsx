import { FunctionComponent } from "react";

export type FeaturesType = {
  className?: string;
};

// Import images from the assets folder
import whatsappImage1 from "../assets/whatsapp-image-20240819-at-22559-pm-1@2x.png";
import whatsappImage2 from "../assets/whatsapp-image-20240819-at-22558-pm-1@2x.png";
import whatsappImage3 from "../assets/whatsapp-image-20240819-at-22558-pm-2-1@2x.png";

const Features: FunctionComponent<FeaturesType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1244px] flex flex-col items-start justify-start pt-0 pb-56 pl-5 pr-0 box-border relative gap-[66px] max-w-full text-left text-31xl text-khaki-100 font-poppins lg:pb-[146px] lg:box-border mq450:gap-4 mq450:pb-[62px] mq450:box-border mq750:gap-[33px] mq1050:pb-[95px] mq1050:box-border ${className}`}
    >
      <div className="w-[1169px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <h1 className="m-0 w-[325px] relative text-inherit leading-[21px] font-bold font-[inherit] flex items-center shrink-0 max-w-full mq450:text-11xl mq450:leading-[13px] mq1050:text-21xl mq1050:leading-[17px]">
          For Farmers
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[27px] max-w-full text-base">
        <div className="w-[1168px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="h-[3px] w-[203px] relative border-gold border-t-[3px] border-solid box-border" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="w-[1224px] flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[58px] max-w-full mq750:gap-[29px]">
              <div className="w-[620px] flex flex-row items-start justify-start py-0 px-[18px] box-border max-w-full">
                <div className="flex-1 relative leading-[21px] inline-block max-w-full">
                  <p className="m-0 text-xl">
                    <b>{`1. Crop Information `}</b>
                  </p>
                  <p className="m-0">
                    <b>&nbsp;</b>
                  </p>
                  <p className="m-0">
                    <b>{`Growth Cycle: `}</b>
                    <span className="font-semibold">
                      Information on the stages of growth, from sowing to
                      harvesting, with timelines.
                    </span>
                  </p>
                  <p className="m-0">
                    <b className="text-xl font-poppins">Best Practices:</b>
                    <span className="font-semibold">
                      <span className="text-lg">{` `}</span>
                      <span>
                        Tips and techniques for soil preparation, seed
                        selection, planting methods, pest and disease
                        management, and harvesting.
                      </span>
                    </span>
                  </p>
                  <p className="m-0">
                    <b className="text-xl font-poppins">{`Yield Maximization: `}</b>
                    <span className="font-semibold">
                      Strategies for improving crop yield through efficient
                      resource management, use of organic and chemical
                      fertilizers, and advanced farming techniques.
                    </span>
                  </p>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full text-seagreen-200">
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                    <div className="w-[1183px] flex flex-row items-start justify-start gap-[47px] max-w-full mq750:gap-[23px] mq1050:flex-wrap">
                      <div className="w-[442px] flex flex-col items-start justify-start pt-[31px] px-0 pb-0 box-border min-w-[442px] max-w-full mq750:min-w-full mq1050:flex-1">
                        <div className="self-stretch h-[272px] relative">
                          <div className="absolute top-[253px] left-[0px] rounded-[50%] bg-gray w-[442px] h-[19px]" />
                          <img
                            className="absolute top-[0px] left-[13px] rounded-3xs w-[404px] h-[260px] object-cover z-[1]"
                            loading="lazy"
                            alt="whatsapp image 1"
                            src={whatsappImage1}
                          />
                        </div>
                      </div>
                      <div className="flex-1 rounded-tl-131xl rounded-tr-none rounded-br-none rounded-bl-131xl bg-khaki-100 flex flex-row items-start justify-center pt-6 pb-[22px] pl-[46px] pr-5 box-border min-w-[451px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border mq750:pl-[23px] mq750:box-border mq750:min-w-full">
                        <div className="h-[351px] w-[694px] relative rounded-tl-131xl rounded-tr-none rounded-br-none rounded-bl-131xl bg-khaki-100 hidden max-w-full" />
                        <div className="w-[512px] relative leading-[25px] flex items-center shrink-0 max-w-full z-[1]">
                          <span className="w-full">
                            <p className="m-0 text-xl">
                              <b>{`2. Personal Crop Advisory `}</b>
                            </p>
                            <p className="m-0">
                              <b>&nbsp;</b>
                            </p>
                            <p className="m-0">
                              <b>{`Tailored Recommendations: `}</b>
                              <span className="font-semibold">
                                Customized advice based on your crop, land size,
                                soil type, and climatic conditions.
                              </span>
                            </p>
                            <p className="m-0">
                              <b className="text-xl font-poppins">{`Expert Consultation: `}</b>
                              <span className="font-semibold">
                                Access to agricultural experts for guidance on
                                crop management, pest control, and disease
                                prevention.
                              </span>
                            </p>
                            <p className="m-0">
                              <b className="text-xl font-poppins">{`Nutrient Management: `}</b>
                              <span className="font-semibold">
                                Suggestions on the use of fertilizers and
                                amendments to optimize crop nutrition and
                                health.
                              </span>
                            </p>
                            <p className="m-0">
                              <b className="text-xl font-poppins">{`Problem-Solving: `}</b>
                              <span className="font-semibold">
                                Solutions for specific issues faced during
                                different stages of crop growth.
                              </span>
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[604px] relative leading-[21px] text-khaki-100 flex items-center max-w-full box-border pr-5 z-[1]">
                    <span className="w-full">
                      <p className="m-0 text-xl">
                        <b>{`3. Weather Advisory `}</b>
                      </p>
                      <p className="m-0">
                        <b>&nbsp;</b>
                      </p>
                      <p className="m-0">
                        <b>{`Real-Time Updates: `}</b>
                        <span className="font-semibold">
                          Up-to-date weather forecasts for your location,
                          including temperature, rainfall, humidity, and wind
                          speed.
                        </span>
                      </p>
                      <p className="m-0">
                        <b className="text-xl font-poppins">Alerts:</b>
                        <span className="font-semibold">
                          {" "}
                          Timely notifications about adverse weather conditions
                          such as storms, heavy rainfall, droughts, and frost.
                        </span>
                      </p>
                      <p className="m-0">
                        <b className="text-xl font-poppins">
                          Planning Assistance:
                        </b>
                        <span className="font-semibold">
                          {" "}
                          Guidance on scheduling farming activities like sowing,
                          irrigation, fertilization, and harvesting based on
                          weather forecasts.
                        </span>
                      </p>
                    </span>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2.5 pl-[18px] pr-0 box-border max-w-full">
                  <div className="flex-1 flex flex-row flex-wrap items-end justify-start gap-[70px] max-w-full mq450:gap-[17px] mq750:gap-[35px]">
                    <div className="w-[442px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border max-w-full">
                      <div className="self-stretch h-[19px] relative rounded-[50%] bg-gray" />
                    </div>
                    <div className="flex-1 rounded-tl-131xl rounded-tr-none rounded-br-none rounded-bl-131xl bg-khaki-100 flex flex-row items-start justify-center pt-5 pb-7 pl-12 pr-5 box-border min-w-[451px] max-w-full mq750:pl-6 mq750:box-border mq750:min-w-full">
                      <div className="h-[300px] w-[694px] relative rounded-tl-131xl rounded-tr-none rounded-br-none rounded-bl-131xl bg-khaki-100 hidden max-w-full" />
                      <div className="w-[514px] relative leading-[25px] flex items-center shrink-0 max-w-full z-[1]">
                        <span className="w-full">
                          <p className="m-0 text-xl">
                            <b>{`4. Crop Calendar `}</b>
                          </p>
                          <p className="m-0">
                            <b>&nbsp;</b>
                          </p>
                          <p className="m-0">
                            <b>{`Planting Schedule: `}</b>
                            <span className="font-semibold">
                              Detailed timelines for sowing, transplanting, and
                              harvesting various crops.
                            </span>
                          </p>
                          <p className="m-0 font-semibold">
                            Maintenance Reminders: Regular notifications about
                            crucial activities such as watering, weeding, and
                            pest control.
                          </p>
                          <p className="m-0">
                            <b className="text-xl font-poppins">
                              Seasonal Tips:
                            </b>
                            <span className="font-semibold">
                              {" "}
                              Best practices for each season to ensure optimal
                              crop growth and yield.
                            </span>
                          </p>
                          <p className="m-0">
                            <b className="text-xl font-poppins">{`Harvest Planning: `}</b>
                            <span className="font-semibold">
                              Information on the ideal time for harvesting to
                              maximize quality and market value.
                            </span>
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[586px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-khaki-100">
                  <div className="flex-1 relative leading-[21px] inline-block max-w-full z-[1]">
                    <p className="m-0 text-xl">
                      <b>{`5. Mandi Rates `}</b>
                    </p>
                    <p className="m-0">
                      <b>&nbsp;</b>
                    </p>
                    <p className="m-0">
                      <b>Market Prices:</b>
                      <span className="font-semibold">
                        {" "}
                        Latest prices for various crops in local and regional
                        markets.
                      </span>
                    </p>
                    <p className="m-0">
                      <b className="text-xl font-poppins">Price Trends:</b>
                      <span className="font-semibold">
                        {" "}
                        Historical data and trends to help predict future price
                        movements.
                      </span>
                    </p>
                    <p className="m-0">
                      <b className="text-xl font-poppins">Market Insights:</b>
                      <span className="font-semibold">
                        {" "}
                        Analysis and tips on when and where to sell your produce
                        to get the best returns
                      </span>
                      <b className="text-xl font-poppins">.</b>
                    </p>
                    <p className="m-0">
                      <b className="text-xl font-poppins">{`Direct Connections: `}</b>
                      <span className="font-semibold">
                        Contact details for buyers, traders, and market agents
                        to facilitate direct sales.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[270px] w-[442px] relative max-w-full ml-[-518px]">
            <div className="absolute top-[251px] left-[0px] rounded-[50%] bg-gray w-[442px] h-[19px]" />
            <img
              className="absolute w-[calc(100%_-_19px)] top-[0px] right-[11px] left-[8px] rounded-3xs max-w-full overflow-hidden h-[258px] object-cover z-[1]"
              loading="lazy"
              alt="whatsapp image 2"
              src={whatsappImage2}
            />
          </div>
        </div>
      </div>
      <img
        className="w-[390px] h-[232px] absolute !m-[0] bottom-[-55px] left-[58px] rounded-8xs object-cover z-[1]"
        loading="lazy"
        alt="whatsapp image 3"
        src={whatsappImage3}
      />
    </section>
  );
};

export default Features;
