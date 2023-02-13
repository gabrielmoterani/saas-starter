'use client'

// ** REACT IMPORTS
import { useState } from 'react'

// ** COMPONENTS
import ForgotPassword from '../../../components/Login/ForgotPassword'
import Login from '../../../components/Login/Login'
import SignUp from '../../../components/Login/SignUp'

function LoginPage() {
  const [loginState, setLoginState] = useState<'login' | 'signup' | 'forgotpassword'>('login')

  const returnLoginStateComponent = () => {
    if (loginState === 'signup') return <SignUp changeLoginState={setLoginState} />
    if (loginState === 'forgotpassword') return <ForgotPassword changeLoginState={setLoginState} />
    return <Login changeLoginState={setLoginState} />
  }

  return (
    <div className='m-auto xl:container px-12 sm:px-0 mx-auto'>
      <div className='mx-auto h-full sm:w-max'>
        <div className='m-auto  py-12'>
          <div className='w-[80vw] md:w-[60vw] h-[90vh] md:h-[90vh] rounded-3xl border bg-gray-50 -mx-6 sm:-mx-10 p-8 sm:p-10'>
            {returnLoginStateComponent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
