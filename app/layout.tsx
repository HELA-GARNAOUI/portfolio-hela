import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Providers } from '@/components/providers'
import { MouseFollower } from '@/components/mouse-follower'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Hela Garnaoui | Premium Portfolio',
  description: 'Portfolio of Hela Garnaoui - Full Stack Developer, AI Enthusiast, and Software Engineer.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden relative bg-background text-foreground`}>
        <Providers>
          <MouseFollower />
          {/* Animated Background Mesh */}
          <div className="fixed inset-0 z-[-2] min-h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,107,53,0.12),var(--bg-mesh))]"></div>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
