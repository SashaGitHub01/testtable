import React, { PropsWithChildren } from 'react'

interface SelectListProps {
   coords: {
      width: number,
      left: number,
      top: number,
   }
}

const SelectList: React.FC<PropsWithChildren<SelectListProps>> = ({ coords, children }) => {
   return (
      <>
         <div className="absolute left-0 top-0 opacity-0 w-full h-full" />
         <div
            className="absolute shadow-lg animate-list origin-top bg-white border border-solid border-gray-300 rounded-sm"
            style={{
               width: coords.width + 'px',
               left: coords.left + 'px',
               top: (coords.top + 5) + 'px',
            }}
         >
            {children}
         </div>
      </>
   )
}

export default SelectList;