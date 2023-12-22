import { useEffect, useRef } from 'react'

// import planeScene from '../assets/3d/plane.glb'
// import gracesScene from '../assets/3d/graces-draco2.glb'
import perditScene from '../assets/3d/perdit.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Perdit = () => {
    const ref = useRef();
    const { scene, animations } = useGLTF(perditScene)
    const { actions } = useAnimations(animations, ref)

  return (
    <mesh ref={ref}>
    {/* <primitive object={scene} />  */}
    <primitive 
        object={scene} 
        scale={[3, 3, 3]} 
        position={[-1.5, -5, 1]}
        rotation={[0, 1.2, 0]}/>
    </mesh>
  )
}
export default Perdit