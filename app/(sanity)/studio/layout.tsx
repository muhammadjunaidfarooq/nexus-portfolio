import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nexus Portfolio Studio',
  description: 'Nexus Portfolio Studio',
}


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default Layout
