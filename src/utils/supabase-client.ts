import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { cache } from 'react'
import { IDatabase } from '@/interfaces'

export const createServerSupabaseClient = cache(() =>
  createServerComponentClient<IDatabase>({ cookies }),
)
