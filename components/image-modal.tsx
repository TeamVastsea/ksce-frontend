"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"

interface ImageModalProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function ImageModal({ src, alt, width, height, className }: ImageModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={width}
            height={height}
            className={`${className} hover:scale-105 transition-transform duration-300`}
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <div className="relative">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={width * 2}
            height={height * 2}
            className="w-full h-auto max-h-[85vh] object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
