import { FunctionComponent } from "react";

export type AgricultureFeatureType = {
  className?: string;
};

const AgricultureFeature: FunctionComponent<AgricultureFeatureType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1258px] flex flex-row items-start justify-start py-0 pl-5 pr-0 box-border relative max-w-full text-left text-base text-seagreen-200 font-poppins ${className}`}
    >
      <div className="w-[707px] !m-[0] absolute top-[-273px] right-[0px] rounded-tl-131xl rounded-tr-none rounded-br-none rounded-bl-131xl bg-khaki-100 flex flex-row items-start justify-end pt-[51px] px-[62px] pb-[39px] box-border max-w-full">
        <div className="h-[300px] w-[707px] relative rounded-tl-131xl rounded-tr-none rounded-br-none rounded-bl-131xl bg-khaki-100 hidden max-w-full" />
        <div className="w-[528px] relative leading-[26px] flex items-center shrink-0 max-w-full z-[1]">
          <span className="w-full">
            <p className="m-0 text-xl">
              <b>{`6. Agriculture Schemes (Krushi Yojana) `}</b>
            </p>
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <p className="m-0">
              <b>Scheme Details:</b>
              <span className="font-semibold">
                {" "}
                Information on various government schemes and subsidies
                available for farmers.
              </span>
            </p>
            <p className="m-0">
              <b className="text-xl font-poppins">{`Eligibility Criteria: `}</b>
              <span className="font-semibold">
                Requirements and conditions for applying to different programs
              </span>
              <b className="text-xl font-poppins">.</b>
            </p>
            <p className="m-0">
              <b className="text-xl font-poppins">{`Application Process: `}</b>
              <span className="font-semibold">
                Step-by-step guidance on how to apply for schemes and subsidies.
              </span>
            </p>
          </span>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[38px] box-border gap-5 max-w-full text-khaki-100">
        <div className="w-[506px] h-[19px] flex flex-row items-start justify-start py-0 px-8 box-border max-w-full">
          <div className="self-stretch flex-1 relative rounded-[50%] bg-gray max-w-full" />
        </div>
        <div className="w-[610px] flex flex-row items-start justify-start py-0 px-[13px] box-border max-w-full">
          <div className="flex-1 relative leading-[26px] inline-block max-w-full">
            <p className="m-0 text-xl">
              <b>{`7. Soil Testing `}</b>
            </p>
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <p className="m-0">
              <b>{`Soil Analysis: `}</b>
              <span className="font-semibold">
                Comprehensive testing of soil samples to determine pH, nutrient
                levels, and organic matter content.
              </span>
            </p>
            <p className="m-0">
              <b className="text-xl font-poppins">{`Fertilizer Recommendations: `}</b>
              <span className="font-semibold">
                Tailored advice on the type and quantity of fertilizers needed
                to improve soil health and crop yield.
              </span>
            </p>
            <p className="m-0">
              <b className="text-xl font-poppins">Soil Amendments:</b>
              <span className="font-semibold">
                {" "}
                Suggestions for soil amendments like compost, lime, and gypsum
                to address deficiencies and imbalances.
              </span>
            </p>
            <p className="m-0">
              <b className="text-xl font-poppins">{`Continuous Monitoring: `}</b>
              <span className="font-semibold">
                Regular soil testing services to monitor changes and ensure
                long-term soil fertility.
              </span>
            </p>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start gap-3 max-w-full text-seagreen-200 mq1050:flex-wrap">
          <div className="w-[519px] flex flex-col items-start justify-end pt-0 px-0 pb-[21px] box-border min-w-[519px] max-w-full mq750:min-w-full mq1050:flex-1">
            <div className="self-stretch h-[294px] relative">
              <div className="absolute top-[275px] left-[0px] rounded-[50%] bg-gray w-[519px] h-[19px]" />
              <img
                className="absolute top-[0px] left-[13px] w-[480px] h-[282px] object-cover z-[1]"
                alt=""
                src="/clip-path-group-3@2x.png"
              />
            </div>
          </div>
          <div className="flex-1 rounded-tl-131xl rounded-tr-none rounded-br-none rounded-bl-131xl bg-khaki-100 flex flex-row items-start justify-end pt-[26px] px-[67px] pb-[15px] box-border min-w-[460px] max-w-full mq750:pl-[33px] mq750:pr-[33px] mq750:box-border mq750:min-w-full">
            <div className="h-[348px] w-[707px] relative rounded-tl-131xl rounded-tr-none rounded-br-none rounded-bl-131xl bg-khaki-100 hidden max-w-full" />
            <div className="w-[528px] relative leading-[25px] flex items-center shrink-0 max-w-full z-[1]">
              <span className="w-full">
                <p className="m-0 text-xl">
                  <b>{`8. Operation Cost Reduction `}</b>
                </p>
                <p className="m-0">
                  <b>&nbsp;</b>
                </p>
                <p className="m-0">
                  <b>{`Cost Analysis: `}</b>
                  <span className="font-semibold">
                    Detailed breakdown of your farming expenses to identify
                    areas for cost savings.
                  </span>
                </p>
                <p className="m-0">
                  <b className="text-xl font-poppins">{`Technology Integration: `}</b>
                  <span className="font-semibold">
                    Recommendations on the latest farming technologies and
                    equipment that can reduce labor and input costs
                  </span>
                  <b className="text-xl font-poppins">.</b>
                </p>
                <p className="m-0">
                  <b className="text-xl font-poppins">{`Efficient Practices: `}</b>
                  <span className="font-semibold">
                    Tips on efficient farming practices such as precision
                    farming, drip irrigation, and integrated pest management.
                  </span>
                </p>
                <p className="m-0">
                  <b className="text-xl font-poppins">{`Resource Management: `}</b>
                  <span className="font-semibold">
                    Strategies for optimizing the use of water, fertilizers, and
                    labor to reduce overall operational costs.
                  </span>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgricultureFeature;
