import React, { PropsWithChildren } from 'react'

const cols = ['Дата', 'Название', "Количество", "Расстояние"]

interface TableHeaderProps { }

const TableHeader: React.FC<PropsWithChildren<TableHeaderProps>> = ({ }) => {
   return (
      <div className='grid grid-cols-4 border-b border-solid border-b-gray-900'>
         {cols.map((col, i) => (
            <div className={`border-r border-solid border-r-gray-900 last:border-r-0 font-medium ceil_spacing`} key={i}>
               <span>
                  {col}
               </span>
            </div>
         ))}
      </div>
   )
}

export default TableHeader;