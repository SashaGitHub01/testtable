import React, { PropsWithChildren } from 'react'

interface LayoutProps { }

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
   return (
      <div className="g">
         <header className='text-center py-5 bg-slate-200 sticky left-0 top-0 z-50'>
            <h1 className='text-large font-semibold'>
               Тестовое задание
            </h1>
         </header>
         <main className=''>
            {children}
         </main>
      </div>
   )
}

export default Layout;