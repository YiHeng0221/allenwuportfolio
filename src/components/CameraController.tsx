'use client'

import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { Vector3 } from 'three'

const CAMERA_CONFIGS: Record<string, { position: Vector3; lookAt: Vector3 }> = {
  default: {
    position: new Vector3(1.4, 0.8, 3.8),
    lookAt: new Vector3(1.4, 0.8, 0),
  },
  about: {
    position: new Vector3(1.8, 1.6, 2.0),
    lookAt: new Vector3(1.2, 1.4, 0),
  },
  skills: {
    position: new Vector3(1.6, 1.2, 2.0),
    lookAt: new Vector3(1.0, 1.0, 0),
  },
  experience: {
    position: new Vector3(1.8, 1.0, 2.5),
    lookAt: new Vector3(1.2, 0.8, 0),
  },
  projects: {
    position: new Vector3(1.6, 1.0, 3.2),
    lookAt: new Vector3(1.2, 0.8, 0),
  },
  contact: {
    position: new Vector3(1.6, 0.5, 2.0),
    lookAt: new Vector3(1.0, 0.3, 0),
  },
}

interface CameraControllerProps {
  selectedSection: string | null
}

export default function CameraController({
  selectedSection,
}: CameraControllerProps) {
  const { camera } = useThree()
  const lookAtTarget = useRef(new Vector3(1.4, 0.8, 0))

  useFrame(() => {
    const config =
      CAMERA_CONFIGS[selectedSection || 'default'] || CAMERA_CONFIGS.default

    camera.position.lerp(config.position, 0.03)
    lookAtTarget.current.lerp(config.lookAt, 0.03)
    camera.lookAt(lookAtTarget.current)
  })

  return null
}
