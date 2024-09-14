"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { easeInOut, motion } from "framer-motion";
import { AdvantagesBlock } from "./advantages-block";
import { bebas } from ".";

interface Props {
  className?: string;
}

export const Advantages: React.FC<Props> = ({ className }) => {
  return (
    <div id="adv" className={cn("h-screen w-screen", className)}>
      <div className="py-[80px] pl-[250px] w-[700px] relative z-10">
        <div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              ease: easeInOut,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="pt-[100px]"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                ease: easeInOut,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className={`${bebas.className} uppercase text-[64px]`}
            >
              ПРЕИМУЩЕСТВА
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                ease: easeInOut,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-[#8C8C8C] py-[29px] pt-6 w-[335px]"
            >
              Наши основные плюсы это наша команда и наши довольные клиенты,
              которые ценят нас за наш комплексный подход.
            </motion.div>
          </motion.div>
          <div className="w-[760px] ml-[600px] grid grid-cols-2 gap-[95px] mt-[80px]">
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: easeInOut, delay: 0.7 }}
              viewport={{ once: true, amount: 0.5 }}
              className="col-start-1"
            >
              <AdvantagesBlock
                number={"01"}
                text={"Комплексная разработка проекта от идеи до монтажа"}
              />
              <AdvantagesBlock
                className="py-[73px]"
                number={"03"}
                text={"Современное оборудование и провереные поставщики"}
              />
              <AdvantagesBlock
                number={"05"}
                text={"Широкий спектр используемых в работе материалов"}
              />
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: easeInOut, delay: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
              className="col-start-2"
            >
              <AdvantagesBlock
                number={"02"}
                text={"Опыт и понимание специфики производства"}
              />
              <AdvantagesBlock
                className="py-[73px]"
                number={"04"}
                text={"Гарантия качества и соблюдение сроков"}
              />
              <AdvantagesBlock
                number={"06"}
                text={"Проекты любого уровня сложности и объёма"}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
