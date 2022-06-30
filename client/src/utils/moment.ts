import moment from "moment";
import 'moment/locale/ru'

export const momentUtils = {
   formatDate(date: string) {
      return moment(date).format('DD.MM.YYYY, HH:mm')
   },
}

