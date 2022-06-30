import React, { createContext, PropsWithChildren, useState } from 'react'
import { ItemsApi } from '../API/ItemsApi'
import { PaginateData } from '../API/types/api.types'
import { Item } from '../types/items.types'
import { SortParams } from '../types/sortParams.types'

interface ContextI {
   items: Item[],
   setItems: React.Dispatch<React.SetStateAction<Item[]>>
   fetchItems: (args: SortParams) => Promise<void>
   total: number
}

export const Context = createContext<ContextI>({
   items: [],
} as unknown as ContextI)

interface ContextProviderProps { }

const ContextProvider: React.FC<PropsWithChildren<ContextProviderProps>> = ({ children }) => {
   const [items, setItems] = useState<Item[]>([])
   const [total, setTotal] = useState<number>(0)

   const fetchItems = async (args: SortParams) => {
      const items = await ItemsApi.getItems(args)
      setItems(items.items)
      setTotal(items.count)
   }

   return (
      <Context.Provider value={{ items, setItems, fetchItems, total }}>
         {children}
      </Context.Provider>
   )
}

export default ContextProvider;