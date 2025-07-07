"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Sword, Copy, Check } from "lucide-react"
import { ImageModal } from "@/components/image-modal"
import { useState } from "react"

function ServerConnectionInfo() {
  const [copiedJava, setCopiedJava] = useState(false)
  const [copiedBedrock, setCopiedBedrock] = useState(false)

  const copyToClipboard = async (text: string, type: 'java' | 'bedrock') => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === 'java') {
        setCopiedJava(true)
        setTimeout(() => setCopiedJava(false), 2000)
      } else {
        setCopiedBedrock(true)
        setTimeout(() => setCopiedBedrock(false), 2000)
      }
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

  return (
    <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-lg border max-w-2xl mx-auto">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">服务器连接信息</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <div className="font-bold text-blue-800 mb-2">Java版</div>
          <div className="text-sm text-gray-600 mb-1">服务器地址</div>
          <div className="flex items-center justify-center gap-2">
            <code className="text-sm bg-white px-2 py-1 rounded border">play.klpbbs.cn</code>
            <Button
              size="sm"
              variant="ghost"
              className="h-6 w-6 p-0"
              onClick={() => copyToClipboard('play.klpbbs.cn', 'java')}
            >
              {copiedJava ? (
                <Check className="h-3 w-3 text-green-600" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </Button>
          </div>
          <div className="text-sm text-gray-600 mt-2">端口: 40012</div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="font-bold text-green-800 mb-2">基岩版</div>
          <div className="text-sm text-gray-600 mb-1">服务器地址</div>
          <div className="flex items-center justify-center gap-2">
            <code className="text-sm bg-white px-2 py-1 rounded border">play.klpbbs.cn</code>
            <Button size="sm" onClick={() => {window.location.href = "minecraft://?addExternalServer=苦力怕论坛模拟文明活动|play.klpbbs.cn:19132"}}>
              导入游戏
            </Button>
            {/*<Button*/}
            {/*  size="sm"*/}
            {/*  variant="ghost"*/}
            {/*  className="h-6 w-6 p-0"*/}
            {/*  onClick={() => copyToClipboard('play.klpbbs.cn', 'bedrock')}*/}
            {/*>*/}
            {/*  {copiedBedrock ? (*/}
            {/*    <Check className="h-3 w-3 text-green-600" />*/}
            {/*  ) : (*/}
            {/*    <Copy className="h-3 w-3" />*/}
            {/*  )}*/}
            {/*</Button>*/}
          </div>
          <div className="text-sm text-gray-600 mt-2">端口: 19132</div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">夏日特别活动</Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">模拟文明·夏日争霸</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          历经五天紧张的服务器制作，苦力怕论坛夏日特别活动现已正式开始！
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center space-x-2 text-gray-700">
            <Calendar className="w-5 h-5" />
            <span>活动时间：7月7日 - 7月27日</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <Sword className="w-5 h-5" />
            <span>最终决战：7月27日</span>
          </div>
        </div>

        {/* Image Component */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <ImageModal
                src="/map.png"
                alt="夏日争霸活动宣传图"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </CardContent>
          </Card>
          <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">从左上角起，顺时针依次为A、B、C、D队伍</p>
        </div>
        </div>

        <ServerConnectionInfo />
      </div>
    </section>
  )
}
