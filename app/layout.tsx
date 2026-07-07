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
  title: 'Garnaoui Hela',
  description: 'Portfolio of Garnaoui Hela - Full Stack Developer and AI Enthusiast.',
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' }
    ]
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body suppressHydrationWarning className={`${inter.variable} font-sans antialiased overflow-x-hidden relative bg-background text-foreground`}>
        <Providers>
          <MouseFollower />
          {/* Animated Background Mesh */}
          <div className="fixed inset-0 z-[-2] min-h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,107,53,0.12),var(--bg-mesh))]"></div>
          <main className="flex flex-col min-h-screen w-full overflow-x-hidden">
            {children}
          </main>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
