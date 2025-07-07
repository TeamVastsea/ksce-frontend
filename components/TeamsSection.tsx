import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TeamModal } from "@/components/team-modal"

export function TeamsSection() {
  return (
    <section id="teams" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">队伍信息</h2>

        {/* Desktop Table */}
        <div className="hidden lg:block">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">队伍</th>
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
                            <div className="text-sm text-gray-800">21名队员</div>
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
                              { id: "sectlying", uid: "489867" },
                              { id: "domekho", uid: "2057755" },
                              { id: "Aucking", uid: "4797" },
                              { id: "clevsr", uid: "502167" },
                              { id: "xingyieml", uid: "10286" },
                              { id: "Xiaolongbao6669", uid: "1902032" },
                              { id: "Keaimaonan", uid: "1940223" },
                              { id: "zzzzzzxxx001", uid: "2107060" },
                              { id: "pigeon145", uid: "1745053" },
                              { id: "Monkey52795", uid: "1665152" },
                              { id: "lilinzheng", uid: "1168204" },
                              { id: "Xiao_ben5201", uid: "38245" },
                              { id: "hzjsk666", uid: "1968323" },
                              { id: "Chenxi306", uid: "228849" },
                              { id: "0_LING", uid: "746042" },
                              { id: "Firefox_Mozilla", uid: "27253" },
                              { id: "nan1152", uid: "1756237" },
                              { id: "BaikeVQuanshu", uid: "9871" },
                              { id: "tyty2062", uid: "1898" },
                              { id: "XFFF_Zero", uid: "124299" },
                              { id: "douzimc1389", uid: "1870193" },
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
                            <div className="text-sm text-gray-800">20名队员</div>
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
                              { id: "RoundRacer71907", uid: "288954" },
                              { id: "Matsukawa6448", uid: "15528" },
                              { id: "WHFDNOG123", uid: "648938" },
                              { id: "ziyouyouzyew", uid: "45497" },
                              { id: "AlohaTUT", uid: "2043952" },
                              { id: "tianbian233", uid: "188777" },
                              { id: "sputniksweet", uid: "2108609" },
                              { id: "ninabi6", uid: "1778137" },
                              { id: "GuangCaiYiYi_ovo", uid: "446872" },
                              { id: "YYDSNB6667234", uid: "1940951" },
                              { id: "lanpinzhong_CN", uid: "2108321" },
                              { id: "TheZhanTu", uid: "16812" },
                              { id: "a0007539", uid: "1918286" },
                              { id: "Believer8302", uid: "47661" },
                              { id: "Sloth240", uid: "1873068" },
                              { id: "yhmtxt", uid: "197841" },
                              { id: "Yes_NewBeeBar", uid: "254543" },
                              { id: "li Minecraft249", uid: "2107590" },
                              { id: "clevsr", uid: "502167" },
                              { id: "WanWu05591", uid: "1601265" },
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
                            <div className="text-sm text-gray-800">20名队员</div>
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
                              { id: "11mo", uid: "1045115" },
                              { id: "Han_Jiang23", uid: "878249" },
                              { id: "Gfunhud", uid: "788094" },
                              { id: "XingYu254", uid: "2049074" },
                              { id: "xbxhmm114514", uid: "23377" },
                              { id: "xin_ran01", uid: "2006555" },
                              { id: "WengQing_", uid: "2106332" },
                              { id: "Starry144ta", uid: "1503782" },
                              { id: "key556", uid: "2107870" },
                              { id: "Macrodd2022", uid: "2107026" },
                              { id: "Tectalfsp8014", uid: "1731643" },
                              { id: "ian_0401", uid: "2006662" },
                              { id: "xiyan037037", uid: "1813198" },
                              { id: "Amanouo", uid: "205741" },
                              { id: "Cloudlet_", uid: "200006" },
                              { id: "RumblyPlum7543", uid: "2106835" },
                              { id: "AfternoonTree01", uid: "934947" },
                              { id: "ZnianXgang", uid: "3661" },
                              { id: "fmovi", uid: "800000" },
                              { id: "guizhidao233", uid: "2090732" },
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
                            <div className="text-sm text-gray-800">20名队员</div>
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
                              { id: "HazyBuckle44828", uid: "2107872" },
                              { id: "QOD_jian", uid: "332987" },
                              { id: "Folia2044", uid: "2108625" },
                              { id: "HotRecord530341", uid: "787569" },
                              { id: "基岩版：xinyue1372 Java：QFDC", uid: "175670" },
                              { id: "a boring coin", uid: "2098625" },
                              { id: "huangtianhang", uid: "1339977" },
                              { id: "NH558J25220", uid: "2062871" },
                              { id: "Kastname", uid: "582950" },
                              { id: "The e7107", uid: "431913" },
                              { id: "hubhub114514", uid: "2108595" },
                              { id: "LL29", uid: "2108565" },
                              { id: "FuNainGer", uid: "43497" },
                              { id: "Yumixf22111234", uid: "1736399" },
                              { id: "_zhengxiaoyan_", uid: "2107064" },
                              { id: "TonierLive2088", uid: "672162" },
                              { id: "dreamsdreams140", uid: "1910668" },
                              { id: "FoldedBaton3698", uid: "417460" },
                              { id: "puer12356790", uid: "698380" },
                              { id: "Gezelli", uid: "2106596" },
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
                      <span className="text-sm text-gray-600">UID:</span>
                      <span className="text-sm">200006</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">队员名单</h4>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-800">sectlying</div>
                      <div className="text-gray-800">domekho</div>
                      <div className="text-gray-800">Aucking</div>
                      <div className="text-gray-800">clevsr</div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 text-center">共20名队员</div>
                  </div>
                </div>
                <TeamModal
                  teamName="A组"
                  teamColor="pink"
                  captain={{
                    id: "Cloudlet_",
                    uid: "200006",
                  }}
                  members={[
                    { id: "sectlying", uid: "489867" },
                    { id: "domekho", uid: "2057755" },
                    { id: "Aucking", uid: "4797" },
                    { id: "clevsr", uid: "502167" },
                    { id: "xingyieml", uid: "10286" },
                    { id: "Xiaolongbao6669", uid: "1902032" },
                    { id: "Keaimaonan", uid: "1940223" },
                    { id: "zzzzzzxxx001", uid: "2107060" },
                    { id: "pigeon145", uid: "1745053" },
                    { id: "Monkey52795", uid: "1665152" },
                    { id: "lilinzheng", uid: "1168204" },
                    { id: "Xiao_ben5201", uid: "38245" },
                    { id: "hzjsk666", uid: "1968323" },
                    { id: "Chenxi306", uid: "228849" },
                    { id: "0_LING", uid: "746042" },
                    { id: "Firefox_Mozilla", uid: "27253" },
                    { id: "nan1152", uid: "1756237" },
                    { id: "BaikeVQuanshu", uid: "9871" },
                    { id: "tyty2062", uid: "1898" },
                    { id: "XFFF_Zero", uid: "124299" },
                    { id: "douzimc1389", uid: "1870193" },
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
                      <span className="text-sm font-medium">PromptGuitar219</span>
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
                      <div className="text-gray-800">RoundRacer71907</div>
                      <div className="text-gray-800">Matsukawa6448</div>
                      <div className="text-gray-800">WHFDNOG123</div>
                      <div className="text-gray-800">ziyouyouzyew</div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 text-center">共20名队员</div>
                  </div>
                </div>
                <TeamModal
                  teamName="B组"
                  teamColor="yellow"
                  captain={{
                    id: "FuNainGer",
                    uid: "43497",
                  }}
                  members={[
                    { id: "RoundRacer71907", uid: "288954" },
                    { id: "Matsukawa6448", uid: "15528" },
                    { id: "WHFDNOG123", uid: "648938" },
                    { id: "ziyouyouzyew", uid: "45497" },
                    { id: "AlohaTUT", uid: "2043952" },
                    { id: "tianbian233", uid: "188777" },
                    { id: "sputniksweet", uid: "2108609" },
                    { id: "ninabi6", uid: "1778137" },
                    { id: "GuangCaiYiYi_ovo", uid: "446872" },
                    { id: "YYDSNB6667234", uid: "1940951" },
                    { id: "lanpinzhong_CN", uid: "2108321" },
                    { id: "TheZhanTu", uid: "16812" },
                    { id: "a0007539", uid: "1918286" },
                    { id: "Believer8302", uid: "47661" },
                    { id: "Sloth240", uid: "1873068" },
                    { id: "yhmtxt", uid: "197841" },
                    { id: "Yes_NewBeeBar", uid: "254543" },
                    { id: "li Minecraft249", uid: "2107590" },
                    { id: "clevsr", uid: "502167" },
                    { id: "WanWu05591", uid: "1601265" },
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
                      <span className="text-sm text-gray-600">UID:</span>
                      <span className="text-sm">417460</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">队员名单</h4>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-800">11mo</div>
                      <div className="text-gray-800">Han_Jiang23</div>
                      <div className="text-gray-800">Gfunhud</div>
                      <div className="text-gray-800">XingYu254</div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 text-center">共20名队员</div>
                  </div>
                </div>
                <TeamModal
                  teamName="C组"
                  teamColor="blue"
                  captain={{
                    id: "FoldedBaton3698",
                    uid: "417460",
                  }}
                  members={[
                    { id: "11mo", uid: "1045115" },
                    { id: "Han_Jiang23", uid: "878249" },
                    { id: "Gfunhud", uid: "788094" },
                    { id: "XingYu254", uid: "2049074" },
                    { id: "xbxhmm114514", uid: "23377" },
                    { id: "xin_ran01", uid: "2006555" },
                    { id: "WengQing_", uid: "2106332" },
                    { id: "Starry144ta", uid: "1503782" },
                    { id: "key556", uid: "2107870" },
                    { id: "Macrodd2022", uid: "2107026" },
                    { id: "Tectalfsp8014", uid: "1731643" },
                    { id: "ian_0401", uid: "2006662" },
                    { id: "xiyan037037", uid: "1813198" },
                    { id: "Amanouo", uid: "205741" },
                    { id: "Cloudlet_", uid: "200006" },
                    { id: "RumblyPlum7543", uid: "2106835" },
                    { id: "AfternoonTree01", uid: "934947" },
                    { id: "ZnianXgang", uid: "3661" },
                    { id: "fmovi", uid: "800000" },
                    { id: "guizhidao233", uid: "2090732" },
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
                      <span className="text-sm font-medium">RoundRacer71907</span>
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
                      <div className="text-gray-800">HazyBuckle44828</div>
                      <div className="text-gray-800">QOD_jian</div>
                      <div className="text-gray-800">Folia2044</div>
                      <div className="text-gray-800">HotRecord530341</div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 text-center">共20名队员</div>
                  </div>
                </div>
                <TeamModal
                  teamName="D组"
                  teamColor="green"
                  captain={{
                    id: "RoundRacer71907",
                    uid: "288954",
                  }}
                  members={[
                    { id: "HazyBuckle44828", uid: "2107872" },
                    { id: "QOD_jian", uid: "332987" },
                    { id: "Folia2044", uid: "2108625" },
                    { id: "HotRecord530341", uid: "787569" },
                    { id: "基岩版：xinyue1372 Java：QFDC", uid: "175670" },
                    { id: "a boring coin", uid: "2098625" },
                    { id: "huangtianhang", uid: "1339977" },
                    { id: "NH558J25220", uid: "2062871" },
                    { id: "Kastname", uid: "582950" },
                    { id: "The e7107", uid: "431913" },
                    { id: "hubhub114514", uid: "2108595" },
                    { id: "LL29", uid: "2108565" },
                    { id: "PromptGuitar219", uid: "43497" },
                    { id: "Yumixf22111234", uid: "1736399" },
                    { id: "_zhengxiaoyan_", uid: "2107064" },
                    { id: "TonierLive2088", uid: "672162" },
                    { id: "dreamsdreams140", uid: "1910668" },
                    { id: "FoldedBaton3698", uid: "417460" },
                    { id: "puer12356790", uid: "698380" },
                    { id: "Gezelli", uid: "2106596" },
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