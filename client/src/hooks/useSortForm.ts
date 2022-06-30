import { ChangeEvent, useEffect, useState } from "react"
import { useCustomSearchParams } from "./useCustomSearchParams"
import { useMyContext } from "./useMyContext"

export type OptionType = {
   value: string,
   label: string
}

enum SortByEnum {
   NO_SORT = '',
   TITLE = 'title',
   COUNT = 'count',
   INTERVAL = 'interval'
}

const sortBy = [
   { label: 'Нет', value: SortByEnum.NO_SORT },
   { label: 'Название', value: SortByEnum.TITLE },
   { label: 'Количество', value: SortByEnum.COUNT },
   { label: 'Расстояние', value: SortByEnum.INTERVAL },
]

const sortType = [
   { label: 'Равно', value: '1' },
   { label: 'Содержит', value: '2' },
   { label: 'Больше', value: '3' },
   { label: 'Меньше', value: '4' },
]

export const useSortForm = (limit: number) => {
   const [sortTypeArr, setSortTypeArr] = useState(sortType)

   const [params, setParams] = useCustomSearchParams()
   const { fetchItems } = useMyContext()

   // extract type from URL
   const sortTypeFromParams = () => {
      return (
         sortType.find((item) => !!item.value && item.value === params?.sortType) || { value: '', label: '' }
      )
   }

   // extract sortby from URL
   const sortByFromParams = () => {
      return (
         sortBy.find((item) => !!item.value && item.value === params?.sortBy) || { value: '', label: '' }
      )
   }

   // extract value from URL
   const valueFromParams = () => {
      return (params?.value || '')
   }

   const [sortByOption, setSortByOption] = useState<OptionType>(sortByFromParams())
   const [sortTypeOption, setSortTypeOption] = useState<OptionType>(sortTypeFromParams())
   const [value, setValue] = useState(valueFromParams)
   const [isLoading, setIsLoading] = useState(false)

   useEffect(() => {
      const copyArr = [...sortType];
      switch (sortByOption.value) {
         case SortByEnum.TITLE:
            return setSortTypeArr(copyArr.slice(0, 2))

         default:
            copyArr.splice(1, 1);
            return setSortTypeArr(copyArr);
      }
   }, [sortByOption])

   // clear sort fields
   const clearSort = () => {
      setSortByOption({ value: '', label: '' })
      setSortTypeOption({ value: '', label: '' })
      setValue('')
   }

   //sortBy
   const handleChangeSortBy = (val: OptionType) => {
      if (val.value === '') {
         return clearSort();
      }

      setValue('')
      setSortTypeOption({ value: '', label: '' })
      setSortByOption(val)
   }

   //sortType
   const handleChangeSortType = (val: OptionType) => {
      setSortTypeOption(val)

   }

   //value
   const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
   }

   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      try {
         setIsLoading(true)

         e.preventDefault()
         const newParams = {
            ...(!!sortByOption.value && { sortBy: sortByOption.value }),
            ...(!!sortTypeOption.value && { sortType: sortTypeOption.value }),
            ...(!!value && { value }),
            page: '1',
         }

         setParams(newParams)
         await fetchItems({
            ...newParams,
            value: newParams.value?.trim(),
            offset: 0,
            limit
         })

         setIsLoading(false)
      } catch (err) {
         setIsLoading(false)
         console.log(err);
      }
   }

   return {
      sortType: sortTypeArr,
      onSubmit,
      handleChangeSortBy,
      sortBy,
      sortByOption,
      handleChangeSortType,
      sortTypeOption,
      handleChangeValue,
      value,
      isLoading,
   }
}