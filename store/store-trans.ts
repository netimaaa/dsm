import { AnimationControls } from "framer-motion";
import { create } from "zustand";

interface TransitionStore {
    active: boolean;
    setActive: (active: boolean) => void;
    controls: AnimationControls | null;
    setControls: (controls: AnimationControls) => void;
  }
  
export const useTransitionStore = create<TransitionStore>((set) => ({
  active: false,
  setActive: (active) => set({ active }),
  controls: null,
  setControls: (controls) => set({ controls }),
}));

interface StateReceived {
    stateReceived: boolean;
    setStateReceived: (stateReceived: boolean) => void;
}

export const useActiveTransitionStore = create<StateReceived>()((set) => ({
    stateReceived: false,
    setStateReceived: (stateReceived: boolean) => set({ stateReceived }),
}));


