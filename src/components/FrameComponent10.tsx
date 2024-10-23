import { FunctionComponent } from "react";

import vector410Img from "../assets/vector-410.svg";
import iconWhatsappImg from "../assets/-icon-whatsapp.svg";
import vector57Img from "../assets/vector-57.svg";
import vector61Img from "../assets/vector-61.svg";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: FunctionComponent<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-row items-start justify-center gap-[30px] mq450:flex-wrap ${className}`}
    >
      {/* Facebook Icon */}
      <a
        href="https://www.facebook.com/people/Naya-Kisan/61553342548494/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="h-[50px] w-[50px] relative min-h-[50px]"
          alt="Facebook Icon"
          src={vector410Img}
        />
      </a>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/8380074040"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="h-[50px] w-[49.8px] relative min-h-[50px]"
          loading="lazy"
          alt="WhatsApp Icon"
          src={iconWhatsappImg}
        />
      </a>

      {/* Instagram Icon */}
      <a
        href="https://www.instagram.com/farmwithnayakisan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="h-[50px] w-[50px] relative min-h-[50px]"
          alt="Instagram Icon"
          src={vector57Img}
        />
      </a>

      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/company/naya-kisan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="h-[50px] w-[50px] relative min-h-[50px]"
          alt="LinkedIn Icon"
          src={vector61Img}
        />
      </a>
    </div>
  );
};

export default FrameComponent10;
