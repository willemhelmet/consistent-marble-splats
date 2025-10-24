import { useMemo } from "react";
import { useThree } from "@react-three/fiber";
import { SparkRenderer } from "../components/spark/SparkRenderer";
import { SPLATS } from "./config";
import { SplatScene } from "./SplatScene";

interface SplatGroupProps {
  activeSplatId: string;
}

export function SplatGroup({ activeSplatId }: SplatGroupProps) {
  const renderer = useThree((state) => state.gl);
  const sparkRendererArgs = useMemo(() => {
    return {
      renderer,
      maxStdDev: Math.sqrt(5), // Performance optimization: reduce Gaussian fall-off
    };
  }, [renderer]);

  return (
    <SparkRenderer args={[sparkRendererArgs]}>
      {/* Render both splats but control visibility for instant switching */}
      {SPLATS.map((splatConfig) => (
        <group key={splatConfig.id} visible={splatConfig.id === activeSplatId}>
          <SplatScene config={splatConfig} />
        </group>
      ))}
    </SparkRenderer>
  );
}
