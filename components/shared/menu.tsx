"use client";
import { cn } from "@/lib/utils";
import {
  useActiveTransitionStore,
  useTransitionStore,
} from "@/store/store-trans";
import { useRouter } from "next/navigation";
import React from "react";
import { bebas } from ".";

interface Props {
  className?: string;
}

export const Menu: React.FC<Props> = ({ className }) => {
  const { active, setActive, controls } = useTransitionStore();
  const router = useRouter();
  const { stateReceived, setStateReceived } = useActiveTransitionStore();

  const ref = React.useRef(null);

  React.useEffect(() => {
    setActive(true);
  }, [ref]);

  const handleMainClick = async (path: string) => {
    setActive(false);

    await controls?.start({
      scaleY: 1,
      transition: { duration: 0.25 },
      transformOrigin: active ? "top" : "bottom",
    });
    setTimeout(() => {
      setStateReceived(true);
    }, 500);

    setStateReceived(false);

    router.push(path);
  };
  React.useEffect(() => {
    if (stateReceived) {
      controls?.start({
        scaleY: 0,
        transition: { duration: 0.25 },
        transformOrigin: active ? "top" : "bottom",
      });
    }
  }, [stateReceived, controls]);
  return (
    <div
      ref={ref}
      className={cn(
        "h-screen w-screen bg-[#2C2C2C] text-white font-bold text-[64px] uppercase flex flex-col",
        bebas.className,
        className
      )}
    >
      <div className="my-auto ml-[20%] z-10 w-[1000px]">
        <div className="w-[200px] transition-all duration-300 hover:translate-x-4">
          <button
            onClick={() => handleMainClick("/")}
            className="uppercase transition-colors duration-300 hover:text-yellow-600"
          >
            Главная
          </button>
        </div>
        <div className="w-[200px] transition-all duration-300 hover:translate-x-4">
          <button
            onClick={() => handleMainClick("/#about-us")}
            className="uppercase transition-colors duration-300 hover:text-yellow-600"
          >
            о нас
          </button>
        </div>
        <div className="w-[200px] transition-all duration-300 hover:translate-x-4">
          <button
            onClick={() => handleMainClick("/#projects")}
            className="uppercase transition-colors duration-300 hover:text-yellow-600"
          >
            проект
          </button>
        </div>
        <div className="w-[200px] transition-all duration-300 hover:translate-x-4">
          <button
            onClick={() => handleMainClick("/#scheme")}
            className="uppercase transition-colors duration-300 hover:text-yellow-600"
          >
            производство
          </button>
        </div>
        <div className="w-[200px] transition-all duration-300 hover:translate-x-4">
          <button
            onClick={() => handleMainClick("/#contact")}
            className="uppercase transition-colors duration-300 hover:text-yellow-600"
          >
            контакты
          </button>
        </div>
      </div>
    </div>
  );
};
