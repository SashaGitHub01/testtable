import React, { PropsWithChildren } from 'react'
import TableSort from './TableSort';

interface HomePageProps { }

const HomePage: React.FC<PropsWithChildren<HomePageProps>> = ({ }) => {
   return (
      <div className=''>
         <div className="g">
            <TableSort />
         </div>
      </div>
   )
}

export default HomePage;