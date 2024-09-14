"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { easeInOut, motion } from "framer-motion";
import { Advantages } from "./advantages";
import { Projects } from "./projects";

interface Props {
  className?: string;
}

export const SSection: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("w-screen bg-[#2C2C2C] h-[200vh] relative", className)}>
      <div className="absolute top-[35%] left-[25%]">
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ ease: easeInOut, delay: 1.3 }}
          viewport={{ once: true, amount: 0.5 }}
          src="/aim.svg"
          alt=""
        />
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: easeInOut, delay: 1.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="pt-4 text-[10px] text-[#8C8C8C] w-[127px]"
        >
          80% клиентов становятся нашими постоянными клиентами
        </motion.p>
      </div>
      <div className="absolute top-[10%] left-[70%]">
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ ease: easeInOut, delay: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          src="/aim.svg"
          alt=""
        />
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: easeInOut, delay: 1.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="pt-4 text-[10px] text-[#8C8C8C] w-[127px]"
        >
          100% клиентов воспользовались преимуществами
        </motion.p>
      </div>
      <motion.div
        initial={{ y: 30, scale: 0, opacity: 0 }}
        whileInView={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ ease: easeInOut, delay: 1, duration: 0.7 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-[#8C8C8C] text-sm absolute top-[65%] left-[60%]"
      >
        #cafe#caption
      </motion.div>
      <motion.div
        initial={{ y: -30, scale: 0, opacity: 0 }}
        whileInView={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ ease: easeInOut, delay: 0.8, duration: 0.7 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-[#8C8C8C] text-sm absolute top-[93%] left-[13%]"
      >
        #cafe#caption
      </motion.div>
      <img
        className="absolute top-[18%] left-[10%] opacity-10"
        src="/S.svg"
        alt=""
      />
      <Advantages />
      <Projects />
    </div>
  );
};
