'use client';

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type * as THREE from 'three';

export default function ThinkerModel() {
  const { scene } = useGLTF('/glb/thinker.glb');
  const ref = useRef();
  scene.rotation.y = Math.PI / 2;

  useFrame(() => {
    if (ref.current && typeof ref.current === 'object') {
      (ref.current as THREE.Object3D).rotation.y += 0.001;
    }
  });

  return <primitive ref={ref} object={scene} />;
}
