import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TeamModal } from "@/components/team-modal"

export function TeamsSection() {
  return (
    <section id="teams" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">分组信息</h2>

        {/* Desktop Table */}
        <div className="hidden lg:block">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">组别</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">队长</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">队员</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">联系方式</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">状态</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-red-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="font-semibold text-red-800">A组</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-800">Cloudlet_</div>
                          <div className="text-sm text-gray-500">UID: 200006</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="text-sm text-gray-800">5名队员</div>
                            <div className="text-xs text-gray-500">点击查看详情</div>
                          </div>
                          <TeamModal
                            teamName="A组"
                            teamColor="red"
                            captain={{
                              id: "Cloudlet_",
                              uid: "200006",
                              qq: "291746302",
                            }}
                            members={[
                              { id: "Player_001", uid: "1000000001", qq: "1234567890" },
                              { id: "Player_002", uid: "1000000002", qq: "1234567891" },
                              { id: "Player_003", uid: "1000000003", qq: "1234567892" },
                              { id: "Player_004", uid: "1000000004", qq: "1234567893" },
                            ]}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600">
                          <div>QQ: 291746302</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">已组建</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="font-semibold text-blue-800">B组</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-500">待定</div>
                          <div className="text-sm text-gray-400">UID: -</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="text-sm text-gray-500">招募中...</div>
                            <div className="text-xs text-gray-400">目标5名队员</div>
                          </div>
                          <TeamModal
                            teamName="B组"
                            teamColor="blue"
                            captain={{
                              id: "",
                              uid: "",
                              qq: ""
                            }}
                            members={[]}
                            isRecruiting={true}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-400">-</div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="outline" className="text-gray-600 border-gray-300">
                          组建中
                        </Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="font-semibold text-green-800">C组</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-500">待定</div>
                          <div className="text-sm text-gray-400">UID: -</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="text-sm text-gray-500">招募中...</div>
                            <div className="text-xs text-gray-400">目标5名队员</div>
                          </div>
                          <TeamModal
                            teamName="C组"
                            teamColor="green"
                            captain={{
                              id: "",
                              uid: "",
                              qq: ""
                            }}
                            members={[]}
                            isRecruiting={true}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-400">-</div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="outline" className="text-gray-600 border-gray-300">
                          组建中
                        </Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-yellow-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="font-semibold text-yellow-800">D组</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-500">待定</div>
                          <div className="text-sm text-gray-400">UID: -</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="text-sm text-gray-500">招募中...</div>
                            <div className="text-xs text-gray-400">目标5名队员</div>
                          </div>
                          <TeamModal
                            teamName="D组"
                            teamColor="yellow"
                            captain={{
                              id: "",
                              uid: "",
                              qq: ""
                            }}
                            members={[]}
                            isRecruiting={true}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-400">-</div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="outline" className="text-gray-600 border-gray-300">
                          组建中
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {/* A组 */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2 text-red-800">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>A组</span>
                </CardTitle>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">已组建</Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">队长信息</h4>
                  <div className="bg-white p-3 rounded-lg space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">姓名:</span>
                      <span className="text-sm font-medium">Cloudlet_</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">QQ:</span>
                      <span className="text-sm">291746302</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">UID:</span>
                      <span className="text-sm">200006</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">队员名单</h4>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-800">Player_001</div>
                      <div className="text-gray-800">Player_002</div>
                      <div className="text-gray-800">Player_003</div>
                      <div className="text-gray-800">Player_004</div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 text-center">共5名队员</div>
                  </div>
                </div>
                <TeamModal
                  teamName="A组"
                  teamColor="red"
                  captain={{
                    id: "Cloudlet_",
                    uid: "200006",
                    qq: "291746302",
                  }}
                  members={[
                    { id: "Player_001", uid: "1000000001", qq: "1234567890" },
                    { id: "Player_002", uid: "1000000002", qq: "1234567891" },
                    { id: "Player_003", uid: "1000000003", qq: "1234567892" },
                    { id: "Player_004", uid: "1000000004", qq: "1234567893" },
                  ]}
                />
              </div>
            </CardContent>
          </Card>

          {/* B组 */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2 text-blue-800">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>B组</span>
                </CardTitle>
                <Badge variant="outline" className="text-gray-600 border-gray-300">
                  组建中
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">队长信息</h4>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-center text-gray-500">
                      <div className="text-sm">队长招募中</div>
                      <div className="text-xs mt-1">等待玩家报名</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">队员名单</h4>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-center text-gray-500">
                      <div className="text-sm">招募中...</div>
                      <div className="text-xs mt-1">目标5名队员</div>
                    </div>
                  </div>
                </div>
                <TeamModal teamName="B组" teamColor="blue" captain={{
                  id: "",
                  uid: "",
                  qq: ""
                }} members={[]} isRecruiting={true} />
              </div>
            </CardContent>
          </Card>

          {/* C组 */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2 text-green-800">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>C组</span>
                </CardTitle>
                <Badge variant="outline" className="text-gray-600 border-gray-300">
                  组建中
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">队长信息</h4>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-center text-gray-500">
                      <div className="text-sm">队长招募中</div>
                      <div className="text-xs mt-1">等待玩家报名</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">队员名单</h4>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-center text-gray-500">
                      <div className="text-sm">招募中...</div>
                      <div className="text-xs mt-1">目标5名队员</div>
                    </div>
                  </div>
                </div>
                <TeamModal teamName="C组" teamColor="green" captain={{
                  id: "",
                  uid: "",
                  qq: ""
                }} members={[]} isRecruiting={true} />
              </div>
            </CardContent>
          </Card>

          {/* D组 */}
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2 text-yellow-800">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>D组</span>
                </CardTitle>
                <Badge variant="outline" className="text-gray-600 border-gray-300">
                  组建中
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">队长信息</h4>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-center text-gray-500">
                      <div className="text-sm">队长招募中</div>
                      <div className="text-xs mt-1">等待玩家报名</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">队员名单</h4>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-center text-gray-500">
                      <div className="text-sm">招募中...</div>
                      <div className="text-xs mt-1">目标5名队员</div>
                    </div>
                  </div>
                </div>
                <TeamModal teamName="D组" teamColor="yellow" captain={{
                  id: "",
                  uid: "",
                  qq: ""
                }} members={[]} isRecruiting={true} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">分组采用随机分配</p>
        </div>
      </div>
    </section>
  )
}