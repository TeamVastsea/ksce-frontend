import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Shield, MessageSquare, Map } from "lucide-react"

export function SafetyRulesSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">安全规则</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* 反作弊系统 */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-red-600" />
                <span>反作弊系统</span>
                <Badge className="bg-red-100 text-red-800">严格执行</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-red-800">禁止行为：</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>使用任何形式的作弊客户端</li>
                  <li>使用X-Ray、飞行等作弊模组</li>
                  <li>利用游戏漏洞获取不当利益</li>
                  <li>使用自动化脚本或机器人</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-yellow-800">处罚措施：</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>首次发现：警告并删除违规物品</li>
                  <li>再次违规：临时封禁7天</li>
                  <li>屡教不改：永久封禁</li>
                </ul>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <AlertTriangle className="w-4 h-4 text-orange-500" />
                <span>系统24小时自动监控</span>
              </div>
            </CardContent>
          </Card>

          {/* 语言规范 */}
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <span>语言规范</span>
                <Badge className="bg-blue-100 text-blue-800">文明游戏</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-800">禁止内容：</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>辱骂、人身攻击等不文明言论</li>
                  <li>发布政治敏感、色情等违规内容</li>
                  <li>恶意刷屏、广告等垃圾信息</li>
                  <li>泄露他人隐私信息</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-800">倡导行为：</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>友善交流，互相帮助</li>
                  <li>积极参与团队合作</li>
                  <li>分享游戏心得和技巧</li>
                  <li>维护良好的游戏环境</li>
                </ul>
              </div>
              
              <div className="text-sm text-gray-600">
                <p className="font-medium">违规处理：</p>
                <p>根据情节轻重给予禁言、踢出或封禁处罚</p>
              </div>
            </CardContent>
          </Card>

          {/* 地图模组限制 */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Map className="w-5 h-5 text-green-600" />
                <span>地图模组限制</span>
                <Badge className="bg-green-100 text-green-800">公平竞技</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-800">允许使用：</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>OptiFine等性能优化模组</li>
                  <li>JEI等物品查询模组</li>
                  <li>小地图模组（无实体显示）</li>
                  <li>光影包和材质包</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-red-800">禁止使用：</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>显示玩家位置的地图模组</li>
                  <li>透视矿物的X-Ray模组</li>
                  <li>自动挖掘、建造等自动化模组</li>
                  <li>修改游戏机制的作弊模组</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <span className="font-semibold">提醒：</span>
                  如不确定某个模组是否允许使用，请提前咨询管理员
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 inline-block max-w-2xl">
            <h3 className="font-semibold text-gray-800 mb-2">重要声明</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              以上规则旨在维护公平、友好的游戏环境。所有玩家都有义务遵守这些规则，
              共同营造良好的游戏氛围。如发现违规行为，请及时举报。
              管理员保留最终解释权和处罚权。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}