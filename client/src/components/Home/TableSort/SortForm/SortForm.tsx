import React, { ChangeEvent, PropsWithChildren, useState } from 'react'
import { useCustomSearchParams } from '../../../../hooks/useCustomSearchParams'
import Button from '../../../UI/Button'
import Input from '../../../UI/Input'
import Select, { OptionType } from '../../../UI/Select'

const sortBy = [
   { label: 'Нет', value: '' },
   { label: 'Название', value: 'title' },
   { label: 'Количество', value: 'count' },
   { label: 'Расстояние', value: 'interval' },
]

const sortType = [
   { label: 'Равно', value: '1' },
   { label: 'Содержит', value: '2' },
   { label: 'Больше', value: '3' },
   { label: 'Меньше', value: '4' },
]

interface SortFormProps { }

const SortForm: React.FC<PropsWithChildren<SortFormProps>> = ({ }) => {
   const [params, setParams] = useCustomSearchParams()

   // extract values from URL
   const sortTypeFromParams = () => {
      return (
         sortType.find((item) => !!item.value && item.value === params?.sortType) || { value: '', label: '' }
      )
   }

   const sortByFromParams = () => {
      return (
         sortBy.find((item) => !!item.value && item.value === params?.sortBy) || { value: '', label: '' }
      )
   }

   const valueFromParams = () => {
      return (params?.value || '')
   }

   const [sortByOption, setSortByOption] = useState<OptionType>(sortByFromParams())
   const [sortTypeOption, setSortTypeOption] = useState<OptionType>(sortTypeFromParams())
   const [value, setValue] = useState(valueFromParams)

   const clearSort = () => {
      setSortByOption({ value: '', label: '' })
      setSortTypeOption({ value: '', label: '' })
      setValue('')
   }

   const handleChangeSortBy = (val: OptionType) => {
      if (val.value === '') {
         return clearSort();
      }

      setSortByOption(val)
   }

   const handleChangeSortType = (val: OptionType) => {
      setSortTypeOption(val)

   }

   const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
   }

   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setParams({
         ...params,
         sortBy: sortByOption.value,
         sortType: sortTypeOption.value,
         value
      })
      console.log({
         sortBy: sortByOption.value,
         sortType: sortTypeOption.value,
         value: value
      });
   }

   return (
      <form className="flex items-end justify-between gap-5 overflow-hidden" onSubmit={onSubmit}>
         <Select
            onChange={handleChangeSortBy}
            label='Сортировка по'
            placeholder='Выберите поле...'
            options={sortBy}
            name='sortBy'
            current={sortByOption}
         />
         <Select
            onChange={handleChangeSortType}
            label='Тип сортировки'
            placeholder='Выберите тип...'
            options={sortType}
            name='sortType'
            current={sortTypeOption}
            disabled={!sortByOption.value}
         />
         <Input
            disabled={!sortByOption.value}
            onChange={handleChangeValue}
            value={value}
            label='Значение'
            type={sortByOption.value === 'title' ? 'text' : 'number'}
            placeholder='Введите значение...'
         />

         <Button >
            Применить
         </Button>
      </form>
   )
}

export default SortForm;