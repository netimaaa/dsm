
import { cn } from "@/lib/utils";
import React from "react";
import { bebas } from ".";

interface Props {
  className?: string;
  number: number;
  text: string;
}

export const AboutUsBlock: React.FC<Props> = ({ className, number, text }) => {
  return (
    <div
      className={cn(
        "relative transition-all  duration-300 hover:scale-105 group",
        className,
        bebas.className
      )}
    >
      <div className="flex items-center w-[161px]">
        <div className="relative">
          <div className="absolute top-[3px] left-[0px] rotate-[45deg] origin-right rounded-lg w-[12px] h-[2px] bg-[#F1F1F2]" />
          <div className="absolute top-[3px] left-[0px] rotate-[-45deg] origin-right rounded-lg w-[12px] h-[2px] bg-[#F1F1F2]" />
        </div>
        <div className="text-[40px] pl-5 ">{number}</div>
      </div>
      <p className="text-[#8C8C8C]">{text}</p>
    </div>
  );
};
