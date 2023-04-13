'use client'

import React, { useRef, useState } from 'react'

// ** External Components
import { SlEnvolope, SlKey, SlUser } from 'react-icons/sl'
import toast from 'react-hot-toast'

//* * Supabase */
import { useSupabaseClient } from '@supabase/auth-helpers-react'
// import { useRouter } from 'next/navigation'

const SignUp = ({ changeLoginState }: { changeLoginState: Function }) => {
  const supabase = useSupabaseClient()
  const emailRef = useRef(null)
  const nameRef = useRef(null)
  const passwordRef = useRef(null)
  const [isLoading, setLoading] = useState(false)
  //   const router = useRouter()

  const handleSignUp = async () => {
    // @ts-expect-error
    const [name, ...lastName] = nameRef.current.value.split(' ')
    try {
      setLoading(true)
      const { error } = await supabase.auth.signUp({
        // @ts-ignore
        email: emailRef?.current?.value,
        // @ts-ignore
        password: passwordRef?.current?.value,
        options: {
          emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
          data: {
            first_name: name,
            last_name: lastName.join(' '),
          },
        },
      })
      if (error) throw error
      toast.success(
        'Welcome! We sent you an confirmation e-mail. Please confirm your email before continue',
      )
      changeLoginState('login')
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
      <h1 className='text-center text-xl font-bold'>Welcome!</h1>
      <p className='text-center text-md opacity-60'>Signup now</p>
      <div className='w-full'>
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Name</span>
          </label>
          <div className='input input-md input-bordered w-full flex items-center'>
            <SlUser />
            <input
              ref={nameRef}
              type='text'
              placeholder='Type your name'
              className='input input-sm input-ghost w-full focus:outline-none'
            />
          </div>
        </div>
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
        </div>
      </div>
      <div className='mt-10'>
        <button
          onClick={handleSignUp}
          className={`btn btn-outline btn-primary w-full ${isLoading ? 'loading disabled' : ''}`}
        >
          {isLoading ? '' : 'Sign Up'}
        </button>
      </div>
    </div>
  )
}

export default SignUp
