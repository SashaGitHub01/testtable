import React, { PropsWithChildren } from 'react'
import { Item } from '../../../../types/items.types';
import TableRow from './TableRow/TableRow';

interface TableBodyProps {
   items: Item[]
}

const TableBody: React.FC<PropsWithChildren<TableBodyProps>> = ({ items }) => {
   return (
      <div className="">
         {items.length > 0
            ? items.map((item) => (
               <TableRow item={item} key={item._id} />
            ))
            : <div className='text-center text-lg text-gray-500 py-5'>
               <p>
                  Нет данных
               </p>
            </div>}
      </div>
   )
}

export default TableBody;