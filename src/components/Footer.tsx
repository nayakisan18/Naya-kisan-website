import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FooterType = {
  className?: string;
  vector?: string;
  socialIcon3?: string;
  socialIcon6?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propGap?: CSSProperties["gap"];
  propTextDecoration?: CSSProperties["textDecoration"];
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  vector,
  socialIcon3,
  socialIcon6,
  propWidth,
  propGap,
  propTextDecoration,
}) => {
  const privacyPolicyStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <footer
      className={`self-stretch h-[480px] bg-khaki-100 flex flex-row flex-wrap items-start justify-center pt-10 px-[67px] pb-[18px] box-border relative gap-x-[76px] gap-y-[141px] text-left text-xl text-seagreen-200 font-poppins ${className}`}
    >
      <div className="w-[319px] !m-[0] absolute top-[40px] left-[80.9px] flex flex-col items-start justify-start gap-[13px] font-ntr">
        <div className="flex flex-col items-start justify-start">
          <div className="w-[102.3px] h-[105.1px] relative shrink-0">
            <div className="absolute w-[calc(100%_-_3.1px)] top-[0px] right-[1.5px] left-[1.6px] h-[100.4px]">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full"
                alt=""
                src={vectorImg}
              />
              <div className="absolute top-[0px] left-[11.2px] w-[67.6px] h-[28.3px]">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                  alt=""
                  src="/vector-3.svg"
                />
                <img
                  className="absolute top-[0px] left-[15.3px] w-[39px] h-[10.3px] z-[3]"
                  alt=""
                  src="/vector-4.svg"
                />
                <img
                  className="absolute top-[16.7px] left-[1.9px] w-[42.3px] h-[6.4px] z-[3]"
                  alt=""
                  src="/vector-5.svg"
                />
                <img
                  className="absolute top-[3.4px] left-[7.6px] w-[37.5px] h-1.5 z-[4]"
                  alt=""
                  src="/vector-6.svg"
                />
                <img
                  className="absolute top-[10.5px] left-[4.4px] w-[31.9px] h-[4.9px] z-[3]"
                  alt=""
                  src="/vector-7.svg"
                />
              </div>
            </div>
            <div className="absolute top-[27.1px] left-[0px] flex flex-row items-end justify-start pt-[7.2px] pb-[4.6px] pl-[35px] pr-3.5 gap-[1.9px]">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                alt=""
                src={socialIcon3}
              />
              <img
                className="h-[32.2px] w-[30.7px] relative z-[2]"
                alt=""
                src="/vector-9.svg"
              />
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[21.8px]">
                <img
                  className="w-[21px] h-[44.4px] relative z-[2]"
                  alt=""
                  src="/vector-10.svg"
                />
              </div>
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[-0.1px] bottom-[0px]">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full z-[3]"
                  alt=""
                  src={socialIcon6}
                />
                <img
                  className="absolute top-[25.2px] left-[30.4px] w-[41.3px] h-2 z-[4]"
                  alt=""
                  src="/vector-12.svg"
                />
                <div className="absolute top-[1px] left-[59.6px] flex flex-col items-end justify-start pt-[10.5px] pb-0 pl-0 pr-px gap-[1.4px]">
                  <img
                    className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[5]"
                    alt=""
                    src="/vector-13.svg"
                  />
                  <div className="w-[9.5px] flex flex-row items-start justify-end py-0 px-1 box-border">
                    <img
                      className="h-[1.5px] w-[0.9px] relative z-[6]"
                      alt=""
                      src="/vector-14.svg"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-end py-0 pl-[9px] pr-[23px]">
                    <img
                      className="h-[25.7px] w-[9.6px] relative z-[7]"
                      alt=""
                      src="/vector-15.svg"
                    />
                  </div>
                  <div className="!m-[0] absolute top-[14.1px] right-[0.1px] flex flex-row items-end justify-start gap-[8.9px]">
                    <div className="h-[33.1px] w-[14.8px] relative">
                      <img
                        className="absolute top-[0px] left-[0px] w-[8.5px] h-[33.1px] z-[6]"
                        alt=""
                        src="/vector-16.svg"
                      />
                      <img
                        className="absolute top-[7.2px] left-[9.5px] w-[5.3px] h-[24.8px] z-[8]"
                        alt=""
                        src="/vector-17.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[0.7px]">
                      <div className="w-[6.1px] flex flex-row items-start justify-start py-0 pl-px pr-0.5 box-border">
                        <img
                          className="h-[4.3px] w-0.5 relative shrink-0 z-[6]"
                          alt=""
                          src="/vector-18.svg"
                        />
                      </div>
                      <div className="flex flex-row items-end justify-start py-0 pl-0 pr-0.5 relative gap-[1.4px] shrink-0">
                        <img
                          className="h-full w-[5.7px] absolute !m-[0] top-[0px] right-[0px] bottom-[0px] max-h-full z-[8]"
                          alt=""
                          src="/vector-19.svg"
                        />
                        <img
                          className="h-[2.6px] w-[1.9px] relative z-[10]"
                          alt=""
                          src="/vector-21.svg"
                        />
                        <div className="flex flex-row items-start justify-start relative">
                          <img
                            className="h-[9.4px] w-[3.4px] absolute !m-[0] bottom-[0.3px] left-[-2px] z-[9]"
                            alt=""
                            src="/vector-20.svg"
                          />
                          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[25.8px]">
                            <div className="w-[1.4px] h-[5.4px] relative">
                              <img
                                className="absolute top-[0px] left-[0.1px] w-[1.3px] h-[4.5px] z-[9]"
                                alt=""
                                src="/vector-22.svg"
                              />
                              <img
                                className="absolute top-[3.4px] left-[0px] w-[1.3px] h-0.5 z-[10]"
                                alt=""
                                src="/vector-23.svg"
                              />
                              <img
                                className="absolute top-[0px] left-[0.1px] w-[0.7px] h-[2.3px] z-[10]"
                                alt=""
                                src="/vector-24.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <img
                          className="h-[4.6px] w-[2.2px] absolute !m-[0] bottom-[0px] left-[0px] z-[11]"
                          alt=""
                          src="/vector-25.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[41.8px] h-[35.6px] relative">
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full z-[7]"
                      alt=""
                      src="/vector-26.svg"
                    />
                    <img
                      className="absolute top-[30.2px] left-[13.3px] w-[1.4px] h-[0.9px] z-[11]"
                      alt=""
                      src="/vector-27.svg"
                    />
                    <img
                      className="absolute top-[9.9px] left-[36.9px] w-[0.7px] h-px z-[8]"
                      alt=""
                      src="/vector-28.svg"
                    />
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px] w-[39.8px] h-[45.5px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full"
                    alt=""
                    src="/vector-39.svg"
                  />
                  <img
                    className="absolute top-[0.7px] left-[15.5px] w-[18.8px] h-[6.3px]"
                    alt=""
                    src="/vector-40.svg"
                  />
                  <img
                    className="absolute top-[0px] left-[14.8px] w-[25px] h-[3.9px] z-[7]"
                    alt=""
                    src="/vector-41.svg"
                  />
                  <div className="absolute top-[1.5px] left-[0.6px] w-[15.1px] h-[25.3px]">
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full"
                      alt=""
                      src="/vector-42.svg"
                    />
                    <img
                      className="absolute top-[16.3px] left-[0px] w-[2.7px] h-[9px]"
                      alt=""
                      src="/vector-43.svg"
                    />
                    <div className="absolute top-[13.5px] left-[2.3px] w-[3.2px] h-[7.9px]">
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full"
                        alt=""
                        src="/vector-44.svg"
                      />
                      <img
                        className="absolute top-[4.1px] left-[0px] w-[1.3px] h-[3.8px]"
                        alt=""
                        src="/vector-45.svg"
                      />
                    </div>
                    <img
                      className="absolute top-[11.1px] left-[4.7px] w-[1.3px] h-[2.1px]"
                      alt=""
                      src="/vector-46.svg"
                    />
                  </div>
                  <img
                    className="absolute top-[41.1px] left-[0.9px] w-[1.6px] h-[4.4px] z-[7]"
                    alt=""
                    src="/vector-47.svg"
                  />
                </div>
                <div className="absolute top-[72.7px] left-[32.7px] w-[40.5px] h-[5.3px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full z-[8]"
                    alt=""
                    src="/vector-29.svg"
                  />
                  <img
                    className="absolute top-[1.2px] left-[26.9px] w-[12.1px] h-[3.3px] z-[9]"
                    alt=""
                    src="/vector-33.svg"
                  />
                  <div className="absolute top-[1.6px] left-[0px] w-[10.5px] h-[2.9px]">
                    <img
                      className="absolute top-[0.5px] left-[0px] w-[9.9px] h-[2.4px] z-[9]"
                      alt=""
                      src="/vector-34.svg"
                    />
                    <img
                      className="absolute top-[1.4px] left-[8.1px] w-[2.4px] h-[0.8px] z-[10]"
                      alt=""
                      src="/vector-35.svg"
                    />
                    <img
                      className="absolute top-[0.5px] left-[0px] w-[3.7px] h-[1.1px] z-[10]"
                      alt=""
                      src="/vector-36.svg"
                    />
                    <img
                      className="absolute top-[1.4px] left-[3.8px] w-0.5 h-[0.8px] z-[10]"
                      alt=""
                      src="/vector-37.svg"
                    />
                    <img
                      className="absolute top-[0px] left-[3.3px] w-[2.2px] h-[0.8px] z-[11]"
                      alt=""
                      src="/vector-38.svg"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[36.9px] w-[3.6px] h-[1.4px]">
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full z-[10]"
                      alt=""
                      src="/vector-30.svg"
                    />
                    <div className="absolute top-[-0.5px] left-[0px] w-[3.4px] h-[1.8px]">
                      <img
                        className="absolute top-[0.5px] left-[0px] w-[2.6px] h-[1.3px] z-[11]"
                        alt=""
                        src="/vector-31.svg"
                      />
                      <img
                        className="absolute top-[0px] left-[2px] w-[1.4px] h-[0.9px] z-[12]"
                        alt=""
                        src="/vector-32.svg"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className="absolute top-[59.8px] left-[35.9px] w-[3.3px] h-[13.5px] z-[9]"
                  alt=""
                  src="/vector-50.svg"
                />
                <div className="absolute top-[45.5px] left-[2px] w-[2.4px] h-[5.6px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full z-[6]"
                    alt=""
                    src="/vector-48.svg"
                  />
                  <img
                    className="absolute top-[2.7px] left-[1px] w-[1.4px] h-[2.9px] z-[7]"
                    alt=""
                    src="/vector-49.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pl-[3px] pr-0 mt-[-9.2px]">
            <div className="relative leading-[34.1px] inline-block min-w-[103px] shrink-0 z-[13] mq450:text-base mq450:leading-[27px]">
              NAYA KISAN
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-xs leading-[20px] font-poppins">
          <p className="m-0">{`If you have any inquiries or would like to learn more about our services, please don't hesitate to reach out to us through our Contact Us page. `}</p>
          <p className="m-0">
            Stay connected with us on social media to stay informed about the
            latest updates, news, and Farm insights.
          </p>
        </div>
        <div className="w-[215px] flex flex-row items-end justify-between gap-5">
          <img
            className="h-[30px] w-[30px] relative min-h-[30px]"
            alt=""
            src="/vector-51.svg"
          />
          <img
            className="h-[29px] w-[35px] relative"
            alt=""
            src="/vector-52.svg"
          />
          <img
            className="h-[30px] w-[30px] relative min-h-[30px]"
            alt=""
            src="/vector-53.svg"
          />
          <img
            className="h-[30px] w-[30px] relative min-h-[30px]"
            alt=""
            src="/vector-54.svg"
          />
        </div>
      </div>
      <div className="w-[199.2px] !m-[0] absolute top-[40px] left-[540.9px] flex flex-col items-start justify-start gap-[27px]">
        <b className="self-stretch relative leading-[21px] mq450:text-base mq450:leading-[17px]">
          Links
        </b>
        <div className="flex flex-row items-start justify-start gap-[14.5px]">
          <div className="flex flex-col items-start justify-start pt-[3.2px] px-0 pb-0">
            <img
              className="w-[7.7px] h-[13.3px] relative object-contain"
              alt=""
              src="/vector-55.svg"
            />
          </div>
          <div className="relative leading-[21px] font-medium inline-block min-w-[60px] mq450:text-base mq450:leading-[17px]">
            Home
          </div>
        </div>
        <div className="flex flex-row items-end justify-start gap-[14.3px]">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.7px]">
            <img
              className="w-[7.7px] h-[13.3px] relative object-contain shrink-0"
              alt=""
              src="/vector-56.svg"
            />
          </div>
          <div className="relative leading-[21px] font-medium inline-block min-w-[90px] shrink-0 mq450:text-base mq450:leading-[17px]">
            About us
          </div>
        </div>
        <div className="flex flex-row items-end justify-start gap-[14.3px]">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.7px]">
            <img
              className="w-[7.7px] h-[13.3px] relative object-contain shrink-0"
              alt=""
              src="/vector-56.svg"
            />
          </div>
          <div className="relative leading-[21px] font-medium inline-block min-w-[84px] shrink-0 mq450:text-base mq450:leading-[17px]">
            Services
          </div>
        </div>
        <div className="flex flex-row items-end justify-start gap-[14.3px]">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.7px]">
            <img
              className="w-[7.7px] h-[13.3px] relative object-contain shrink-0"
              alt=""
              src="/vector-56.svg"
            />
          </div>
          <div className="relative leading-[21px] font-medium shrink-0 mq450:text-base mq450:leading-[17px]">
            Terms of Services
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[14.3px]">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-[7.7px] h-[13.3px] relative object-contain shrink-0"
              alt=""
              src="/vector-56.svg"
            />
          </div>
          <div
            className="relative leading-[21px] font-medium shrink-0 mq450:text-base mq450:leading-[17px]"
            style={privacyPolicyStyle}
          >
            Privacy Policy
          </div>
        </div>
      </div>
      <div className="w-[318px] !m-[0] absolute top-[40px] left-[881.1px] flex flex-col items-start justify-start gap-[37px]">
        <b className="self-stretch relative leading-[21px] mq450:text-base mq450:leading-[17px]">
          Contact Us
        </b>
        <div className="flex flex-row items-start justify-start gap-[22px]">
          <img
            className="h-[21px] w-[22.2px] relative min-h-[21px] shrink-0"
            alt=""
            src="/group-1.svg"
          />
          <div className="relative leading-[21px] font-medium shrink-0 whitespace-nowrap mq450:text-base mq450:leading-[17px]">
            +91 8626096106
          </div>
        </div>
        <div className="flex flex-row items-end justify-start gap-[17px] text-lg">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
            <img
              className="w-[27px] h-5 relative shrink-0"
              loading="lazy"
              alt=""
              src="/group-83-1.svg"
            />
          </div>
          <div className="relative leading-[29px] font-medium shrink-0 whitespace-nowrap">
            Support@Sahajagrotech.com
          </div>
        </div>
        <div className="w-[290px] flex flex-row items-start justify-start gap-[23px] text-lg">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-[18px] h-[21px] relative"
              alt=""
              src="/vector-60.svg"
            />
          </div>
          <div className="flex-1 relative leading-[21px] font-medium">
            B6-002, Park Island, Shastri Nagar, Pune, Maharashtra, 411006
          </div>
        </div>
      </div>
      <div className="absolute !m-[0] top-[422px] left-[464px] text-base leading-[28.8px]">
        <span>Copyrights</span>
        <span className="text-black">©</span>
        <span> Sahaj Agrotech Private Limited</span>
      </div>
    </footer>
  );
};

export default Footer;
