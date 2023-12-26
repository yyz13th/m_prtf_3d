import React, { Suspense, useContext, useEffect } from 'react'
import HomeInfo from '../home-info/home-info.component'
import { Canvas } from '@react-three/fiber'
import Loader from '../loader/loader.component'
import Graces from '../../models/graces.model'
import useMousePosition from '../../hooks/useMousePosition.hook';


const CanvasOne = () => {

    const { canvasRef, mousePosition } = useMousePosition();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', backgroundColor: 'black' }}>
    <div style={{ position: 'relative', width: '75%', height: '75vh' }}>
      <Canvas
        className={`w-[100vh] h-[100vw] bg-transparent`}
        style={{ background: "black" }} ref={canvasRef}
      >
        <Suspense fallback={<Loader />}> {/* Loader component is showing while models loading*/}
          <directionalLight color={0xFFD700}
            intensity={0.3}
            distance={40}
            decay={3}
            position={[0, 60, 1.8]} />
          <Graces />
          <pointLight
            position={[mousePosition.x, mousePosition.y, 2.2]}
            intensity={2}
            penumbra={0.2} // Adjust the penumbra to control the softness of the light edges
            distance={4}
            castShadow // Enable shadow casting for more realistic lighting
          />
        </Suspense>
      </Canvas>
      <HomeInfo currentStage={1} />
    </div>
  </div>
  )
}

export default CanvasOne