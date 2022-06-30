import React, { PropsWithChildren } from 'react'
import SortForm from './SortForm/SortForm';

interface TableSortProps { }

const TableSort: React.FC<PropsWithChildren<TableSortProps>> = ({ }) => {
   return (
      <div className="bg-slate-50 py-2">
         <div className="container mx-auto px-3">
            <SortForm />
         </div>
      </div>
   )
}

export default TableSort;