import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Globe, Shield } from "lucide-react"

export function ServerInfoSection() {
  return (
    <section id="server" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">服务器信息</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Server className="w-5 h-5 text-green-500" />
                <span>版本支持</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <Badge variant="outline" className="mr-2">
                    Java版
                  </Badge>
                  <span className="text-sm text-gray-600">1.9-1.21.7</span>
                </div>
                <div>
                  <Badge variant="outline" className="mr-2">
                    基岩版
                  </Badge>
                  <span className="text-sm text-gray-600">1.21.70-1.21.93</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">建议Java版使用1.21.3或以上版本</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-blue-500" />
                <span>时间同步</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">服务器时间与现实时间同步</p>
              <p className="text-sm text-gray-500">时区：UTC+8 Asia/Shanghai</p>
              <p className="text-sm text-red-600 mt-2">注意：睡觉无法跳过黑夜，小心夜晚野怪！</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-red-500" />
                <span>安全保障</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• 实时反作弊系统</li>
                <li>• 反矿透保护</li>
                <li>• 管理员巡查</li>
                <li>• CoreProtect保护插件</li>
                <li>• NoChatReport插件</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}