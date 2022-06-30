import React, { PropsWithChildren } from 'react'
import Table from './Table';
import TableSort from './TableSort';

interface HomePageProps { }

const HomePage: React.FC<PropsWithChildren<HomePageProps>> = ({ }) => {
   const limit = 5;

   return (
      <div className=''>
         <div className="">
            <TableSort limit={limit} />
            <Table limit={limit} />
         </div>
      </div>
   )
}

export default HomePage;