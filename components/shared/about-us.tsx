"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { AboutUsBlock } from "./about-us-block";
import { easeInOut, motion } from "framer-motion";
import { bebas } from ".";

interface Props {
  className?: string;
}

export const AboutUs: React.FC<Props> = ({ className }) => {
  return (
    <div id="about-us" className={cn("h-screen", className)}>
      <div className="py-[80px] pl-[380px] w-[700px] relative z-10">
        <div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              ease: easeInOut,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className={`${bebas.className} uppercase text-[64px]`}>
              кто мы
            </div>
            <div className="text-[#8C8C8C] py-[29px] w-[335px]">
              Мы производственная компания, которая своей основной задачей видит
              помощь нашим клиентам в реализации мебельных проектов любого
              уровня сложности
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              ease: easeInOut,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <button className="flex items-center group transition-all duration-500 hover:translate-x-[8px]">
              <div className="font-bold">подробнее</div>
              <div className="ml-3 w-[40px] h-[1px] bg-[#F1F1F2] relative">
                <div className="absolute top-[0px] left-[31px] rotate-[0deg] origin-right rounded-lg w-[9px] h-[1px] opacity-0 bg-[#F1F1F2] transition-all duration-300 group-hover:rotate-[30deg] group-hover:opacity-100" />
                <div className="absolute top-[0px] left-[31px] rotate-[0deg] origin-right rounded-lg w-[9px] h-[1px] opacity-0 bg-[#F1F1F2] transition-all duration-300 group-hover:rotate-[-30deg] group-hover:opacity-100" />
              </div>
            </button>
          </motion.div>
          <div className="w-[760px] grid grid-rows-2 gap-[139px] mt-[160px]">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: easeInOut, delay: 0.7 }}
              viewport={{ once: true, amount: 0.5 }}
              className="row-start-1 flex gap-[139px]"
            >
              <AboutUsBlock
                number={120}
                text={"проектов успешно реализовано под ключ"}
              />
              <AboutUsBlock
                number={500}
                text={"квадратных метров собственное производство"}
              />
              <AboutUsBlock
                number={80}
                text={"процентов клиентов возвращаются к нам снова"}
              />
            </motion.div>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: easeInOut, delay: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
              className="raw-start-2 flex gap-[139px]"
            >
              <AboutUsBlock
                number={15}
                text={"опытных профессионалов в нашей сплочёной команде"}
              />
              <AboutUsBlock
                number={10}
                text={"лет работы на мебельном рынке"}
              />
              <AboutUsBlock
                number={50}
                text={"материалов с которым мы работаем"}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
