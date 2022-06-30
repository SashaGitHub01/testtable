import React, { PropsWithChildren } from 'react'
import s from './Loader.module.scss'

interface LoaderProps { }

const Loader: React.FC<PropsWithChildren<LoaderProps>> = ({ }) => {
   return (
      <div className="flex items-center justify-center py-5">
         <div className={s.spinner} />
      </div>
   )
}

export default Loader;