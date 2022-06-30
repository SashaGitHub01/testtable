import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
   return (
      <button
         className='button'
         {...props}
      >
         {children}
      </button>
   )
}

export default Button;