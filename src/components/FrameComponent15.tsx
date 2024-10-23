import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import groupImg from "../assets/group.png"; // Updated image import

export type FrameComponent15Type = {
  className?: string;
};

const FrameComponent15: FunctionComponent<FrameComponent15Type> = ({
  className = "",
}) => {
  return (
    <Button
      href="#join-section" // Anchor link to the join section
      className={`w-52 h-[50px] z-[1] ${className}`}
      endIcon={
        <img width="30px" height="30px" alt="Chat Icon" src={groupImg} />
      } // Updated image source
      disableElevation
      variant="outlined"
      sx={{
        textTransform: "none",
        color: "#f2dd82",
        fontSize: "20",
        borderColor: "#f2dd82",
        borderRadius: "40px",
        "&:hover": { borderColor: "#f2dd82" },
        width: 208,
        height: 50,
      }}
    >
      Chat With Bot
    </Button>
  );
};

export default FrameComponent15;
