import React, { PropsWithChildren, useEffect, useState } from 'react'
import { useCustomSearchParams } from '../../../hooks/useCustomSearchParams';
import { useMyContext } from '../../../hooks/useMyContext';
import { usePagination } from '../../../hooks/usePagination';
import { SortParams } from '../../../types/sortParams.types';
import Paginator from '../../UI/Paginator';
import TableBody from './TableBody/TableBody';
import TableHeader from './TableHeader/TableHeader';

interface TableProps {
   limit: number
}

const Table: React.FC<PropsWithChildren<TableProps>> = ({ limit }) => {
   const {
      items,
      isLoading,
      pagesCount,
      page,
      handleForward,
      handleBack
   } = usePagination(limit)

   return (
      <div className="">
         <div className="border border-solid border-gray-900">
            <TableHeader />
            <TableBody items={items} />
         </div>
         <Paginator
            disabled={isLoading}
            pagesCount={pagesCount}
            current={page}
            handleForward={handleForward}
            handleBack={handleBack}
         />
      </div>
   )
}

export default Table;