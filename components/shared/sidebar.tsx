"use client";
import { cn } from "@/lib/utils";
import { easeInOut, motion, MotionConfig, useAnimation } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import {
  useActiveTransitionStore,
  useTransitionStore,
} from "@/store/store-trans";
import Image from 'next/image'

interface Props {
  className?: string;
}

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

export const Sidebar: React.FC<Props> = ({ className }) => {
  const { active, setActive, setControls } = useTransitionStore();
  const router = useRouter();
  const controls = useAnimation();
  const { stateReceived, setStateReceived } = useActiveTransitionStore();

  React.useEffect(() => {
    setControls(controls);
  }, [controls, setControls]);

  const handleClick = async () => {
    setActive(!active);

    await controls.start({
      scaleY: 1,
      transition: { duration: 0.25 },
      transformOrigin: active ? "top" : "bottom",
    });

    setTimeout(() => {
      setStateReceived(true);
    }, 500);

    setStateReceived(false);

    if (!active) {
      router.push("/menu");
    } else {
      router.back();
    }
  };

  React.useEffect(() => {
    if (stateReceived) {
      controls.start({
        scaleY: 0,
        transition: { duration: 0.25 },
        transformOrigin: active ? "top" : "bottom",
      });
    }
  }, [stateReceived, controls]);

  return (
    <div>
      <motion.div
        animate={controls}
        initial={{ scaleY: 0 }}
        style={{ transformOrigin: active ? "bottom" : "top" }}
        transition={{ ease: [0.22, 1, 0.36, 1] }}
        className="h-screen w-screen fixed z-20 bg-[#252525]"
      />
      <div
        className={cn(
          "w-screen h-screen flex justify-between p-10 relative z-10",
          className
        )}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: easeInOut }}
          className="flex flex-col justify-between h-full top-0 left-0 relative"
        >
          <div>
            <Image src="/logo.svg" alt="" />
          </div>
          <div className="mb-4">
            <Image src="/logo-b.svg" alt="" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: easeInOut }}
          className="flex flex-col justify-between h-full relative"
        >
          <div>
            <MotionConfig
              transition={{
                duration: 0.25,
                ease: "easeInOut",
              }}
            >
              <motion.button
                initial={false}
                animate={active ? "open" : "closed"}
                onClick={handleClick}
                className="relative h-20 w-20 rounded-full bg-white/0"
              >
                <motion.span
                  variants={VARIANTS.top}
                  className="absolute h-[2px] w-10 bg-white"
                  style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                />

                <motion.span
                  variants={VARIANTS.middle}
                  className="absolute h-[2px] w-10 bg-white"
                  style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                />

                <motion.span
                  variants={VARIANTS.bottom}
                  className="absolute h-[2px] w-5 bg-white"
                  style={{
                    x: "-50%",
                    y: "50%",
                    bottom: "35%",
                    left: "calc(50% + 10px)",
                  }}
                />
              </motion.button>
            </MotionConfig>
          </div>
          <div className="flex flex-col items-center mt-auto text-[#B3B3B3]">
            <Link
              href={"#"}
              className="text-sm transition-colors hover:text-white"
            >
              in
            </Link>
            <Link
              href={"#"}
              className="text-sm py-[37px] transition-colors hover:text-white"
            >
              vk
            </Link>
            <Link
              href={"#"}
              className="text-sm transition-colors hover:text-white"
            >
              tg
            </Link>
          </div>
          <button className="mt-auto">
            <Image
              className="transition-all duration-300 hover:scale-105 "
              src="/phone.svg"
              alt=""
            />
          </button>
        </motion.div>
      </div>
    </div>
  );
};
