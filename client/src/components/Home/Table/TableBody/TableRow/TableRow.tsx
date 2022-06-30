import React, { PropsWithChildren } from 'react'
import { Item } from '../../../../../types/items.types';
import { momentUtils } from '../../../../../utils/moment';
import TableCell from '../TableCell/TableCell';

interface TableRowProps {
   item: Item
}

const TableRow: React.FC<PropsWithChildren<TableRowProps>> = ({ item }) => {
   return (
      <div className="grid grid-cols-4  border-t border-solid border-gray-900 first:border-t-0">
         <TableCell>
            {momentUtils.formatDate(item.createdAt)}
         </TableCell>
         <TableCell>
            {item.title}
         </TableCell>
         <TableCell>
            {item.count}
         </TableCell>
         <TableCell>
            {item.interval}
         </TableCell>
      </div>
   )
}

export default TableRow;