"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";
import { bebas } from ".";

interface Props {
  className?: string;
}

export const ProjectAndButton: React.FC<Props> = ({ className }) => {
  return (
    <div id="projects" className={cn("h-screen", className)}>
      <div className="pb-[50px] pt-[100px] pl-[250px] w-[700px] relative z-10">
        <div>
          <div className="flex justify-between items-center w-[1300px] mt-32">
            <div className="flex flex-col justify-between h-[400px]">
              <div
                className={`${bebas.className} text-[250px] text-[#F1F1F2] opacity-10 leading-[220px] flex`}
              >
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    ease: "easeInOut",
                    delay: 0,
                    duration: 0.7,
                    type: "spring",
                    mass: 1.1,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  0
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    ease: "easeInOut",
                    delay: 0.2,
                    duration: 0.7,
                    type: "spring",
                    mass: 1.1,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  4
                </motion.div>
              </div>
              <button className="relative group delay-100 transition-all duration-300 hover:translate-x-4">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className=""
                >
                  <div className="absolute top-[30px] left-[0px] rotate-[-45deg] origin-right rounded-lg w-[15px] h-[2px] bg-[#F1F1F2]" />
                  <div className="absolute top-[30px] left-[0px] rotate-[45deg] origin-right rounded-lg w-[15px] h-[2px] bg-[#F1F1F2]" />
                </motion.div>
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className={`${bebas.className} text-[40px] pl-8`}
                >
                  BEER HARBOR
                </motion.div>
              </button>
            </div>
            <motion.img
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.6, duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className="w-[760px] h-[500px]"
              src="/proj-24.png"
              alt=""
            />
          </div>
        </div>
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", delay: 0.8, duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-[900px] py-[20px] mt-24 ml-[250px] border border-[#F1F1F2]/10 flex justify-center items-center text-bold text-sm transition-colors duration-300 hover:bg-white/10"
        >
          перейти ко всем проектам
        </motion.button>
      </div>
    </div>
  );
};
