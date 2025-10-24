import BVHEcctrl, { type BVHEcctrlApi, type EcctrlProps } from "bvhecctrl";
import { KeyboardControls } from "@react-three/drei";
import { forwardRef } from "react";

export const Player = forwardRef<BVHEcctrlApi, EcctrlProps>((props, ref) => {
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    // { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
  ];
  return (
    <>
      <KeyboardControls map={keyboardMap}>
        <BVHEcctrl
          ref={ref}
          maxWalkSpeed={3}
          maxRunSpeed={5}
          {...props}
        ></BVHEcctrl>
      </KeyboardControls>
    </>
  );
});

Player.displayName = "Player";
