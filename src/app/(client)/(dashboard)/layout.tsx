// Components
import Navbar from '@/components/Layout/Navbar'
import Sidebar from '@/components/Layout/Sidebar'

// Hocs
import ProtectedComponent from '@/hocs/ProtectedComponent'
import SupabaseProvider from '@/hocs/SupabaseProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme='light-custom'>
      <head />
      <body>
        <SupabaseProvider>
          <ProtectedComponent>
            <div>
              <Navbar />
              <div className='flex'>
                <Sidebar />
                <div className='w-full h-full bg-base-200'>{children}</div>
              </div>
            </div>
          </ProtectedComponent>
        </SupabaseProvider>
      </body>
    </html>
  )
}
