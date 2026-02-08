T3Scene

T3Scene is a preset-driven scene wrapper for React Three Fiber.
It provides an easy way to set up 3D scenes with configurable camera positions, lighting, environment, fog, and post-processing effects — all out of the box.

Features

Preset-driven scene configuration: Define multiple scene presets (default, performance, cinematic, etc.)

Camera management: Smooth camera transitions between predefined positions using LERP

Lighting & Fog: Easily enable/disable ambient, directional, point, and spot lights

Environment & HDRI support: Add skyboxes and HDRI backgrounds effortlessly

Post-processing: Optional bloom and other effects configurable per preset

UI Overlay: Plug-and-play UI integration

Extensible: Override presets for custom setups

Installation

Install via npm or yarn:

npm install t3scene
or
yarn add t3scene

After installing, you can import T3Scene in your React app.

Usage

import React from "react";
import { T3Scene, SCENE_PRESETS, CAMERA_POSITIONS } from "t3scene";
import MyModel from "./MyModel";

export default function App() {
  return (
    <T3Scene
      preset="default"
      presetOverrides={{ lighting: { options: { ambient: { intensity: 2 } } } }}
      cameraPositions={CAMERA_POSITIONS}
    >
      <MyModel />
    </T3Scene>
  );
}

Props

Prop | Type | Default | Description
preset | string | "default" | Name of the scene preset to use (default, performance, etc.)
presetOverrides | object | {} | Optional object to override specific parts of the preset
cameraPositions | object | CAMERA_POSITIONS | Optional object of camera positions to switch between
children | ReactNode | <DemoScene /> | Optional scene content to render inside the scene

Scene Presets

SCENE_PRESETS contains default configurations:

export const SCENE_PRESETS = {
  default: {
    camera: { type: "perspective", options: { fov: 50 } },
    lighting: { enabled: true, options: { ambient: { intensity: 0.7 }, directional: { intensity: 1 } } },
    fog: { enabled: true, options: { mode: "exp", density: 0.001 } },
    environment: { sky: { options: { hdri: { enabled: true, path: "/hdris/qwantani_dusk_2_puresky_2k.hdr", background: true } } } },
    postProcessing: { enabled: true, options: { bloom: { enabled: true } } },
    lerpFactor: 0.05
  },
  performance: {
    camera: { type: "perspective" },
    lighting: { enabled: true, options: { ambient: { intensity: 0.5 }, directional: { enabled: false } } },
    fog: { enabled: false },
    environment: { sky: { options: { sky: { enabled: true } } } },
    postProcessing: { enabled: false },
    lerpFactor: 0.05
  }
};

Camera Positions

export const CAMERA_POSITIONS = {
  overview: { position: [50, 100, 50], lookAt: [0, 0, 0] },
  closeUp: { position: [10, 5, 10], lookAt: [0, 2, 0] },
  home: { position: [50, 100, 120], lookAt: [50, 15, 70] }
};

Example: Custom Preset Override

<T3Scene
  preset="default"
  presetOverrides={{
    lighting: { options: { ambient: { intensity: 2 }, directional: { intensity: 0.5 } } },
    postProcessing: { enabled: false }
  }}

  <MyModel />
</T3Scene>

Contributing

Contributions, issues, and feature requests are welcome!
Feel free to submit a PR or open an issue.

License

MIT License © 2026 DevTomUK