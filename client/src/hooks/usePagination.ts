import { useEffect, useState } from "react"
import { SortParams } from "../types/sortParams.types"
import { useCustomSearchParams } from "./useCustomSearchParams"
import { useMyContext } from "./useMyContext"

export const usePagination = (limit: number) => {
   const { items, fetchItems, total } = useMyContext()
   const [isLoading, setIsLoading] = useState(false)
   const [params, setParams] = useCustomSearchParams()
   const [page, setPage] = useState(+(params?.page) || 1)
   const pagesCount = Math.ceil((total / limit) || 1)
   const getItems = async (args: SortParams) => {
      try {
         setIsLoading(true)

         await fetchItems(args)

         setIsLoading(false)
      } catch (err) {
         setIsLoading(false)
         console.log(err);
      }
   }
   useEffect(() => {
      setPage(+params.page || 1)
   }, [params])

   useEffect(() => {
      getItems({ ...params, offset: page, limit })
   }, [page, limit])

   const handleForward = () => {
      setParams({ ...params, page: String(page + 1) })
   }

   const handleBack = () => {
      setParams({ ...params, page: String(page - 1) })
   }

   return {
      items,
      isLoading,
      pagesCount,
      page,
      handleForward,
      handleBack,
   }
}