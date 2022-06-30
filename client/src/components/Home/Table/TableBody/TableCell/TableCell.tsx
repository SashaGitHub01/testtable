import React, { PropsWithChildren } from 'react'

interface TableCellProps { }

const TableCell: React.FC<PropsWithChildren<TableCellProps>> = ({ children }) => {
   return (
      <div className="ceil_spacing border-r border-solid border-gray-900">
         {children}
      </div>
   )
}

export default TableCell;