"use client";
import { cn } from "@/lib/utils";
import { useLenis } from "@studio-freight/react-lenis";
import { easeInOut, motion } from "framer-motion";
import { Mouse } from "lucide-react";
import React from "react";
import { bebas } from ".";

interface Props {
  className?: string;
}

export const Main: React.FC<Props> = ({ className }) => {
  const lenis = useLenis();
  return (
    <div>
      <div
        className={cn(
          "h-[100vh] bg-[url('/main.png')] bg-cover bg-no-repeat bg-center relative",
          className
        )}
      >
        <div className="absolute z-0 h-full w-full bg-black opacity-70"></div>
        <div className="">
          <div className="text-[#B3B3B3] text-sm relative z-10 w-[1150px] flex justify-between ml-[380px] pt-[33px]">
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  ease: easeInOut,
                  duration: 0.2,
                }}
              >
                дедовские
              </motion.div>
              <br />
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  ease: easeInOut,
                  delay: 0.1,
                  duration: 0.2,
                }}
              >
                столярные
              </motion.div>
              <br />
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  ease: easeInOut,
                  delay: 0.2,
                  duration: 0.2,
                }}
              >
                мастерские
              </motion.div>
            </div>
            <div className="text-right flex flex-col">
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  ease: easeInOut,
                  duration: 0.2,
                }}
                className="transition-colors duration-300 hover:text-white"
              >
                +7-963-656-2164
              </motion.button>
              <br />
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  ease: easeInOut,
                  delay: 0.1,
                  duration: 0.2,
                }}
                className="transition-colors duration-300 hover:text-white"
              >
                zakaz@dsm.pro
              </motion.button>
            </div>
          </div>
        </div>
        <div className="text-white relative h-[85vh] w-full flex justify-center items-center">
          <div className="flex flex-col w-[686px] z-10">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: easeInOut,
                duration: 0.2,
              }}
            >
              <p className="mb-2 font-bold text-xs">
                01 \ <span className="font-normal">05</span>
              </p>
              <h1
                className={`${bebas.className} text-[84px] font-[600] uppercase leading-[94px]`}
              >
                производство мебели под ключ
              </h1>
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
              <button className="flex items-center group transition-all duration-500 hover:translate-x-[8px] mt-16">
                <div className="font-bold text-[#B3B3B3]">сделать запрос</div>
                <div className="ml-3 w-[40px] h-[1px] bg-[#F1F1F2] relative">
                  <div className="absolute top-[0px] left-[31px] rotate-[0deg] origin-right rounded-lg w-[9px] h-[1px] opacity-0 bg-[#F1F1F2] transition-all duration-300 group-hover:rotate-[30deg] group-hover:opacity-100" />
                  <div className="absolute top-[0px] left-[31px] rotate-[0deg] origin-right rounded-lg w-[9px] h-[1px] opacity-0 bg-[#F1F1F2] transition-all duration-300 group-hover:rotate-[-30deg] group-hover:opacity-100" />
                </div>
              </button>
            </motion.div>
          </div>
        </div>
        <div className="mb-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: easeInOut,
              duration: 0.2,
            }}
            className="text-[#B3B3B3] text-sm relative z-10 w-[1150px] flex justify-end items-end ml-[380px]"
          >
            <button
              className="transition-all duration-300 hover:text-white hover:text-[15px] flex items-center group"
              onClick={() => lenis?.scrollTo(50)}
            >
              cкролл вниз{" "}
              <Mouse className="pl-2 transition-all duration-300 group-hover:scale-110" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
