import { useEffect, useRef } from "react";
import { CameraControls } from "@react-three/drei";
import type { BVHEcctrlApi } from "bvhecctrl";
import { useCameraFollow } from "./useCameraFollow";

interface FPSCameraProps {
  playerRef: React.MutableRefObject<BVHEcctrlApi | null>;
  eyeHeight?: number;
  enablePointerLock?: boolean;
}

export function FPSCamera({
  playerRef,
  eyeHeight = 1.6,
  enablePointerLock = false,
}: FPSCameraProps) {
  const cameraRef = useRef<CameraControls>(null);

  // Enable pointer lock when switching to FPS mode
  useEffect(() => {
    if (enablePointerLock && cameraRef.current) {
      // Enable pointer lock for FPS mouse look
      cameraRef.current.lockPointer();

      // Set camera to very close distance for first-person view
      if (cameraRef.current.distance > 0.1) {
        cameraRef.current.dolly(cameraRef.current.distance - 0.02, false);
      }
    }
  }, [enablePointerLock]);

  // Follow player at eye level
  useCameraFollow({ cameraRef, playerRef, eyeHeight });

  return <CameraControls ref={cameraRef} />;
}
