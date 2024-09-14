import { cn } from "@/lib/utils";
import React from "react";
import { bebas } from ".";

interface Props {
  className?: string;
  number: string;
  text: string;
}

export const AdvantagesBlock: React.FC<Props> = ({
  className,
  number,
  text,
}) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300 hover:translate-x-4",
        className,
        bebas.className
      )}
    >
      <div className="flex items-center w-[190px]">
        <div className="text-[40px]">{number}</div>
      </div>
      <p className="text-[#8C8C8C] w-[190px]">{text}</p>
    </div>
  );
};
