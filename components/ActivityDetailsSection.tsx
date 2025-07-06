import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, Shield, Users, Server } from "lucide-react"

export function ActivityDetailsSection() {
  return (
    <section id="activity" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">活动详情</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Coins className="w-5 h-5 text-yellow-500" />
                <span>货币系统</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">本服货币为金币，获得方式：</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 使用 /ss 出售矿物获得金币</li>
                <li>• 击杀野怪获得1金币</li>
                <li>• 击杀中立生物获得1-2金币</li>
                <li>• 击杀玩家获得其5%金币（最大1000金币）</li>
                <li>• 自动签到获得奖励</li>
              </ul>
              <p className="text-xs text-gray-500 mt-2">商店刷新时间从首次购买计算</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <span>死亡规则</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">分阶段死亡规则：</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 第一周(7.7-7.14)：死亡不掉落</li>
                <li>• 第二、三周(7.15-7.27)：死亡掉落物品</li>
                <li>• 最后决战：死亡无法复活</li>
              </ul>
              <p className="text-xs text-red-600 mt-2">请妥善保管随身物品！</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-500" />
                <span>血量 & 技能</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">游戏设置调整：</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 血量上限：50（25颗心）</li>
                <li>• 技能等级系统已启用</li>
                <li>• 挖矿、砍树、击杀提升等级</li>
                <li>• 等级属性加成</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Server className="w-5 h-5 text-green-500" />
                <span>维度 & 功能</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">开放内容：</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 主世界、地狱维度</li>
                <li>• 末地暂不开放</li>
                <li>• 鞘翅等物品商店出售</li>
                <li>• GSit插件：/sit /lay</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}