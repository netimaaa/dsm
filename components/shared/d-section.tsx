"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { AboutUs } from "./about-us";
import { easeInOut, easeOut, motion } from "framer-motion";
import { Clients } from "./clients";
import Image from 'next/image'

interface Props {
  className?: string;
}

export const DSection: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("bg-[#2C2C2C] h-[200vh] relative", className)}>
      <motion.div
        initial={{ y: -10, x: -5, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.4,
          delay: 1,
          ease: easeInOut,
        }}
        className="text-[10px] text-[#8C8C8C] absolute top-[15%] left-[70%] w-[127px]"
      >
        80% клиентов становятся нашими постоянными клиентами
      </motion.div>
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.4,
          delay: 1.4,
          ease: easeInOut,
        }}
        style={{ transformOrigin: "top" }}
        className="bg-[#8C8C8C] absolute top-[16.65%] left-[73%] w-[1px] h-[30px]"
      />
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{
          amount: 0.5,
          once: true,
        }}
        transition={{
          delay: 1.6,
          duration: 0.4,
          ease: easeOut,
        }}
        className="bg-[#8C8C8C] absolute top-[18%] left-[72.6%] w-[15px] h-[1px]"
      />
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{
          amount: 0.5,
          once: true,
        }}
        transition={{
          delay: 1.4,
          duration: 0.4,
          ease: easeOut,
        }}
        style={{ transformOrigin: "right" }}
        className="bg-[#8C8C8C] absolute top-[70%] left-[66.6%] w-[18px] h-[1px]"
      />
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{
          amount: 0.5,
          once: true,
        }}
        transition={{
          delay: 1.6,
          duration: 0.4,
          ease: easeOut,
        }}
        className="bg-[#8C8C8C] absolute top-[69.75%] left-[66.6%] w-[1px] h-[11px]"
      />
      <motion.div
        initial={{ y: -10, x: -5, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.4,
          delay: 1,
          ease: easeInOut,
        }}
        className="text-[10px] text-[#8C8C8C] absolute top-[69.6%] left-[68%] w-[127px]"
      >
        крупные клиенты
      </motion.div>
      <Image width={661} height={1402} className="absolute top-[18%] left-[55%]" src="/D.svg" alt="" />
      <AboutUs />
      <Clients />
    </div>
  );
};
