import { cn } from "@/lib/utils";
import { easeInOut, motion } from "framer-motion";
import React from "react";
import { bebas } from ".";

interface Props {
  className?: string;
}

export const ContactUs: React.FC<Props> = ({ className }) => {
  return (
    <div
      id="contact"
      className={cn("w-screen h-screen bg-[#2C2C2C]", className)}
    >
      <div className="py-[80px] pl-[250px] w-[700px] relative z-10">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: 0.5 }}
          className={`${bebas.className} uppercase text-[64px]`}
        >
          СВЯЗЬ С НАМИ
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-[#8C8C8C] py-[29px] pt-6 w-[400px]"
        >
          Если вы хотите прислать проект на оценку или просто у Вас возникли
          вопросы, то воспользуйтесь формой ниже и мы как можно быстрее вам
          ответим.
        </motion.div>
      </div>
      <div className="py-[20px] pl-[250px] w-[1700px] relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, ease: easeInOut }}
          viewport={{ once: true }}
        >
          <input
            placeholder="Имя*"
            className="bg-transparent outline-none border-b w-[40%] border-[#8C8C8C]/25 pb-2"
            type="text"
          />
          <input
            placeholder="Email*"
            className="bg-transparent outline-none border-b w-[40%] border-[#8C8C8C]/25 pb-2 ml-32"
            type="text"
          />
          <input
            placeholder="Компания*"
            className="bg-transparent outline-none border-b w-[40%] border-[#8C8C8C]/25 pb-2 mt-9"
            type="text"
          />
          <input
            placeholder="Телефон*"
            className="bg-transparent outline-none border-b w-[40%] border-[#8C8C8C]/25 pb-2 ml-32 mt-9"
            type="text"
          />
          <textarea
            placeholder="Введите текст сообщения*"
            className="bg-transparent outline-none border pl-6 pt-6 pb-[156px] w-[89%] border-[#8C8C8C]/25 mt-9 resize-none"
          />
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
            <div className="font-bold text-[#B3B3B3]">отправить</div>
            <div className="ml-3 w-[40px] h-[1px] bg-[#F1F1F2] relative">
              <div className="absolute top-[0px] left-[31px] rotate-[0deg] origin-right rounded-lg w-[9px] h-[1px] opacity-0 bg-[#F1F1F2] transition-all duration-300 group-hover:rotate-[30deg] group-hover:opacity-100" />
              <div className="absolute top-[0px] left-[31px] rotate-[0deg] origin-right rounded-lg w-[9px] h-[1px] opacity-0 bg-[#F1F1F2] transition-all duration-300 group-hover:rotate-[-30deg] group-hover:opacity-100" />
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  );
};
