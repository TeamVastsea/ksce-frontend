import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AccountBindingSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">账号绑定指南</h2>
        
        {/* 间歇泉账号互通说明 */}
        <div className="mb-8">
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Badge className="bg-purple-100 text-purple-800">间歇泉互通</Badge>
                <span>Java版与基岩版账号绑定</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800 mb-3">
                  服务器采用 Java 基岩混合开服，如果您希望您在游戏中的 Java 版账号与基岩版账号互通，请参照以下步骤。
                </p>
                <p className="text-xs text-gray-600">
                  建议您在操作前先了解相关信息，谨慎操作，若您不知道这是什么，请忽略。如果您只游玩 Java 版或只游玩基岩版，您可以忽略此设置。
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-gray-800">绑定步骤：</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                  <li>使用你的 Java 版账号加入服务器</li>
                  <li>在 Java 版账号中输入 <code className="bg-white px-1 rounded">/linkaccount &lt;玩家名&gt;</code> 开始绑定流程</li>
                  <li>你会收到一条带有随机数字验证码的消息</li>
                  <li>在基岩版账号中输入 <code className="bg-white px-1 rounded">/linkaccount &lt;玩家名&gt; &lt;验证码&gt;</code> 完成验证</li>
                  <li>完成后，你的基岩版账号同时被服务器踢出，并显示"您已经成功绑定到 &lt;玩家名&gt;！"的提示，此时代表已绑定成功</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* 离线账号注册 */}
        <div className="mb-8">
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Badge className="bg-orange-100 text-orange-800">离线账号</Badge>
                <span>注册与登录</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-orange-800 mb-3">
                  您可以使用离线账号加入服务器，但是您需要在服务器中进行注册与登录。
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800">注册指令：</h4>
                  <div className="bg-white p-2 rounded font-mono text-sm mb-2">
                    /reg &lt;密码&gt; &lt;确认密码&gt;
                  </div>
                  <p className="text-xs text-gray-600">首次进入服务器时使用</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800">登录指令：</h4>
                  <div className="bg-white p-2 rounded font-mono text-sm mb-2">
                    /l &lt;密码&gt;
                  </div>
                  <p className="text-xs text-gray-600">每次进入服务器时使用</p>
                </div>
              </div>
              
              <div className="text-sm text-gray-600">
                <p className="font-medium">注意事项：</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>请妥善保管您的密码</li>
                  <li>若您忘记密码，请联系管理员重置密码</li>
                  <li>建议使用复杂密码确保账号安全</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 inline-block">
            <p className="text-sm text-yellow-800">
              <span className="font-semibold">温馨提示：</span>
              如在绑定或注册过程中遇到任何问题，请及时联系管理员获取帮助
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}