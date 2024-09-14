"use client";
import React, { useEffect, useState } from "react";
import { Main } from "./main";
import { DSection } from "./d-section";
import { useLenis } from "@studio-freight/react-lenis";
import { SSection } from "./s-section";
import { MSection } from "./m-section";
import { Schema } from "./schema";
import { ContactUs } from "./contact-us";
import { Footer } from "./footer";

interface Props {
  className?: string;
}

export const SmoothScrollSection: React.FC<Props> = ({ className }) => {
  const lenis = useLenis();
  /* eslint-disable */ 
  const [scrollProgress, setScrollProgress] = useState(0);
  /* eslint-disable */ 
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (lenis) {
        const scrollY = lenis.scroll;
        const scrollHeight = lenis.limit;
        const progress = (scrollY / scrollHeight) * 100;
        setScrollProgress(progress);

        const isScrollingDown = scrollY > prevScrollY;
        setPrevScrollY(scrollY);

        if (!isAutoScrolling) {
          if (progress >= 0.1 && progress < 10 && isScrollingDown) {
            setIsAutoScrolling(true);
            lenis.scrollTo(scrollHeight * 0.112, { duration: 1.3 });
            setTimeout(() => {
              setIsAutoScrolling(false);
            }, 100);
          }

          if (progress >= 11.5 && progress < 22 && isScrollingDown) {
            setIsAutoScrolling(true);
            lenis.scrollTo(scrollHeight * 0.22, { duration: 1.3 });
            setTimeout(() => {
              setIsAutoScrolling(false);
            }, 100);
          }

          if (progress >= 23.5 && progress < 34 && isScrollingDown) {
            setIsAutoScrolling(true);
            lenis.scrollTo(scrollHeight * 0.336, { duration: 1.3 }); //pr
            setTimeout(() => {
              setIsAutoScrolling(false);
            }, 100);
          }

          if (progress >= 36 && progress < 46 && isScrollingDown) {
            setIsAutoScrolling(true);
            lenis.scrollTo(scrollHeight * 0.448, { duration: 1.3 });
            setTimeout(() => {
              setIsAutoScrolling(false);
            }, 100);
          }

          if (progress >= 47 && progress < 57 && isScrollingDown) {
            setIsAutoScrolling(true);
            lenis.scrollTo(scrollHeight * 0.558, { duration: 1.3 });
            setTimeout(() => {
              setIsAutoScrolling(false);
            }, 100);
          }

          if (progress >= 58 && progress < 68 && isScrollingDown) {
            setIsAutoScrolling(true);
            lenis.scrollTo(scrollHeight * 0.668, { duration: 1.3 });
            setTimeout(() => {
              setIsAutoScrolling(false);
            }, 100);
          }

          if (progress >= 69 && progress < 79 && isScrollingDown) {
            setIsAutoScrolling(true);
            lenis.scrollTo(scrollHeight * 0.78, { duration: 1.3 });
            setTimeout(() => {
              setIsAutoScrolling(false);
            }, 100);
          }

          if (progress >= 80 && progress < 90 && isScrollingDown) {
            setIsAutoScrolling(true);
            lenis.scrollTo(scrollHeight * 0.892, { duration: 1.3 });
            setTimeout(() => {
              setIsAutoScrolling(false);
            }, 100);
          }

          if (progress >= 91 && progress < 100 && isScrollingDown) {
            setIsAutoScrolling(true);
            lenis.scrollTo(scrollHeight, { duration: 1.3 });
            setTimeout(() => {
              setIsAutoScrolling(false);
            }, 100);
          }
        }
      }
    };

    lenis?.on("scroll", handleScroll);

    return () => {
      lenis?.off("scroll", handleScroll);
    };
  }, [lenis, isAutoScrolling, prevScrollY]);

  return (
    <div className={className}>
      <Main />
      <DSection />
      <SSection />
      <MSection />
      <Schema />
      <ContactUs />
      <Footer />
    </div>
  );
};
