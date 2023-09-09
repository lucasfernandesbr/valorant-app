import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Valoras',
  description: 'Check out the Valorant tournament infos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900">{children}</body>
    </html>
  )
}
