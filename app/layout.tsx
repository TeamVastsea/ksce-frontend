import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KSCE - 夏日特别活动 模拟文明·夏日争霸',
  description: '苦力怕论坛夏日特别活动 模拟文明·夏日争霸',
  keywords: ['Minecraft', '我的世界', '服务器', '苦力怕', 'KSCE', '游戏', '社区'],
  authors: [{ name: 'Vastsea' }],
  creator: 'Vastsea',
  publisher: 'Vastsea',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ksce.klpbbs.cn'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'KSCE - 夏日特别活动 模拟文明·夏日争霸',
    description: '苦力怕论坛夏日特别活动 模拟文明·夏日争霸',
    url: 'https://ksce.klpbbs.cn',
    siteName: 'KSCE',
    images: [
      {
        url: '/klpbbs-logo.svg',
        width: 1200,
        height: 630,
        alt: 'KSCE Logo',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KSCE - 夏日特别活动 模拟文明·夏日争霸',
    description: '苦力怕论坛夏日特别活动 模拟文明·夏日争霸',
    images: ['/klpbbs-logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/klpbbs-logo.ico',
    shortcut: '/klpbbs-logo.ico',
    apple: '/klpbbs-logo.ico',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/klpbbs-logo.ico" sizes="any" />
        <link rel="icon" href="/klpbbs-logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/klpbbs-logo.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
