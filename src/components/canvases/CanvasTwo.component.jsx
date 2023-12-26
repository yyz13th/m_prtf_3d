import React, { Suspense, useContext, useEffect, useState } from 'react'
import HomeInfo from '../home-info/home-info.component'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from "postprocessing";
import Loader from '../loader/loader.component';
import Sol from '../../models/sol.model';
import Perdit from '../../models/perdit.model';
import Seraph from '../../models/seraph.model';
const CanvasTwo = () => {

    const [text, setText] = useState('2');
    const [position, setPosition] = useState([1.9, 1.1, 2.7]);
    const [cameraLook, setCameraLook] = useState([0, 0, 0]);


    function CameraRig({ position: [x, y, z], look: [i, j, k] }) {
      useFrame((state) => {
        state.camera.position.lerp({ x, y, z }, 0.1)
        state.camera.lookAt(i, j, k)
      })
    }

    function Effects() {
        return (
          <EffectComposer>
            <Vignette
              offset={-0.5}
              darkness={2}
              eskil={false}
              blendFunction={BlendFunction.NORMAL}
            />
          </EffectComposer>
        );
      }
    
      const handleButtonClick = (buttonNumber) => {
        switch (buttonNumber) {
          case '2':
            setPosition([0.3556, 1.0702, 3.0105]);
            setCameraLook([0, 0, 0]); // Update camera position for 'About' button
            setText(buttonNumber);
            break;
          case '3':
            setPosition([-0.6, 0.7702, 2]);
            setCameraLook([-2, 0, 0]); // Update camera position for 'Projects' button
            setText(buttonNumber);
            break;
          case '4':
            setPosition([1.2, 0.9, 1.9]); // Update camera position for 'Contacts' button
            setCameraLook([2, 0, 0]);
            setText(buttonNumber);
            break;
          default:
            break;
        }
      };


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', backgroundColor: 'black' }}>
    <div style={{ position: 'relative', width: '75%', height: '75vh' }}>
      <Canvas
        className={`w-full h-full bg-transparent`}
        style={{ background: "black" }}
      // camera={{ position: cameraPosition }}
      >
        <CameraRig position={position} look={cameraLook} />
        <Suspense fallback={<Loader />}> {/* Loader component is showing while models loading*/}
          <directionalLight color={0xFFD700}
            intensity={0.3}
            distance={20}
            decay={5}
            position={[0, 60, 1.8]} />
          <pointLight
            position={position}
            intensity={2}
            penumbra={0.2} // Adjust the penumbra to control the softness of the light edges
            distance={4}
            castShadow // Enable shadow casting for more realistic lighting
          />
          <Sol />
          <Perdit />
          <Seraph />
          <Effects />
        </Suspense>
      </Canvas>

      <div className='absolute flex items-center justify-center text-4xl gap-7 font-josefin font-regular'
        style={{ top: '40%', left: '20%', zIndex: 1 }}
      >
        <button
          onClick={() => handleButtonClick('2')}
          className={text === '2' ? "text-yellow-600 shadow-yellow" : 'text-gray-400 shadow-gray'}
        >
          About
        </button>

        <button
          onClick={() => handleButtonClick('3')}
          className={text === '3' ? "text-yellow-600 shadow-yellow" : 'text-gray-400 shadow-gray'}
        >
          Projects
        </button>

        <button
          onClick={() => handleButtonClick('4')}
          className={text === '4' ? "text-yellow-600 shadow-yellow" : 'text-gray-400 shadow-gray'}
        >
          Contacts
        </button>

      </div>
      <div style={{ position: 'absolute', top: '50%', left: '20%' }}>
        <p></p>
        <HomeInfo currentStage={text} />
      </div>
    </div>
  </div>
  )
}

export default CanvasTwo