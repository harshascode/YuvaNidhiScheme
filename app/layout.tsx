import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yuva Nidhi Scheme',
  description: 'The Karnataka Yuva Nidhi Scheme is a promise of the Congress Party. Under this scheme, the government will provide financial aid to the educated, unemployed youth in the state.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=2, user-scalable=no',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-poppins">{children}</body>
    </html>
  )
}
