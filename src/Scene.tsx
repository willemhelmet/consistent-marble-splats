import { useRef } from "react";
import type { BVHEcctrlApi } from "bvhecctrl";

import { FPSCamera } from "./camera/FPSCamera";
import { OrbitCamera } from "./camera/OrbitCamera";
import { Player } from "./player/Player";
import { Colliders } from "./environment/Colliders";
import { SplatGroup } from "./splats/SplatGroup";

interface SceneProps {
  cameraMode: "orbit" | "fps";
  activeSplat: string;
}

export const Scene = ({ cameraMode, activeSplat }: SceneProps) => {
  const playerRef = useRef<BVHEcctrlApi>(null);

  return (
    <>
      {cameraMode === "orbit" ? (
        <OrbitCamera />
      ) : (
        <>
          <FPSCamera playerRef={playerRef} enablePointerLock />
          <Player ref={playerRef} debug={false} position={[0, 1, 0]} />
        </>
      )}
      {/* Always render colliders so physics world is initialized */}
      <Colliders />
      <SplatGroup activeSplatId={activeSplat} />
    </>
  );
};
