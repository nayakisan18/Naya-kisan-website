import { FunctionComponent } from "react";
import { Button, TextField } from "@mui/material";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";

// Import images from the assets folder
import headerImage from "../assets/header.svg";
import groupImage from "../assets/group.svg";
import group83Image from "../assets/group-83.svg";
import vector1Image from "../assets/vector-1.svg";
import vector2 from "../assets/vector-2.svg";
import vector8 from "../assets/vector-8.svg";
import vector11 from "../assets/vector-11.svg";

const ContactUs: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-seagreen-200 overflow-hidden flex flex-col items-end justify-start pt-[50px] px-0 pb-0 box-border gap-9 leading-[normal] tracking-[normal] text-left text-xl text-khaki-100 font-poppins mq700:gap-[18px]">
      <FrameComponent />
      <div className="w-[409px] absolute !m-[0] top-[300px] left-[58px] leading-[23px] font-semibold flex items-center z-[1] mq450:text-base mq450:leading-[18px]">
        We’re here to help! Whether you have a question, need support, or just
        want to learn more about our services, feel free to reach out to us. Our
        team is dedicated to providing prompt and friendly assistance.
      </div>
      <main className="self-stretch flex flex-col items-start justify-start gap-1 max-w-full">
        <section className="w-[1225px] flex flex-row items-start justify-start py-0 px-4 box-border max-w-full text-left text-31xl text-khaki-100 font-poppins">
          <div className="flex-1 flex flex-row items-start justify-start [row-gap:20px] max-w-full mq975:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[94px] min-w-[431px] max-w-full mq700:gap-[47px] mq700:min-w-full mq450:gap-[23px]">
              <div className="w-[378px] flex flex-row items-start justify-start py-0 px-[42px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                <h1 className="m-0 flex-1 relative text-inherit leading-[60px] font-bold font-[inherit] mq450:text-11xl mq450:leading-[36px] mq975:text-21xl mq975:leading-[48px]">
                  Contact Us
                </h1>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-[108px] px-[83px] pb-[211px] relative gap-[30px] text-xl mq700:pt-[70px] mq700:pb-[137px] mq700:box-border mq450:gap-[15px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="flex flex-row items-start justify-start py-0 px-[3px]">
                  <div className="relative leading-[21px] font-medium whitespace-nowrap z-[1] mq450:text-base mq450:leading-[17px]">
                    +91 8626096106
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[25px] text-lg">
                  <div className="flex flex-row items-start justify-start py-0 pl-[3px] pr-0">
                    <div className="relative leading-[29px] font-medium whitespace-nowrap z-[1]">
                      Support@Sahajagrotech.com
                    </div>
                  </div>
                  <div className="w-[249px] relative leading-[21px] font-medium flex items-center z-[1]">
                    B6-002, Park Island, Shastri Nagar, Pune, Maharashtra,
                    411006
                  </div>
                </div>
                <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt="header"
                    src={headerImage}
                  />
                  <img
                    className="absolute top-[108px] left-[42px] w-[22.2px] h-[21px] z-[1]"
                    loading="lazy"
                    alt="group"
                    src={groupImage}
                  />
                  <img
                    className="absolute top-[164px] left-[42px] w-[27px] h-5 z-[1]"
                    loading="lazy"
                    alt="group 83"
                    src={group83Image}
                  />
                  <img
                    className="absolute top-[214px] left-[42px] w-[18px] h-[21px] z-[1]"
                    alt="vector"
                    src={vector1Image}
                  />
                </div>
              </div>
            </div>
            <div className="rounded-3xs [background:linear-gradient(150.59deg,_rgba(242,_221,_130,_0.93)_32.8%,_#96c776_82.3%)] flex flex-col items-start justify-start pt-10 px-[30px] pb-[21px] box-border gap-[17px] min-w-[530px] max-w-full text-21xl text-seagreen-200 mq700:pt-[26px] mq700:pb-5 mq700:box-border mq700:min-w-full mq975:flex-1">
              <div className="w-[530px] h-[601px] relative rounded-3xs [background:linear-gradient(150.59deg,_rgba(242,_221,_130,_0.93)_32.8%,_#96c776_82.3%)] hidden max-w-full" />
              <h1 className="m-0 w-[242px] relative text-inherit leading-[60px] font-semibold font-[inherit] flex items-center z-[1] mq450:text-[24px] mq450:leading-[36px] mq975:text-[32px] mq975:leading-[48px]">
                Contact Us
              </h1>
              <form className="m-0 w-[460px] flex flex-col items-start justify-start gap-5 max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[60px] mq450:flex-wrap mq450:gap-[30px]">
                  <TextField
                    className="h-[50px] flex-1 min-w-[130px] z-[1]"
                    placeholder="First Name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { border: "none" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#21673c",
                        borderRadius: "20px",
                      },
                      "& .MuiInputBase-input": {
                        color: "rgba(242, 221, 130, 0.6)",
                      },
                    }}
                  />
                  <TextField
                    className="[border:none] h-[50px] flex-1 min-w-[130px] z-[1]"
                    placeholder="Last Name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { border: "none" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#21673c",
                        borderRadius: "20px",
                      },
                      "& .MuiInputBase-input": {
                        color: "rgba(242, 221, 130, 0.6)",
                      },
                    }}
                  />
                </div>
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[50px] font-poppins font-medium text-base text-khaki-400 z-[1]"
                  placeholder="Business Email"
                  variant="outlined"
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#21673c",
                      borderRadius: "20px",
                    },
                    "& .MuiInputBase-input": {
                      color: "rgba(242, 221, 130, 0.6)",
                    },
                  }}
                />
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[50px] font-poppins font-medium text-base text-khaki-400 z-[1]"
                  placeholder="Company Name"
                  variant="outlined"
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#21673c",
                      borderRadius: "20px",
                    },
                    "& .MuiInputBase-input": {
                      color: "rgba(242, 221, 130, 0.6)",
                    },
                  }}
                />
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[50px] font-poppins font-medium text-base text-khaki-400 z-[1]"
                  placeholder="Phone Number"
                  variant="outlined"
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#21673c",
                      borderRadius: "20px",
                    },
                    "& .MuiInputBase-input": {
                      color: "rgba(242, 221, 130, 0.6)",
                    },
                  }}
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch font-poppins font-medium text-base text-khaki-400 z-[1]"
                    placeholder="How Can We Help"
                    variant="outlined"
                    multiline // Enables multiline input
                    rows={4} // Sets the number of visible rows
                    sx={{
                      "& fieldset": { border: "none" },
                      "& .MuiInputBase-root": {
                        backgroundColor: "#21673c",
                        borderRadius: "20px",
                      },
                      "& .MuiInputBase-input": {
                        color: "rgba(242, 221, 130, 0.6)",
                        whiteSpace: "pre-wrap", // Ensures that the text wraps correctly
                      },
                    }}
                  />
                  <Button
                    className="w-[168px] h-[50px] z-[1]"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#f2dd82",
                      fontSize: "20",
                      background: "#1f673c",
                      border: "#f6be4a solid 3px",
                      borderRadius: "10px",
                      "&:hover": { background: "#1f673c" },
                      width: 174,
                      height: 56,
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <Footer
          vector={vector2}
          socialIcon3={vector8}
          socialIcon6={vector11}
          propTextDecoration="none"
        />
      </main>
    </div>
  );
};

export default ContactUs;
