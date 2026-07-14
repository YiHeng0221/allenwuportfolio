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

    // On mobile (< lg) the desktop's horizontal offset (lookAt.x ≈ 1.4, which
    // parks the model on the left while content sits on the right) pushes the
    // model off the narrow portrait viewport. Pan the camera left so the model
    // centers. Zoom distance and the section lerp are untouched — the zoom
    // behavior stays identical to desktop.
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024
    const xShift = isMobile ? -1.4 : 0

    const targetPos = config.position.clone()
    const targetLook = config.lookAt.clone()
    targetPos.x += xShift
    targetLook.x += xShift

    camera.position.lerp(targetPos, 0.03)
    lookAtTarget.current.lerp(targetLook, 0.03)
    camera.lookAt(lookAtTarget.current)
  })

  return null
}
