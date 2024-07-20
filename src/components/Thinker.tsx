'use client'

import { useGLTF, Environment, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import ThinkerModel from '@/app/model/Thinker'

export default function Thinker() {
  return (
    <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-center bg-transparent">
      <Canvas>
        <Environment preset="studio" />
        <PerspectiveCamera makeDefault position={[1.4, 0.8, 3.8]} />
        <ThinkerModel />
      </Canvas>
    </div>
  )
}

useGLTF.preload('/glb/thinker.glb')
