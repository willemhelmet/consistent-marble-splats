interface SplatToggleButtonProps {
  activeSplat: "abandoned" | "blender";
  onToggle: () => void;
}

export function SplatToggleButton({
  activeSplat,
  onToggle,
}: SplatToggleButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/90 hover:bg-white text-black rounded-lg shadow-lg font-medium transition-all hover:scale-105 active:scale-95"
    >
      {activeSplat === "abandoned" ? "Switch to Render" : "Switch to AI"}
    </button>
  );
}
