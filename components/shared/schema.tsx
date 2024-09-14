import { bebas } from "@/app/layout";
import { cn } from "@/lib/utils";
import { easeInOut, motion } from "framer-motion";
import React from "react";

interface Props {
  className?: string;
}

export const Schema: React.FC<Props> = ({ className }) => {
  return (
    <div
      id="scheme"
      className={cn("w-screen h-screen bg-[#2C2C2C]", className)}
    >
      <div className="pb-[80px] pt-[140px] pl-[250px] w-[700px] relative z-10">
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
          СХЕМА РАБОТЫ
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-[#8C8C8C] py-[29px] pt-6 w-[420px]"
        >
          За время работы мы выработали подходы, которые позволяют нам экономить
          время производства без ущерба для качества. Но каждый проект - это
          новая задача, поэтому мы сохраняем гибкость, чтобы решать новые задачи
          максимально эффективно.
        </motion.div>
      </div>
      <div className="mt-[100px] ml-[250px] w-[1400px] relative z-10">
        <div className="grid w-full grid-cols-15 grid-rows-2 gap-y-[80px]">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: easeInOut, duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className={`${bebas.className} w-[80px] text-[40px]`}>01</h2>
            <p className="text-sm text-[#8C8C8C] w-[70px]">Входящая заявка</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: easeInOut, duration: 0.4, delay: 1.1 }}
            viewport={{ once: true }}
            className="col-start-2 row-start-2"
          >
            <h2 className={`${bebas.className} text-[40px]`}>02</h2>
            <p className="text-sm text-[#8C8C8C] w-[70px]">
              Коммерческое предложение
            </p>
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: easeInOut, duration: 0.4, delay: 1.4 }}
            viewport={{ once: true }}
            className="col-start-3 row-start-1"
          >
            <div>
              <h2 className={`${bebas.className} text-[40px]`}>03</h2>
              <p className="text-sm text-[#8C8C8C] w-[70px]">
                Заключение договора
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: easeInOut, duration: 0.4, delay: 1.7 }}
            viewport={{ once: true }}
            className="col-start-4 row-start-2"
          >
            <div>
              <h2 className={`${bebas.className} text-[40px]`}>04</h2>
              <p className="text-sm text-[#8C8C8C] w-[70px]">
                Разработка проекта
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: easeInOut, duration: 0.4, delay: 1.9 }}
            viewport={{ once: true }}
            className="col-start-5 row-start-1"
          >
            <div>
              <h2 className={`${bebas.className} text-[40px]`}>05</h2>
              <p className="text-sm text-[#8C8C8C] w-[70px]">
                Утверждение проекта
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: easeInOut, duration: 0.4, delay: 2.1 }}
            viewport={{ once: true }}
            className="col-start-6 row-start-2"
          >
            <div>
              <h2 className={`${bebas.className} text-[40px]`}>06</h2>
              <p className="text-sm text-[#8C8C8C] w-[70px]">
                Производство и монтаж
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: easeInOut, duration: 0.4, delay: 2.3 }}
            viewport={{ once: true }}
            className="col-start-8 row-start-1"
          >
            <div>
              <h2 className={`${bebas.className} text-[40px]`}>07</h2>
              <p className="text-sm text-[#8C8C8C] w-[70px]">Приёмка работ</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 2, delay: 0.5 }}
          style={{ transformOrigin: "left" }}
          className="absolute top-[50%] w-[1295px] h-[1px] bg-[#8C8C8C] opacity-25"
        />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.3, delay: 0.9 }}
          className="absolute top-[53%] left-[5.5%] w-[50px] h-[14px] text-[10px] text-[#8C8C8C]"
        >
          1-5 р/д
        </motion.div>
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.2, delay: 0.5 }}
          className="absolute top-[48.1%] w-[1px] h-[11px] bg-[#8C8C8C] opacity-25"
        />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.3, delay: 1.1 }}
          className="absolute top-[53%] left-[19%] w-[50px] h-[14px] text-[10px] text-[#8C8C8C]"
        >
          3-5 р/д
        </motion.div>
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.2, delay: 0.9 }}
          className="absolute top-[48.1%] left-[14%] w-[1px] h-[11px] bg-[#8C8C8C] opacity-25"
        />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.3, delay: 1.3 }}
          className="absolute top-[53%] left-[32%] w-[50px] h-[14px] text-[10px] text-[#8C8C8C]"
        >
          10 р/д
        </motion.div>
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.2, delay: 1.3 }}
          className="absolute top-[48.1%] left-[27%] w-[1px] h-[11px] bg-[#8C8C8C] opacity-25"
        />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.3, delay: 1.5 }}
          className="absolute top-[53%] left-[45%] w-[50px] h-[14px] text-[10px] text-[#8C8C8C]"
        >
          20 р/д
        </motion.div>
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.2, delay: 1.5 }}
          className="absolute top-[48.1%] left-[40%] w-[1px] h-[11px] bg-[#8C8C8C] opacity-25"
        />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.3, delay: 1.7 }}
          className="absolute top-[53%] left-[58.5%] w-[50px] h-[14px] text-[10px] text-[#8C8C8C]"
        >
          5 р/д
        </motion.div>
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.2, delay: 1.6 }}
          className="absolute top-[48.1%] left-[53%] w-[1px] h-[11px] bg-[#8C8C8C] opacity-25"
        />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.3, delay: 2 }}
          className="absolute top-[53%] left-[75%] w-[50px] h-[14px] text-[10px] text-[#8C8C8C]"
        >
          40 р/д
        </motion.div>
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.2, delay: 1.7 }}
          className="absolute top-[48.1%] left-[66%] w-[1px] h-[11px] bg-[#8C8C8C] opacity-25"
        />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.3, delay: 2.2 }}
          className="absolute top-[53%] left-[88.8%] w-[50px] h-[14px] text-[10px] text-[#8C8C8C]"
        >
          5 р/д
        </motion.div>
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.2, delay: 2 }}
          className="absolute top-[48.1%] left-[87%] w-[1px] h-[11px] bg-[#8C8C8C] opacity-25"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.2, delay: 2.1 }}
          className="absolute top-[48.1%] left-[92.5%] w-[1px] h-[11px] bg-[#8C8C8C] opacity-25"
        />
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.6, delay: 2.5 }}
          className="absolute top-[93%] left-[88%] w-[80px] h-[14px] text-[10px] text-[#8C8C8C]"
        >
          Итого 80 р/д
        </motion.div>
      </div>
    </div>
  );
};
