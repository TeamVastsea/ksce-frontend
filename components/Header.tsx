import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/klpbbs-logo.svg" alt="苦力怕论坛" width={32} height={32} />
            <span className="font-bold text-xl text-gray-800">苦力怕论坛</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#activity" className="text-gray-600 hover:text-green-600 transition-colors">
              活动详情
            </Link>
            <Link href="#rules" className="text-gray-600 hover:text-green-600 transition-colors">
              游戏规则
            </Link>
            <Link href="#server" className="text-gray-600 hover:text-green-600 transition-colors">
              服务器信息
            </Link>
            <Link href="#teams" className="text-gray-600 hover:text-green-600 transition-colors">
              分组信息
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}