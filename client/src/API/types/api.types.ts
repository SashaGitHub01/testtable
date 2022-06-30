import { SortParams } from "../../types/sortParams.types"

export interface PaginateRes<T> {
   data: {
      items: T,
      count: number
   },
}

export interface PaginateData<T> {
   items: T,
   count: number
}

export interface IGetItemsArgs extends SortParams {

}