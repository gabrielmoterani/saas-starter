import Image from 'next/image'
import React from 'react'

const CompanyLogo = ({
  variant,
  width,
  className,
  height,
}: {
  variant?: 'small' | 'normal'
  width?: number
  height?: number
  className?: string
}) => {
  if (variant === 'small') {
    return (
      <Image
        width={width}
        height={height}
        className={className}
        src='/LogoSmall.png'
        alt='Company Logo'
      />
    )
  }
  return (
    <Image className={className} height={height} width={width} src='/Logo.png' alt='Company Logo' />
  )
}

export default CompanyLogo
