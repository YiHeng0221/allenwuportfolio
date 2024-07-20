import Navbar from '@/components/Navbar'

import { NAV_TABS } from './constants/navTab'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Navbar tab={NAV_TABS} />
    </div>
  )
}
