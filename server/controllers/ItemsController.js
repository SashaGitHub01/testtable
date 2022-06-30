
module.exports = class ItemsController {
   constructor(db) {
      this.db = db
   }

   getItems = async (req, res) => {
      try {
         const { limit = 5, offset = 0, sortBy, sortType = '1', value } = req.query;
         const skip = +offset * limit - limit;
         let type;

         // create options object
         switch (sortType) {
            case '1':
               type = isNaN(+value) ? value : +value;
               break;
            case '2':
               type = new RegExp(`${value}`, 'gi');
               break
            case '3':
               type = { $gt: Number(value) };
               break
            case '4':
               type = { $lt: Number(value) };
               break
            default:
               type = value;
         }

         const sortOptions = sortBy && value
            ? {
               [sortBy]: type
            }
            : {}

         const itemsQuery = await this.db.collection('items')
            .find(sortOptions)
            .limit(+limit)
            .skip(skip > 0 ? skip : 0)

         return res.json({
            data: {
               items: await itemsQuery.toArray(), // array of items
               count: await this.db.collection('items').countDocuments(sortOptions) // total for pagination
            }
         });
      } catch (err) {
         console.log(err);
         return res.status(500).json({
            error: err.message
         })
      }
   }
}