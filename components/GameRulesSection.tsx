import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function GameRulesSection() {
  return (
    <section id="rules" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">游戏规则</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>领地与分组</CardTitle>
              <CardDescription>地图分为五个区域，每组拥有专属领地</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-red-100 rounded-lg">
                    <div className="font-bold text-red-800">A组领地</div>
                    <div className="text-sm text-red-600">A组专属区域</div>
                  </div>
                  <div className="text-center p-4 bg-blue-100 rounded-lg">
                    <div className="font-bold text-blue-800">B组领地</div>
                    <div className="text-sm text-blue-600">B组专属区域</div>
                  </div>
                  <div className="text-center p-4 bg-green-100 rounded-lg">
                    <div className="font-bold text-green-800">C组领地</div>
                    <div className="text-sm text-green-600">C组专属区域</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-100 rounded-lg">
                    <div className="font-bold text-yellow-800">D组领地</div>
                    <div className="text-sm text-yellow-600">D组专属区域</div>
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-100 rounded-lg">
                  <div className="font-bold text-purple-800">中心区域</div>
                  <div className="text-sm text-purple-600">所有人可进入，开放PVP</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>常用指令</CardTitle>
              <CardDescription>游戏中的重要指令列表</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
                  <code className="text-sm font-mono">/ss</code>
                  <span className="text-sm text-gray-600">打开当铺出售物品</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
                  <code className="text-sm font-mono">/shop</code>
                  <span className="text-sm text-gray-600">打开商店购买物品</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
                  <code className="text-sm font-mono">/hub</code>
                  <span className="text-sm text-gray-600">返回登录服</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
                  <code className="text-sm font-mono">/sit</code>
                  <span className="text-sm text-gray-600">坐下</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
                  <code className="text-sm font-mono">/lay</code>
                  <span className="text-sm text-gray-600">躺下</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}