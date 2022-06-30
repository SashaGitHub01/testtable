import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
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

export type OptionType = {
   value: string,
   label: string
}

const Select: React.FC<PropsWithChildren<SelectProps>> = ({
   label, options, placeholder, disabled = false, onChange, current, ...props
}) => {
   const ref = useRef<HTMLInputElement>(null);
   const [active, setActive] = useState(false)
   const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 })

   const handleOpen = (e: React.MouseEvent) => {
      e.stopPropagation()
      if (!ref.current) return;
      const select = ref.current?.getBoundingClientRect(); // get coords of select to calculate position

      setCoords({
         left: select.left,
         top: select.bottom - window.scrollY,
         width: select.width
      })

      setActive(true)
   }

   const handleClose = () => {
      setActive(false)
   }

   useEffect(() => {
      if (active) {
         document.addEventListener('click', handleClose)
      } else {
         document.removeEventListener('click', handleClose)
      }

      return () => document.removeEventListener('click', handleClose)
   }, [active])

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