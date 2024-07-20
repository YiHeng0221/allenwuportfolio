'use client'

import { useGLTF, ContactShadows, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame, Canvas} from '@react-three/fiber';
import { useRef } from 'react';


export default function ThinkerModel() {
  const { nodes, materials, scene } = useGLTF('/glb/thinker.glb');
  const ref = useRef();
  scene.rotation.y = Math.PI / 2
  
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y+= 0.001;
    }
  });

  return <primitive ref={ref} object={scene} />;
}

