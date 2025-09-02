import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Logo from "../../public/images/logo.png"
import HomeSvg from "../../public/images/Group 34.png"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col px-6">
      {/* Header with Logo */}
      <div className="flex justify-center pt-4">
        <div className="flex items-center">

          <Image src={Logo} alt="Home" width={69} height={69} className="object-contain" />

        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center space-y-[16px] pb-4 pt-4">
        {/* Illustration Area */}
        <Image src={HomeSvg} alt="Home" width={280} height={230} className="object-contain" />

      </div>
      <div className="space-y-[16px]">
        <h1 className="text-[32px] font-semibold text-black flex items-center justify-start gap-2 leading-10">
          Welcome!
          <span className="text-3xl">👋</span>
        </h1>

        <p className="text-[22px] w-full text-black leading-[160%] ">
          Check-in online in less than 3 minutes to get your wristband number and skip the queue.
        </p>
      </div>

      {/* Bottom Navigation Button */}
      <div className="fixed bottom-8 right-8 hover:cursor-pointer bg-black rounded-full h-[50px] w-[50px] flex items-center justify-center">

        <Link href="/register">
          <ChevronRight className="w-6 h-6 text-white" />
        </Link>

      </div>
    </div>
  )
}
