import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/loader/loader.component'
import Island from '../models/island.model'
import Sky from '../components/sky/sky.component'
import Bird from '../models/bird.model'
import Plane from '../models/plane.model'
import HomeInfo from '../components/home-info/home-info.component'

const Home = () => {

  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let islandRotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, islandRotation];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition; 

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      // screenPosition = [0, -4, -4];
      screenPosition = [0, -1, -7];
    }

    return [screenScale, screenPosition];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();


  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-20 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>

      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader/>}> {/* Loader component is showing while models loading*/}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />  


            <Sky 
              isRotating = {isRotating}/>
            <Bird />
            <Island 
              scale = {islandScale} 
              position = {islandPosition}
              rotation = {islandRotation}
              isRotating = {isRotating}
              setIsRotating = {setIsRotating}
              setCurrentStage = {setCurrentStage}
            />
            <Plane 
            scale = {planeScale}
            position = {planePosition}
            isRotating = {isRotating}
            // rotation = {[0, 20, 0]}/>
            rotation = {[0, 25, 0]}/>
          </Suspense>

      </Canvas>
    </section>
  )
}

export default Home