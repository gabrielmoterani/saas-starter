/* eslint-disable @typescript-eslint/no-throw-literal */
import { createClient } from '@supabase/supabase-js'
import type { IDatabase } from '@/interfaces'

// Note: supabaseAdmin uses the SERVICE_ROLE_KEY which you must only use in a secure server-side context
// as it has admin privileges and overwrites RLS policies!
export const supabaseAdmin = createClient<IDatabase>(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY || '',
)
