import React from 'react'
import Link from 'next/link'

export const InputLabel = (props) => {
  const { primary, secondary, description, link, link_placeholder, children, className } = props

  return (
    <div className={className}>
      {primary && (
        <div className='font-bold mb-2 sm:mb-6 text-lg sm:text-3xl text-accent-1'>{primary}</div>
      )}
      {secondary && (
        <div className='font-bold mb-2 sm:mb-4 text-base sm:text-xl text-accent-1'>{secondary}</div>
      )}
      {description && (
        <div className='mb-4 sm:mb-4 text-sm sm:text-base text-accent-1'>{description}</div>
      )}
      {link && (
        <Link href={link}>
          <a>{link_placeholder}</a>
        </Link>
      )}
      {children}
    </div>
  )
}
