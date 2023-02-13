'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react'
import nookies from 'nookies'
import { AuthChangeEvent, Session } from '@supabase/supabase-js'

const ProtectedComponent = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, session } = useSessionContext()
  const supabase = useSupabaseClient()
  const router = useRouter()

  // listen for token changes
  // call setUser and write new token as a cookie
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event: AuthChangeEvent, state: Session | null) => {
      if (_event === 'SIGNED_OUT' || !state?.user) {
        nookies.set(undefined, 'token', '', { path: '/' })
        router.push('/login')
      } else {
        const token = state.access_token
        nookies.set(undefined, 'token', token, { path: '/' })
      }
    })
  }, [])

  useEffect(() => {
    if (!isLoading && (!session || !session.user)) {
      router.push('/login')
    }
  }, [router, session, isLoading])

  return <div>{session && session.user ? children : null}</div>
}

export default ProtectedComponent
