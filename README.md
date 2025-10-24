# Apartment Splat Viewer

An interactive 3D Gaussian Splat viewer built with React Three Fiber, featuring dual camera modes and dynamic scene switching between AI-generated and traditionally rendered environments.

🔗 **Live Demo**: [https://willemhelmet.github.io/consistent-marble-splats/](https://willemhelmet.github.io/consistent-marble-splats/)

## Features

- **Dynamic Scene Switching**
  - Switch between "AI Abandoned" and "Render" splat scenes instantly
  - Both splats preloaded for seamless transitions
  - Toggle button (bottom-center) to switch between environments

- **Dual Camera Modes**
  - **Orbit Mode**: Free camera rotation around the splat with mouse/touch controls
  - **FPS Mode**: First-person exploration with physics-based movement and collisions

- **Physics-Based Collision System**
  - GLB mesh-based colliders for realistic navigation
  - Adjustable collision geometry via Leva controls (development)

- **Interactive Controls**
  - Splat toggle button (bottom-center) - Switch between scenes
  - Camera mode toggle button (bottom-left) - Switch camera modes
  - FPS stats toggle button (bottom-right) - Performance monitoring
  - Mobile joystick controls (FPS mode only)

- **Real-Time Adjustments (Development)**
  - Leva controls for splat position and scale
  - Debug lighting for collision visualization
  - Per-splat configuration persistence

- **Keyboard Controls (FPS Mode)**
  - `W/↑` - Move forward
  - `S/↓` - Move backward
  - `A/←` - Move left
  - `D/→` - Move right
  - `Shift` - Sprint
  - Mouse - Look around (pointer lock)

## Tech Stack

- **React** + **TypeScript** + **Vite**
- **React Three Fiber** - 3D rendering with Three.js
- **@react-three/drei** - Useful helpers for R3F
- **@sparkjsdev/spark** - Gaussian Splat rendering
- **bvhecctrl** - Physics-based character controller for FPS mode
- **Tailwind CSS** - Styling
- **Leva** - Debug controls (development)

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The dev server runs at `http://localhost:5173/`

Hot Module Replacement (HMR) is enabled for instant updates during development.

## Deployment

The project is configured for deployment to GitHub Pages:

```bash
# Build and deploy to gh-pages branch
npm run deploy
```

The site will be available at `https://willemhelmet.github.io/consistent-marble-splats/`

## Project Structure

```
src/
├── camera/
│   ├── OrbitCamera.tsx    # Orbit camera controls
│   ├── FPSCamera.tsx       # First-person camera
│   └── useCameraFollow.ts  # Camera follow hook
├── components/
│   ├── ui/                 # UI components (buttons)
│   └── spark/              # Gaussian Splat rendering
├── environment/
│   └── Colliders.tsx       # Physics collision geometry
├── player/
│   └── Player.tsx          # FPS character controller
├── splats/
│   ├── config.ts           # Splat configuration
│   ├── SplatScene.tsx      # Individual splat renderer
│   └── SplatGroup.tsx      # Splat group manager
├── App.tsx                 # Main app component
└── Scene.tsx               # 3D scene setup
```

## Adding New Splats

1. **Add splat configuration** to `src/splats/config.ts`:

```typescript
export const SPLATS: SplatConfig[] = [
  {
    id: "my-splat",
    url: `${import.meta.env.BASE_URL}my-splat.spz`,
    fileType: SplatFileType.SPZ,
    position: [0, 6, 0],
    rotation: [Math.PI, 0, 0],
    scale: [5, 5, 5],
  },
  // Add more splats here...
];
```

2. **Place your splat file** (`.spz`, `.ply`, or `.splat`) in the `public/` directory

3. **Update the toggle button types** in `src/App.tsx` and `src/components/ui/SplatToggleButton.tsx` to include your new splat ID

**Note:** All splats in the config are preloaded on initial page load and switched via visibility toggling for instant transitions.

## Camera Configuration

Adjust the initial orbit camera position in `src/camera/OrbitCamera.tsx`:

```typescript
const angle = 285;  // Y rotation in degrees
const radius = 6;   // Distance from target
const height = 3;   // Camera height
```

## Collision System

The collision system uses GLB mesh-based colliders for accurate physics:

1. **Collider mesh** is stored in `public/colliders.glb` (12+ solid meshes)
2. **Loaded automatically** in `src/environment/Colliders.tsx` via `useGLTF`
3. **Wrapped in StaticCollider** from bvhecctrl for physics integration
4. **Debug controls** available in development via Leva panel:
   - Adjust collider scale and position
   - Toggle visibility with debug lighting
   - White material overlay for visualization

To update collision geometry:
- Export new collider meshes from Blender as `.glb`
- Replace `public/colliders.glb`
- Adjust scale/position in `src/environment/Colliders.tsx`

## License

MIT

## Acknowledgments

- [Spark.js](https://github.com/sparksuite/spark) - Gaussian Splat rendering
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [bvhecctrl](https://github.com/pmndrs/ecctrl) - Physics character controller
