"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Github, Code, Gamepad2 } from "lucide-react"

export function OpenSourceSection() {
  const projects = [
    {
      name: "CustomMaxHealth",
      description: "一个基于 KotlinMC 的 Minecraft 插件，用于自定义玩家的血量上限",
      features: ["自定义血量上限", "数据持久化", "热重载配置", "权限系统"],
      tech: ["Kotlin", "KotlinMC", "Spigot"],
      icon: <Gamepad2 className="w-6 h-6" />,
      repo: "SnowballXueQiu/CustomMaxHealth"
    },
    {
      name: "FastBackToLobby",
      description: "快速返回大厅服务器的插件，支持 BungeeCord 和 Velocity 代理服务器",
      features: ["快速传送", "多语言支持", "冷却系统", "音效支持"],
      tech: ["Java", "Bukkit", "BungeeCord"],
      icon: <Code className="w-6 h-6" />,
      repo: "SnowballXueQiu/FastBackToLobby"
    },
    {
      name: "KillReward",
      description: "适用于高版本Minecraft服务端的击杀奖励插件，支持多类型生物奖励",
      features: ["击杀奖励", "PVP奖励", "经济集成", "多语言"],
      tech: ["Java", "Spigot", "Vault"],
      icon: <Gamepad2 className="w-6 h-6" />,
      repo: "SnowballXueQiu/KillReward"
    },
    {
      name: "CustomSpawn",
      description: "轻量级插件，用于修复出生点的位置和方向",
      features: ["出生点设置", "轻量级", "简单易用", "稳定可靠"],
      tech: ["Java", "Spigot", "Paper"],
      icon: <Code className="w-6 h-6" />,
      repo: "TeamVastsea/CustomSpawn"
    },
    {
      name: "PermSpawnpoint",
      description: "一个基于权限组的出生点插件，适用于 Paper/Spigot/Bukkit 服务器",
      features: ["权限组出生点", "多世界支持", "视角控制", "国际化支持"],
      tech: ["Kotlin", "Paper", "Spigot", "Vault"],
      icon: <Gamepad2 className="w-6 h-6" />,
      repo: "SnowballXueQiu/PermSpawnpoint"
    }
  ]

  const handleStarProject = (repo: string) => {
    window.open(`https://github.com/${repo}`, '_blank')
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            开源项目展示
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们团队开发的用于本项目中的 Minecraft 服务器插件，致力于提升游戏体验。如果您觉得有用，欢迎给我们的项目点个 Star ⭐
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {project.icon}
                  </div>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">主要功能</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">技术栈</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      onClick={() => handleStarProject(project.repo)}
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                      size="sm"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      <Star className="w-4 h-4 mr-1" />
                      Star 项目
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            感谢您的支持！您的 Star 是我们持续开发的动力 💪
          </p>
        </div>
      </div>
    </section>
  )
}