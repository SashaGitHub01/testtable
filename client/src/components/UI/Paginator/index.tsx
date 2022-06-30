import React, { PropsWithChildren, useEffect, useState } from 'react'
import { ArrowBack, ArrowForward } from '../../../assets/icons';
import Button from '../Button';

interface PaginatorProps {
   pagesCount: number,
   current: number
   handleForward: () => void
   handleBack: () => void
   disabled: boolean
}

const Paginator: React.FC<PropsWithChildren<PaginatorProps>> = ({
   pagesCount, disabled, current, handleBack, handleForward
}) => {

   return (
      <div className='py-3 px-5 bg-slate-50'>
         <div className="flex items-center justify-between">
            <Button
               disabled={disabled || current === 1}
               onClick={handleBack}
            >
               <ArrowBack className='text-medium' />
            </Button>
            <div className="gap-2 flex items-center text-lg">
               <div className="">
                  {current}
               </div>
               <div className="">/</div>
               <div className="">
                  {pagesCount}
               </div>
            </div>
            <Button
               disabled={disabled || current === pagesCount}
               onClick={handleForward}
            >
               <ArrowForward />
            </Button>
         </div>
      </div>
   )
}

export default Paginator;