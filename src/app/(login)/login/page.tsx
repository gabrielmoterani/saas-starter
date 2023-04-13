'use client'

// ** REACT IMPORTS **
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

// ** SUPABASE **
import { useSupabaseClient } from '@supabase/auth-helpers-react'

// ** COMPONENTS **
import ForgotPassword from '../../../components/Login/ForgotPassword'
import Login from '../../../components/Login/Login'
import SignUp from '../../../components/Login/SignUp'
import CompanyLogo from '../../../components/Shared/CompanyLogo'

//* * CONFIG */
import config from '../../../../config'
import RecoverPassword from '../../../components/Login/RecoverPassword'

function LoginPage() {
  const supabase = useSupabaseClient()
  const [loginState, setLoginState] = useState<'login' | 'signup' | 'forgotpassword'>('login')
  const [type, setType] = useState('')
  const router = useRouter()

  useEffect(() => {
    const hashFragment = window.location.hash.substring(1)
    const params = new URLSearchParams(hashFragment)
    // @ts-ignore
    setType(params.get('type'))
  }, [])

  const checkSession = async () => {
    const { data, error } = await supabase.auth.getUser()
    if (data && !error) router.push('/dashboard')
  }

  useEffect(() => {
    checkSession()
  }, [])

  const returnLoginStateComponent = () => {
    if (type === 'recovery') return <RecoverPassword />
    if (loginState === 'signup') return <SignUp changeLoginState={setLoginState} />
    if (loginState === 'forgotpassword') return <ForgotPassword changeLoginState={setLoginState} />
    return <Login changeLoginState={setLoginState} />
  }

  return (
    <div className='w-full h-full flex'>
      <div className='flex-1 p-[40px] bg-white border-r border-light-gray'>
        <div className='h-full w-full flex-col flex justify-center'>
          <div className='h-fit w-full mx-auto mb-20'>
            <CompanyLogo className='mx-auto' width={200} height={20} />
          </div>
          {returnLoginStateComponent()}
          <div className='mt-20 text-sm text-gray-200 text-right'>&copy; {config.companyName}</div>
        </div>
      </div>
      <div className='hidden md:block flex-1 bg-gray-100 opacity-50 '>
        <div className='flex items-center justify-center h-full w-full'>
          <CompanyLogo width={200} height={20} />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
