"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"

interface TeamMember {
  id: string
  uid: string
  qq?: string // 可选字段，仅队长使用
}

interface TeamModalProps {
  teamName: string
  teamColor: string
  captain: TeamMember
  members: TeamMember[]
  isRecruiting?: boolean
}

export function TeamModal({ teamName, teamColor, captain, members, isRecruiting = false }: TeamModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="text-xs bg-transparent">
          <Users className="w-3 h-3 mr-1" />
          查看队员
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <div className={`w-4 h-4 rounded-full bg-${teamColor}-500`}></div>
            <span>{teamName} 队员详情</span>
          </DialogTitle>
          <DialogDescription>
            {isRecruiting ? "队伍正在招募中，欢迎加入！" : "完整的队员名单和联系信息"}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* 队长信息 */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Badge className="mr-2 bg-yellow-100 text-yellow-800">队长</Badge>
              队长信息
            </h3>
            {!isRecruiting ? (
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">游戏ID</label>
                    <div className="text-sm font-mono bg-white p-2 rounded border mt-1">{captain.id}</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">UID</label>
                    <div className="text-sm font-mono bg-white p-2 rounded border mt-1">{captain.uid}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-4 text-center text-gray-500">
                <div className="text-sm">队长招募中</div>
                <div className="text-xs mt-1">等待玩家报名担任队长</div>
              </div>
            )}
          </div>

          {/* 队员信息 */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Badge variant="outline" className="mr-2">
                队员
              </Badge>
              队员名单 ({members.length}/5)
            </h3>
            {members.length > 0 ? (
              <div className="space-y-3">
                {members.map((member, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-600">游戏ID</label>
                        <div className="text-sm font-mono bg-white p-2 rounded border mt-1">{member.id}</div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">UID</label>
                        <div className="text-sm font-mono bg-white p-2 rounded border mt-1">{member.uid}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-4 text-center text-gray-500">
                <div className="text-sm">队员招募中</div>
                <div className="text-xs mt-1">目标招募5名队员</div>
              </div>
            )}
          </div>

          {isRecruiting && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">如何加入队伍？</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• 联系管理员申请加入</li>
                <li>• 在论坛发帖申请</li>
                <li>• 加入服务器后使用相关指令</li>
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
