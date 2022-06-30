import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { useSelect } from '../../../hooks/useSelect';
import { OptionType } from '../../../hooks/useSortForm';
import Portal from '../../Portal';
import SelectItem from './SelectItem';
import SelectList from './SelectList';

interface SelectProps {
   label?: string,
   options: OptionType[],
   name: string,
   placeholder?: string,
   current: OptionType,
   onChange: (val: OptionType) => void,
   disabled?: boolean
}


const Select: React.FC<PropsWithChildren<SelectProps>> = ({
   label, options, placeholder, disabled = false, onChange, current, ...props
}) => {
   const { handleOpen, ref, active, coords, } = useSelect()

   return (
      <div className="w-full">
         {!!label
            && <div className="font-medium leading-6">
               {label}
            </div>}
         <input
            readOnly
            placeholder={placeholder}
            className="input cursor-pointer"
            onClick={handleOpen}
            ref={ref}
            value={current.label}
            disabled={disabled}
         />

         {active
            && <Portal isOpen={active}>
               <SelectList coords={coords}>
                  {options.map(opt => (
                     <SelectItem
                        key={opt.label}
                        label={opt.label}
                        value={opt.value}
                        handleClick={onChange}
                     />
                  ))}
               </SelectList>
            </Portal>}
         <input
            {...props}
            className="absolute -translate-x-[5113px] opacity-0"
            readOnly
            value={current.value}
         />

      </div>
   )
}

export default Select;