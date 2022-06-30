import React, { createContext, PropsWithChildren, useState } from 'react'
import { Item } from '../types/items.types'

interface ContextI {
   items: Item[],
   setItems: React.Dispatch<React.SetStateAction<Item[]>>
}

export const Context = createContext<ContextI>({
   items: [],
   setItems: () => { }
} as ContextI)

interface ContextProviderProps { }

const ContextProvider: React.FC<PropsWithChildren<ContextProviderProps>> = ({ children }) => {
   const [items, setItems] = useState<Item[]>([])

   return (
      <Context.Provider value={{ items, setItems }}>
         {children}
      </Context.Provider>
   )
}

export default ContextProvider;