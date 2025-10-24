import { useGLTF } from "@react-three/drei";
import { StaticCollider } from "bvhecctrl";

export function Colliders() {
  const { scene } = useGLTF("/colliders.glb");

  return (
    <>
      {/* Debug lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

      <StaticCollider>
        {/* Floor */}
        {/* <Box scale={[100, 0.1, 100]} position={[0, -0.05, 0]} visible={true} /> */}

        {/* Collider meshes from GLB */}
        <primitive
          object={scene.clone()}
          visible={false}
          scale={[3.7, 3.7, 3.7]}
          position={[-1, -0.3, -0.1]}
        >
          <meshStandardMaterial color={"white"} />
        </primitive>
      </StaticCollider>
    </>
  );
}
