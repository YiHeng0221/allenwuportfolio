import Navbar from "@/components/Navbar";
import { NAV_TABS }from "./constants/navTab";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen">
      <Navbar tab={NAV_TABS} />
    </div>
  );
}
