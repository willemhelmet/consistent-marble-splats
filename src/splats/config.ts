import { SplatFileType } from "@sparkjsdev/spark";

export interface SplatConfig {
  id: string;
  url: string;
  fileType?: SplatFileType;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
}

/**
 * Splat Registry
 *
 * Add new splats here! Each splat needs:
 * - id: Unique identifier
 * - url: Path to splat file (in /public folder)
 * - fileType: (Optional) Explicit file type (e.g., SplatFileType.PCSOGS for .sog)
 * - position: [x, y, z] coordinates
 * - rotation: [x, y, z] rotation in radians
 * - scale: [x, y, z] scale factors
 */
export const SPLATS: SplatConfig[] = [
  {
    id: "blender",
    url: `${import.meta.env.BASE_URL}blender.spz`,
    fileType: SplatFileType.SPZ,
    position: [0, 6, 0],
    rotation: [Math.PI, 0, 0],
    scale: [5, 5, 5],
  },
  {
    id: "abandoned",
    url: `${import.meta.env.BASE_URL}ai_abandoned.spz`,
    fileType: SplatFileType.SPZ, // Try without fileType - Spark may auto-detect
    position: [0.1, 6.4, 0.2],
    rotation: [Math.PI, 0, 0],
    scale: [4.8, 4.8, 4.8],
  },
];
