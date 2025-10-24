import { useFrame } from "@react-three/fiber";
import type { CameraControls } from "@react-three/drei";
import type { BVHEcctrlApi } from "bvhecctrl";
import type { MutableRefObject } from "react";

interface UseCameraFollowProps {
  cameraRef: MutableRefObject<CameraControls | null>;
  playerRef: MutableRefObject<BVHEcctrlApi | null>;
  eyeHeight?: number;
}

export function useCameraFollow({
  cameraRef,
  playerRef,
  eyeHeight = 1.6,
}: UseCameraFollowProps) {
  useFrame(() => {
    if (cameraRef.current && playerRef.current !== null) {
      // Position camera at eye level above player position
      cameraRef.current.moveTo(
        playerRef.current.group!.position.x,
        playerRef.current.group!.position.y + eyeHeight,
        playerRef.current.group!.position.z,
        false,
      );
    }
  });
}
