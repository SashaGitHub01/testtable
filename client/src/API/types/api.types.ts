
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

export interface IGetItemsArgs {
   sortBy?: string,
   sortType?: string,
   value?: string,
   limit: number,
   offset: number
}