import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, Stats } from "@react-three/drei";
import { Scene } from "./Scene.tsx";
import { Joystick } from "bvhecctrl";
import { useWindowSize } from "./hooks/useWindowSize";
import { CameraToggleButton } from "./components/ui/CameraToggleButton";
import { StatsToggleButton } from "./components/ui/StatsToggleButton";
import { SplatToggleButton } from "./components/ui/SplatToggleButton";

function App() {
  const { isMobile } = useWindowSize();
  const [cameraMode, setCameraMode] = useState<"orbit" | "fps">("orbit");
  const [showStats, setShowStats] = useState(false);
  const [activeSplat, setActiveSplat] = useState<"abandoned" | "blender">("abandoned");

  const toggleCameraMode = () => {
    setCameraMode((prev) => (prev === "orbit" ? "fps" : "orbit"));
  };

  const toggleStats = () => {
    setShowStats((prev) => !prev);
  };

  const toggleSplat = () => {
    setActiveSplat((prev) => (prev === "abandoned" ? "blender" : "abandoned"));
  };

  return (
    <div className="flex h-screen w-screen">
      <Canvas gl={{ antialias: false }} dpr={1}>
        <Scene cameraMode={cameraMode} activeSplat={activeSplat} />
      </Canvas>

      <Loader />
      {/* Mobile touch controls - only show on small screens and in FPS mode */}
      {isMobile && cameraMode === "fps" && <Joystick />}
      <CameraToggleButton mode={cameraMode} onToggle={toggleCameraMode} />
      <StatsToggleButton showStats={showStats} onToggle={toggleStats} />
      <SplatToggleButton activeSplat={activeSplat} onToggle={toggleSplat} />
      {showStats && <Stats />}
    </div>
  );
}

export default App;
