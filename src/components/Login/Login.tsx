'use client'

import React, { useRef, useState } from 'react'

// ** External Components
import { SlEnvolope, SlKey } from 'react-icons/sl'
import toast from 'react-hot-toast'

//* * Supabase */
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Provider } from '@supabase/supabase-js'
import ProvidersContainer from './ProvidersContainer'

const Login = ({ changeLoginState }: { changeLoginState: Function }) => {
  const supabase = useSupabaseClient()
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const [isLoading, setLoading] = useState(false)

  const handleProvider = async (provider: Provider) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
      })
      if (error) throw error
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = async () => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithPassword({
        // @ts-ignore
        email: emailRef?.current?.value,
        // @ts-ignore
        password: passwordRef?.current?.value,
      })
      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='w-full'>
      <h1 className='text-center text-xl font-bold'>Welcome back!</h1>
      <p className='text-center text-md opacity-60'>Login using</p>
      <div className='mt-5'>
        <ProvidersContainer
          onProviderClick={handleProvider}
          providers={['google', 'twitter', 'facebook']}
        />
      </div>
      <span className='divider'>or</span>
      <div className='w-full'>
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <div className='input input-md input-bordered w-full flex items-center'>
            <SlEnvolope />
            <input
              ref={emailRef}
              type='email'
              placeholder='your@email.com'
              className='input input-sm input-ghost w-full focus:outline-none'
            />
          </div>
        </div>
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Password</span>
          </label>
          <div className='input input-md input-bordered w-full flex items-center'>
            <SlKey />
            <input
              ref={passwordRef}
              type='password'
              placeholder='*******'
              className='input input-sm input-ghost w-full focus:outline-none'
            />
          </div>
          <span
            className='text-sm text-gray-600 text-right opacity-40 cursor-pointer'
            onClick={() => changeLoginState('forgotpassword')}
          >
            Forgot your password?
          </span>
        </div>
      </div>
      <div className='mt-10'>
        <button
          onClick={handleLogin}
          className={`btn btn-outline btn-primary w-full ${isLoading ? 'loading disabled' : ''}`}
        >
          {isLoading ? '' : 'Sign In'}
        </button>
      </div>
    </div>
  )
}

export default Login
