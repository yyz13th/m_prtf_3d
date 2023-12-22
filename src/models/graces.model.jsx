import { useEffect, useRef } from 'react'

// import planeScene from '../assets/3d/plane.glb'
import gracesScene from '../assets/3d/graces-draco2.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Graces = () => {
    const ref = useRef();
    const { scene, animations } = useGLTF(gracesScene)
    const { actions } = useAnimations(animations, ref)

  return (
    <mesh ref={ref}>
    {/* <primitive object={scene} />  */}
    <primitive 
        object={scene} 
        scale={[1.2, 1.2, 1.2]} 
        position={[0, -3, 0]}/>
    </mesh>
  )
}
useGLTF.preload('/graces-draco2.glb');
export default Graces