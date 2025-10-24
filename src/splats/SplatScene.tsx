import { useMemo } from "react";
import { SplatMesh } from "../components/spark/SplatMesh";
import type { SplatConfig } from "./config";

interface SplatSceneProps {
  config: SplatConfig;
}

export function SplatScene({ config }: SplatSceneProps) {
  const splatMeshArgs = useMemo(
    () => ({
      url: config.url,
      ...(config.fileType && { fileType: config.fileType }),
    }),
    [config.url, config.fileType],
  );

  return (
    <group
      position={config.position}
      rotation={config.rotation}
      scale={config.scale}
    >
      <SplatMesh args={[splatMeshArgs]} />
    </group>
  );
}
