import React, { ChangeEvent, PropsWithChildren, useState } from 'react'
import { isConstructorTypeNode } from 'typescript'
import { useCustomSearchParams } from '../../../../hooks/useCustomSearchParams'
import { useMyContext } from '../../../../hooks/useMyContext'
import { useSortForm } from '../../../../hooks/useSortForm'
import Button from '../../../UI/Button'
import Input from '../../../UI/Input'
import Select from '../../../UI/Select'

interface SortFormProps {
   limit: number
}

const SortForm: React.FC<PropsWithChildren<SortFormProps>> = ({ limit }) => {
   const {
      onSubmit,
      handleChangeSortBy,
      sortBy,
      sortByOption,
      handleChangeSortType,
      sortType,
      sortTypeOption,
      handleChangeValue,
      value,
      isLoading,
   } = useSortForm(limit)

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

         <Button disabled={isLoading}>
            Применить
         </Button>
      </form>
   )
}

export default SortForm;