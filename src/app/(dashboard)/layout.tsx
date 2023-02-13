import ProtectedComponent from '../../hocs/ProtectedComponent'
import SupabaseProvider from '../../hocs/SupabaseProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme='light-custom'>
      <head />
      <body>
        <SupabaseProvider>
          <ProtectedComponent>{children}</ProtectedComponent>
        </SupabaseProvider>
      </body>
    </html>
  )
}
