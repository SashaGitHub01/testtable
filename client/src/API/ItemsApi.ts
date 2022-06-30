import { Item } from "../types/items.types"
import { instance } from "./instance"
import { IGetItemsArgs, PaginateData, PaginateRes } from "./types/api.types"

export class ItemsApi {
   static getItems = async (args: IGetItemsArgs): Promise<PaginateData<Item[]>> => {
      const query = `limit=${args.limit}&offset=${args.offset}${args.sortBy ? `&sortBy=${args.sortBy}` : ''}${args.sortType ? `&sortType=${args.sortType}` : ''}${args.value ? `&value=${args.value}` : ''}`;

      const { data } = await instance.get<PaginateRes<Item[]>>(`/items?${query}`)
      return data.data;
   }
}