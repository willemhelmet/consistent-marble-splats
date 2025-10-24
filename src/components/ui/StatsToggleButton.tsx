interface StatsToggleButtonProps {
  showStats: boolean;
  onToggle: () => void;
}

export function StatsToggleButton({
  showStats,
  onToggle,
}: StatsToggleButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-4 right-4 px-4 py-2 bg-white/90 hover:bg-white text-black rounded-lg shadow-lg font-medium transition-all hover:scale-105 active:scale-95"
    >
      {showStats ? "Hide Stats" : "Show Stats"}
    </button>
  );
}
