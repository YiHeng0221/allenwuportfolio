"use client";

import Image from "next/image";
import { useGLTF, ContactShadows, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame, Canvas} from '@react-three/fiber';
import { useRef } from 'react';
import ThinkerModel from '@/app/model/Thinker';

export default function Thinker() {
  

  return (    
    <div className="flex items-center justify-center h-full w-full bg-transparent absolute top-0 left-0 -z-10">
      <Canvas>
        <Environment preset="studio" />
        <PerspectiveCamera makeDefault position={[1.4, 0.8, 3.8]} />
        <ThinkerModel />
      </Canvas>
    </div>
  )
}

useGLTF.preload("/glb/thinker.glb");
