interface CameraToggleButtonProps {
  mode: "orbit" | "fps";
  onToggle: () => void;
}

export function CameraToggleButton({ mode, onToggle }: CameraToggleButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-4 left-4 px-4 py-2 bg-white/90 hover:bg-white text-black rounded-lg shadow-lg font-medium transition-all hover:scale-105 active:scale-95"
    >
      {mode === "orbit" ? "Switch to FPS" : "Switch to Orbit"}
    </button>
  );
}
