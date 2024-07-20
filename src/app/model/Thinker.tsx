'use client'

import { useGLTF, ContactShadows, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame, Canvas} from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function ThinkerModel() {
  const { nodes, materials, scene } = useGLTF('/glb/thinker.glb');
  const ref = useRef();
  scene.rotation.y = Math.PI / 2
  
  useFrame(() => {
    if (ref.current && typeof ref.current === 'object') {
      (ref.current as THREE.Object3D).rotation.y += 0.001;
    }
  });

  return <primitive ref={ref} object={scene} />;
}

