import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export function OrbitCamera() {
  const { camera } = useThree();

  // Camera positioning parameters
  const angle = 285; // Y rotation in degrees
  const radius = 6; // Distance from target
  const height = 3; // Camera height

  // Set initial camera position
  useEffect(() => {
    const angleRad = (angle * Math.PI) / 180;
    const x = Math.sin(angleRad) * radius;
    const z = Math.cos(angleRad) * radius;

    camera.position.set(x, height, z);
    camera.lookAt(0, 0.75, 0); // Look at the splat position
  }, [camera]);

  return (
    <OrbitControls
      enableDamping
      dampingFactor={0.05}
      target={[0, 0.75, 0]} // Orbit around the splat
      minDistance={2}
      maxDistance={20}
      maxPolarAngle={Math.PI / 2} // Prevent camera from going below ground
    />
  );
}
