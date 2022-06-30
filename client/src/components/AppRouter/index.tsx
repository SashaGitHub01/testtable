import React, { PropsWithChildren } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';

interface AppRouterProps { }

const AppRouter: React.FC<PropsWithChildren<AppRouterProps>> = ({ }) => {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
      </Routes>
   )
}

export default AppRouter;