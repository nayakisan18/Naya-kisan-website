import { FunctionComponent } from "react";
import NavBar from "./NavBar";

export type MainType = {
  className?: string;
};

const Main: FunctionComponent<MainType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-start py-0 px-[57px] box-border max-w-full text-left text-xl text-white font-inter lg:pl-7 lg:pr-7 lg:box-border ${className}`}
    >
      <div className="w-[1110px] flex flex-row items-start justify-between gap-5 max-w-full">
        <img
          className="h-[120px] w-[123.8px] relative object-cover"
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
        <div className="w-[556px] flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border max-w-full mq750:w-0">
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Main;
