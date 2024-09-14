import { cn } from "@/lib/utils";
import { easeInOut, motion } from "framer-motion";
import React from "react";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div
      id="scheme"
      className={cn(
        "w-screen h-screen bg-[#2C2C2C] flex items-center justify-center",
        className
      )}
    >
      <div className="w-[1160px] mt-[200px]">
        <motion.img
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: easeInOut, delay: 0.5 }}
          viewport={{ once: true }}
          src="/dsm.svg"
          alt=""
        />
        <div className="flex justify-between my-[78px] text-sm font-bold text-[#F1F1F2]">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, ease: easeInOut }}
            viewport={{ once: true }}
          >
            дедовские столярные мастерские 2020
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, ease: easeInOut }}
            viewport={{ once: true }}
          >
            все права защищены
          </motion.div>
        </div>
      </div>
    </div>
  );
};
