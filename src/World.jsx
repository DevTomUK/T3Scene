// Wrapper to store all of the world contents for the canvas

// UPDATE: Scene content may need to be lifted higher or have children components passed here and only render one.

import SceneManager from './core/SceneManager';

export default function World({ preset, children, scenePresets, presetOverrides }) {
  return (
    <>
      <SceneManager
        preset={preset}
        scenePresets={scenePresets}
        presetOverrides={presetOverrides}
      />
      {children}
    </>
  );
}
