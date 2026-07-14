'use client'

import { PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import ThinkerModel from '@/model/Thinker'
import CameraController from './CameraController'
import { useCameraContext } from '@/context/CameraContext'

export default function Thinker() {
  const { selectedSection } = useCameraContext()

  return (
    <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-center bg-transparent opacity-[0.18] lg:opacity-100">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-3, 2, -2]} intensity={0.4} />
        <PerspectiveCamera makeDefault position={[1.4, 0.8, 3.8]} />
        <CameraController selectedSection={selectedSection} />
        <ThinkerModel />
      </Canvas>
    </div>
  )
}

useGLTF.preload('/glb/thinker.glb')
