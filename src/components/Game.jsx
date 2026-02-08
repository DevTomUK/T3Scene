import React, { useContext } from 'react'
import { CameraContext } from '../context/cameraContext'
import Ocean from '../scene/objects/Ocean'
import { FloatingItem } from '../scene/objects/FloatingItem'

export default function Game() {

  // The move to in camera context moves the camera to the named position, which is either in the defaultPositions, or in the cameraPositions.js
  const { moveTo } = useContext(CameraContext)

  return (
    <>
    {/* home position is in the cameraPositions.js */}
    <mesh onClick={()=>moveTo("home")}>
        <boxGeometry args={[10, 10, 10]} />
        <meshStandardMaterial />
    </mesh>
    {/* THESE ITEMS ARE FROM THE DEMO - UNCOMMNENT THEM TO USE IN YOUR GAME SCENE */}
    <Ocean />
    <FloatingItem pos={"testtt"} />
    </>
  )
}
