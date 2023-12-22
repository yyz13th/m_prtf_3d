import { useEffect, useRef } from 'react'

// import planeScene from '../assets/3d/plane.glb'
import gracesScene from '../assets/3d/graces-r.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const GracesR = ({...props}) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(gracesScene)
    const { actions } = useAnimations(animations, ref)

  return (
    <mesh ref={ref} {...props}>
    {/* <primitive object={scene} />  */}
    <primitive 
        object={scene} 
        scale={[1.2, 1.2, 1.2]} 
        position={[0, -4, 0]}
        rotation={[0, 0, 0]}/>
    </mesh>
  )
}

export default GracesR