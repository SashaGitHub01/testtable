import React, { PropsWithChildren } from 'react'
import { Item } from '../../../../types/items.types';
import Loader from '../../../UI/Loader';
import TableRow from './TableRow/TableRow';

interface TableBodyProps {
   items: Item[],
   isLoading: boolean
}

const TableBody: React.FC<PropsWithChildren<TableBodyProps>> = ({ items, isLoading }) => {
   return (
      <div className="">
         {isLoading
            ? <Loader />
            : items.length > 0
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