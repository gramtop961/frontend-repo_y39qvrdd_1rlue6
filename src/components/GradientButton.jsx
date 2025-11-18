import React from 'react'
import { cn } from '../utils/cn'

export default function GradientButton({ children, className = '', as = 'button', href = '#', onClick, size = 'lg' }) {
  const Comp = as === 'a' ? 'a' : 'button'
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-base',
    xl: 'px-7 py-3.5 text-lg'
  }
  return (
    <Comp
      href={as === 'a' ? href : undefined}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-semibold text-white shadow-md transition-transform duration-200',
        'bg-gradient-to-r from-[#007BFF] to-[#00C6FF] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00C6FF] focus:ring-offset-white',
        sizes[size],
        className
      )}
    >
      {children}
    </Comp>
  )
}
