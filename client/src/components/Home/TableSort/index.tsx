import React, { PropsWithChildren } from 'react'
import SortForm from './SortForm/SortForm';

interface TableSortProps {
   limit: number
}

const TableSort: React.FC<PropsWithChildren<TableSortProps>> = ({ limit }) => {
   return (
      <div className="bg-slate-50 pb-4 pt-2">
         <div className="container mx-auto px-3">
            <SortForm limit={limit} />
         </div>
      </div>
   )
}

export default TableSort;