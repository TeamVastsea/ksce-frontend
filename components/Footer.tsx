export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* 主办方信息 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">主办方</h3>
            <div className="space-y-2 text-gray-300">
              <p className="text-sm">
                <span className="font-medium">组织：</span>
                苦力怕论坛 KLPBBS
              </p>
              <p className="text-sm">
                <span className="font-medium">联系方式：</span>
                QQ 397749490
              </p>
              <p className="text-sm">
                <span className="font-medium">官方网站：</span>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                  klpbbs.com
                </a>
              </p>
            </div>
          </div>

          {/* 技术支持 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">技术支持</h3>
            <div className="space-y-2 text-gray-300">
              <p className="text-sm">
                <span className="font-medium">服务器：</span>
                瀚海工艺 Vastsea
              </p>
              <p className="text-sm">
                <span className="font-medium">网站开发：</span>
                Snowball_233
              </p>
              <p className="text-sm">
                <span className="font-medium">技术咨询：</span>
                QQ 2957202260
              </p>
            </div>
          </div>
        </div>

        {/* 分割线 */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 KLPBBS & Vastsea. All rights reserved.
            </div>
          </div>
        </div>

        {/* 额外信息 */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            本服务器遵循 Minecraft EULA 协议 | 服务器版本：1.20.x | 最后更新：2025年
          </p>
        </div>
      </div>
    </footer>
  )
}