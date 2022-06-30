const router = require('express').Router()
const ItemsController = require('../controllers/ItemsController.js')


module.exports = (db) => {
   // pass db into Controller
   const itemsController = new ItemsController(db)

   router.get('/items', itemsController.getItems)

   return router;
}