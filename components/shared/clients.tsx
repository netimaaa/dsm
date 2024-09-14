"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { easeInOut, motion } from "framer-motion";
import Image from 'next/image'
import { bebas } from ".";

interface Props {
  className?: string;
}

export const Clients: React.FC<Props> = ({ className }) => {
  return (
    <div id="clients" className={cn("h-screen w-screen", className)}>
      <div className="py-[80px] pl-[380px] w-[700px] relative z-10">
        <div className="mt-16">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              ease: easeInOut,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className={`${bebas.className} text-[64px] uppercase`}>
              клиенты
            </div>
            <div className="text-[#8C8C8C] py-[29px] w-[335px]">
              Основные наши клиенты - это крупные игроки из сектора HORECA, но
              мы с удовольствием работаем и с частными клиентами, и с компаниями
              из других областей.
            </div>
          </motion.div>
        </div>
        <div className="w-[1000px] grid grid-rows-2 gap-[92px] mt-[160px]">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: easeInOut, delay: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
            className="row-start-1 flex items-center justify-center gap-[180px]"
          >
            <Image
              className="transition-all duration-300 hover:scale-110"
              width={120}
              src="/1.svg"
              alt=""
            />
            <Image
              className="transition-all duration-300 hover:scale-110"
              width={120}
              src="/2.svg"
              alt=""
            />
            <Image
              className="transition-all duration-300 hover:scale-110"
              width={120}
              src="/3.svg"
              alt=""
            />
            <Image
              className="transition-all duration-300 hover:scale-110"
              width={120}
              src="/4.svg"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: easeInOut, delay: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="raw-start-2 flex items-center justify-center gap-[180px]"
          >
            <Image
              className="transition-all duration-300 hover:scale-110"
              width={120}
              src="/5.svg"
              alt=""
            />
            <Image
              className="transition-all duration-300 hover:scale-110"
              width={120}
              src="/6.svg"
              alt=""
            />
            <Image
              className="transition-all duration-300 hover:scale-110"
              width={120}
              src="/7.svg"
              alt=""
            />
            <Image
              className="pl-1 transition-all duration-300 hover:scale-110"
              width={120}
              src="/8.svg"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
