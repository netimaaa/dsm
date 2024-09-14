"use client";
import { ReactNode } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

interface SmoothScrollingProps {
  children: ReactNode;
}

export const SmoothScrolling: React.FC<SmoothScrollingProps> = ({
  children,
}) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
};
