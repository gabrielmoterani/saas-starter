import React, { useRef, useState } from 'react'

//* * External Imports */
import { SlKey } from 'react-icons/sl'

//* * HOOKS */
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const RecoverPassword = () => {
  const supabase = useSupabaseClient()

  const passwordRef = useRef(null)
  const passwordConfirmationRef = useRef(null)
  const [isLoading, setLoading] = useState(false)
  const router = useRouter()

  const handleChangePassword = async () => {
    try {
      // @ts-ignore
      if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
        toast.error('Password must match')
        return
      }

      setLoading(true)
      const { error } = await supabase.auth.updateUser({
        // @ts-expect-error
        password: passwordConfirmationRef.current.value,
      })
      if (error) throw error
      toast.success('Changed Password!')
      router.push('dashboard')
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
            <span className='label-text'>Password</span>
          </label>
          <div className='input input-md input-bordered w-full flex items-center'>
            <SlKey />
            <input
              ref={passwordRef}
              type='password'
              placeholder='Type your new password'
              className='input input-sm input-ghost w-full focus:outline-none'
            />
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Confirm Passwrod</span>
          </label>
          <div className='input input-md input-bordered w-full flex items-center'>
            <SlKey />
            <input
              ref={passwordConfirmationRef}
              type='password'
              placeholder='Type your new password again'
              className='input input-sm input-ghost w-full focus:outline-none'
            />
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <button
          onClick={handleChangePassword}
          className={`btn btn-outline btn-primary w-full ${isLoading ? 'loading disabled' : ''}`}
        >
          {isLoading ? '' : 'Change password'}
        </button>
      </div>
    </div>
  )
}

export default RecoverPassword
