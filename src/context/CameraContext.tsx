'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

type CameraContextType = {
  selectedSection: string | null
  setSelectedSection: (section: string | null) => void
}

const CameraContext = createContext<CameraContextType>({
  selectedSection: null,
  setSelectedSection: () => {},
})

export function CameraProvider({ children }: { children: ReactNode }) {
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  return (
    <CameraContext.Provider value={{ selectedSection, setSelectedSection }}>
      {children}
    </CameraContext.Provider>
  )
}

export function useCameraContext() {
  return useContext(CameraContext)
}
