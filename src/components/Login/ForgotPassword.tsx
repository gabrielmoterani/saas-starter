import React, { useRef, useState } from 'react'

//* * External Imports */
import { SlEnvolope } from 'react-icons/sl'

//* * HOOKS */
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'

const ForgotPassword = ({ changeLoginState }: { changeLoginState: Function }) => {
  const supabase = useSupabaseClient()

  const emailRef = useRef(null)
  const [isLoading, setLoading] = useState(false)

  const handleForgetPassword = async () => {
    try {
      setLoading(true)
      // @ts-expect-error
      const { error } = await supabase.auth.resetPasswordForEmail(emailRef?.current?.value, {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
      })
      toast.success('Recover email sent!')
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
      </div>
      <div className='mt-10'>
        <button
          onClick={handleForgetPassword}
          className={`btn btn-outline btn-primary w-full ${isLoading ? 'loading disabled' : ''}`}
        >
          {isLoading ? '' : 'Get Forget Password E-mail'}
        </button>
        <div className='text-right'>
          <span
            className='text-sm text-gray-600 text-right opacity-40 cursor-pointer mr-1'
            onClick={() => changeLoginState('login')}
          >
            Sign In
          </span>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
