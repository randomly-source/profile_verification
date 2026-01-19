import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
}
export function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    primary: 'bg-[#5B4FFF] text-white hover:bg-[#4A3FCC] focus:ring-[#5B4FFF] shadow-sm',
    secondary: 'bg-white text-[#5B4FFF] border-2 border-[#5B4FFF] hover:bg-purple-50 focus:ring-[#5B4FFF]',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-400'
  };
  const widthClass = fullWidth ? 'w-full' : '';
  return <button className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} {...props}>
      {children}
    </button>;
}