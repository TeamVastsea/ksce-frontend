import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh_CN">
      <body>{children}</body>
    </html>
  )
}
