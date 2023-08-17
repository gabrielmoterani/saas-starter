import '@/styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme='light-custom'>
      <head />
      <body>{children}</body>
    </html>
  )
}
