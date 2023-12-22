import React from 'react';
import { extend, useThree } from '@react-three/fiber'
import { ShaderMaterial } from 'three';

// Extend the ShaderMaterial
extend({ ShaderMaterial });

// Custom FadeMaterial component
const FadeMaterial = () => {
  const { viewport } = useThree();

  // Create the shader material
  const materialRef = React.useRef();
  const material = materialRef.current;

  // Update the material on mount
  React.useEffect(() => {
    if (material) {
      material.uniforms.uResolution.value.x = viewport.width;
      material.uniforms.uResolution.value.y = viewport.height;
    }
  }, [material, viewport]);

  // Shader code
  const fragmentShader = `
    uniform vec2 uResolution;

    void main() {
      // Calculate the fade factor based on the fragment's y coordinate
      float fade = 1.0 - gl_FragCoord.y / uResolution.y;

      // Set the fragment color with the fade factor
      gl_FragColor = vec4(0.0, 0.0, 0.0, fade);
    }
  `;

  return (
    <shaderMaterial
      ref={materialRef}
      args={[{ fragmentShader, transparent: true }]}
      uniforms={{ uResolution: { value: { x: 0, y: 0 } } }}
    />
  );
};

// CustomFadeOut component
const CustomFadeOut = () => {
  return (
    <mesh>
      <planeBufferGeometry args={[window.innerWidth, window.innerHeight]} />
      <FadeMaterial />
    </mesh>
  );
};

export default CustomFadeOut;