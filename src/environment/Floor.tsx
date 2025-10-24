import { Box } from "@react-three/drei";
import { StaticCollider } from "bvhecctrl";

export function Floor() {
  return (
    <StaticCollider>
      <Box scale={[100, 0.1, 100]} position={[0, -0.05, 0]}>
        <meshBasicMaterial transparent opacity={0} color={"yellow"} />
      </Box>
    </StaticCollider>
  );
}
