import '@Styles/main.global.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your App Template',
  description: 'description app (template by @Alfr3XD)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " sm:overflow-y-auto"}>
        {children}
      </body>
    </html>
  )
}
