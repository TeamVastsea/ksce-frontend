import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function TechContributorsSection() {
  const contributors = [
    {
      name: "雪球",
      role: "技术",
      contributions: ["服务端开发", "插件编写", "网站前端"]
    },
    {
      name: "M397749490",
      role: "技术",
      contributions: ["服务器开发", "服务器运维", "数据库运维"]
    },
    {
      name: "郑瑞麟",
      role: "技术",
      contributions: ["插件编写", "测试"]
    },
    {
      name: "羊排",
      role: "技术",
      contributions: ["计分板、Tab编写", "测试", "巡查员"]
    },
    {
      name: "KrumSkuer",
      role: "后期",
      contributions: ["拍摄", "视频剪辑", "测试"]
    },
    {
      name: "CN_Dajichi",
      role: "直播",
      contributions: ["导播", "拍摄"]
    }
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-gray-800">
              技术团队贡献
            </CardTitle>
            <p className="text-center text-gray-600 mt-2">
              感谢每一位团队成员的辛勤付出
            </p>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">姓名</TableHead>
                  <TableHead className="w-[150px]">角色</TableHead>
                  <TableHead>主要贡献</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contributors.map((contributor, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{contributor.name}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{contributor.role}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {contributor.contributions.map((contribution, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {contribution}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 mb-4">等其他专心为服务器付出的巡查员们</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}