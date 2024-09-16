"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { ProjectsLast } from "./projects-last";
import { ProjectAndButton } from "./project-and-button";
import { motion } from "framer-motion";
import Image from 'next/image'

interface Props {
  className?: string;
}

export const MSection: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("bg-[#2C2C2C] h-[200vh] relative", className)}>
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 1.5, duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-[#8C8C8C] text-sm absolute top-[17%] left-[32%]"
      >
        #spiridonovka
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 1.7, duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-[#8C8C8C] text-sm absolute top-[30%] left-[77%]"
      >
        #viseKrisi
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 1, duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-[#8C8C8C] text-sm absolute top-[59.5%] left-[77%]"
      >
        #viseKrisi
      </motion.div>
      <Image
        className="absolute top-0 left-[33%] opacity-10"
        width={1084} height={1403}
        src="/m.svg"
        alt=""
      />
      <ProjectsLast />
      <ProjectAndButton />
    </div>
  );
};
