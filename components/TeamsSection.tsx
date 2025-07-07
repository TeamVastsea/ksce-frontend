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
                    <tr className="hover:bg-pink-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                          <span className="font-semibold text-pink-800">A组</span>
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
                            teamColor="pink"
                            captain={{
                              id: "Cloudlet_",
                              uid: "200006",
                              qq: "291746302",
                            }}
                            members={[
                              { id: "Player_001", uid: "1000000001" },
                              { id: "Player_002", uid: "1000000002" },
                              { id: "Player_003", uid: "1000000003" },
                              { id: "Player_004", uid: "1000000004" },
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
                    <tr className="hover:bg-yellow-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="font-semibold text-yellow-800">B组</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-800">FuNainGer</div>
                          <div className="text-sm text-gray-500">UID: 43497</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="text-sm text-gray-800">5名队员</div>
                            <div className="text-xs text-gray-500">点击查看详情</div>
                          </div>
                          <TeamModal
                            teamName="B组"
                            teamColor="yellow"
                            captain={{
                              id: "FuNainGer",
                              uid: "43497",
                              qq: "2494585842"
                            }}
                            members={[
                              { id: "BluePlayer_001", uid: "2000000001" },
                              { id: "BluePlayer_002", uid: "2000000002" },
                              { id: "BluePlayer_003", uid: "2000000003" },
                              { id: "BluePlayer_004", uid: "2000000004" },
                            ]}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600">
                          <div>QQ: 2494585842</div>
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
                          <span className="font-semibold text-blue-800">C组</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-800">FoldedBaton3698</div>
                          <div className="text-sm text-gray-500">UID: 417460</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="text-sm text-gray-800">5名队员</div>
                            <div className="text-xs text-gray-500">点击查看详情</div>
                          </div>
                          <TeamModal
                            teamName="C组"
                            teamColor="blue"
                            captain={{
                              id: "FoldedBaton3698",
                              uid: "417460",
                              qq: "2604679110"
                            }}
                            members={[
                              { id: "GreenPlayer_001", uid: "3000000001" },
                              { id: "GreenPlayer_002", uid: "3000000002" },
                              { id: "GreenPlayer_003", uid: "3000000003" },
                              { id: "GreenPlayer_004", uid: "3000000004" },
                            ]}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600">
                          <div>QQ: 2604679110</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">已组建</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="font-semibold text-green-800">D组</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-800">RoundRacer71907</div>
                          <div className="text-sm text-gray-500">UID: 288954</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="text-sm text-gray-800">5名队员</div>
                            <div className="text-xs text-gray-500">点击查看详情</div>
                          </div>
                          <TeamModal
                            teamName="D组"
                            teamColor="green"
                            captain={{
                              id: "RoundRacer71907",
                              uid: "288954",
                              qq: "705185089"
                            }}
                            members={[
                              { id: "YellowPlayer_001", uid: "4000000001" },
                              { id: "YellowPlayer_002", uid: "4000000002" },
                              { id: "YellowPlayer_003", uid: "4000000003" },
                              { id: "YellowPlayer_004", uid: "4000000004" },
                            ]}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600">
                          <div>QQ: 705185089</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">已组建</Badge>
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
          <Card className="border-pink-200 bg-pink-50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2 text-pink-800">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
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
                  teamColor="pink"
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
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2 text-yellow-800">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>B组</span>
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
                      <span className="text-sm font-medium">FuNainGer</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">QQ:</span>
                      <span className="text-sm">2494585842</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">UID:</span>
                      <span className="text-sm">43497</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">队员名单</h4>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-800">BluePlayer_001</div>
                      <div className="text-gray-800">BluePlayer_002</div>
                      <div className="text-gray-800">BluePlayer_003</div>
                      <div className="text-gray-800">BluePlayer_004</div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 text-center">共5名队员</div>
                  </div>
                </div>
                <TeamModal
                  teamName="B组"
                  teamColor="yellow"
                  captain={{
                    id: "FuNainGer",
                    uid: "43497",
                    qq: "2494585842",
                  }}
                  members={[
                    { id: "BluePlayer_001", uid: "2000000001" },
                    { id: "BluePlayer_002", uid: "2000000002" },
                    { id: "BluePlayer_003", uid: "2000000003" },
                    { id: "BluePlayer_004", uid: "2000000004" },
                  ]}
                />
              </div>
            </CardContent>
          </Card>

          {/* C组 */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2 text-blue-800">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>C组</span>
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
                      <span className="text-sm font-medium">FoldedBaton3698</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">QQ:</span>
                      <span className="text-sm">2604679110</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">UID:</span>
                      <span className="text-sm">417460</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">队员名单</h4>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-800">GreenPlayer_001</div>
                      <div className="text-gray-800">GreenPlayer_002</div>
                      <div className="text-gray-800">GreenPlayer_003</div>
                      <div className="text-gray-800">GreenPlayer_004</div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 text-center">共5名队员</div>
                  </div>
                </div>
                <TeamModal
                  teamName="C组"
                  teamColor="blue"
                  captain={{
                    id: "FoldedBaton3698",
                    uid: "417460",
                    qq: "2604679110",
                  }}
                  members={[
                    { id: "GreenPlayer_001", uid: "3000000001" },
                    { id: "GreenPlayer_002", uid: "3000000002" },
                    { id: "GreenPlayer_003", uid: "3000000003" },
                    { id: "GreenPlayer_004", uid: "3000000004" },
                  ]}
                />
              </div>
            </CardContent>
          </Card>

          {/* D组 */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2 text-green-800">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
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
                  <div className="bg-white p-3 rounded-lg space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">姓名:</span>
                      <span className="text-sm font-medium">RoundRacer71907</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">QQ:</span>
                      <span className="text-sm">705185089</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">UID:</span>
                      <span className="text-sm">288954</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">队员名单</h4>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-800">YellowPlayer_001</div>
                      <div className="text-gray-800">YellowPlayer_002</div>
                      <div className="text-gray-800">YellowPlayer_003</div>
                      <div className="text-gray-800">YellowPlayer_004</div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 text-center">共5名队员</div>
                  </div>
                </div>
                <TeamModal
                  teamName="D组"
                  teamColor="green"
                  captain={{
                    id: "RoundRacer71907",
                    uid: "288954",
                    qq: "705185089",
                  }}
                  members={[
                    { id: "YellowPlayer_001", uid: "4000000001" },
                    { id: "YellowPlayer_002", uid: "4000000002" },
                    { id: "YellowPlayer_003", uid: "4000000003" },
                    { id: "YellowPlayer_004", uid: "4000000004" },
                  ]}
                />
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