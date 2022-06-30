import React, { PropsWithChildren } from 'react'
import { OptionType } from '../../../hooks/useSortForm'

interface SelectItemProps {
   label: string,
   value: string,
   handleClick: (val: OptionType) => void
}

const SelectItem: React.FC<PropsWithChildren<SelectItemProps>> = ({ label, handleClick, value }) => {

   const handlePick = () => {
      handleClick({ value, label })
   }

   return (
      <div
         onClick={handlePick}
         className='border-y border-solid border-gray-200 first:border-t-0 last:border-t-0 p-2 cursor-pointer hover:bg-slate-100'
      >
         {label}
      </div>
   )
}

export default SelectItem;