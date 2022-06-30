import React, { HTMLInputTypeAttribute, InputHTMLAttributes, PropsWithChildren } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   label?: string
}

const Input: React.FC<PropsWithChildren<InputProps>> = ({ label, ...props }) => {
   return (
      <div className="w-full">
         {!!label
            && <div className="font-medium">
               {label}
            </div>}
         <input
            {...props}
            className="input"
         />
      </div>
   )
}

export default Input;
