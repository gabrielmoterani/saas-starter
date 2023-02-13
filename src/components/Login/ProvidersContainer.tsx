import React from 'react'

// ** External Components
import * as Icons from 'react-icons/sl'

const ProvidersContainer = ({
  providers,
  onProviderClick,
}: {
  providers: string[]
  onProviderClick: Function
}) => {
  // @ts-ignore
  const Icon = (provider: string) => {
    if (provider === 'google') return <Icons.SlSocialGoogle />
    if (provider === 'twitter') return <Icons.SlSocialTwitter />
    if (provider === 'github') return <Icons.SlSocialGithub />
    if (provider === 'facebook') return <Icons.SlSocialFacebook />
    return null
  }

  return (
    <div className='w-full text-center'>
      {providers.map((provider, i) => (
        <div key={i} className='btn btn-outline mr-2' onClick={() => onProviderClick(provider)}>
          {Icon(provider)}
        </div>
      ))}
    </div>
  )
}

export default ProvidersContainer
