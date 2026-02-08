// Wrapper for all of the physical/visible objects and meshes within the scene

import Cube from './objects/Cube'
import Floor from './objects/Floor'
import Ocean from './objects/Ocean'
import { FloatingItem } from './objects/FloatingItem'

export default function DemoScene() {

  return (
    <>
      {/* ------- THIS IS THE DEMO SCENE, THIS RENDERS ON A CONDITION WHERE THE USER HAS PUT NO COMPONENTS INSIDE T3Scene  -------- */}
      <>
        {/* <Cube /> */}
        {/* <Floor /> */}
        <Ocean />
        <FloatingItem />
      </>
      {/* -------------------------------------------------------------------------------------------------------------------------- */}
    </>
  )
}
