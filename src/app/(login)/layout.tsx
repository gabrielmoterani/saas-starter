'use client'

//* * External Components */
import { Toaster } from 'react-hot-toast'

//* * HOCS */
import SupabaseProvider from '../../hocs/SupabaseProvider'

export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme='light-custom'>
      <head />
      <body>
        <SupabaseProvider>{children}</SupabaseProvider>
        <Toaster position='bottom-center' />
      </body>
    </html>
  )
}
