import React from 'react'

import planeScene from '../assets/3d/spaceship.glb'
import { useGLTF } from '@react-three/drei'

const Plane = () => {
    const { scene, animations } = useGLTF(planeScene)
  return (
    <mesh>
        <primitive object={scene} scale={[0.1, 0.1, 0.1]}/>
    </mesh>
  )
}

export default Plane