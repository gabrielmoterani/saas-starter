'use client'

// ** REACT IMPORTS **
import { useState } from 'react'

// ** COMPONENTS **
import ForgotPassword from '../../../components/Login/ForgotPassword'
import Login from '../../../components/Login/Login'
import SignUp from '../../../components/Login/SignUp'
import CompanyLogo from '../../../components/Shared/CompanyLogo'

//* * CONFIG */
import config from '../../../../config'

function LoginPage() {
  const [loginState, setLoginState] = useState<'login' | 'signup' | 'forgotpassword'>('login')

  const returnLoginStateComponent = () => {
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
