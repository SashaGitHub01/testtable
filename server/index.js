const express = require('express')
require('dotenv').config()
const cors = require('cors')
const morgan = require('morgan')
const mongo = require('mongodb')
const router = require('./routes/index.js')

const PORT = process.env.PORT || 3005
const app = express();

app.set('trust proxy', 1);
app.use(cors({
   origin: ['http://localhost:3000', process.env.CLIENT],
   credentials: true
}));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.json());

const start = async () => {
   try {
      // connect to db
      const con = await mongo.MongoClient.connect(process.env.DB, async (err, db) => {
         if (err) console.log(err.message);
         const testDb = db.db('testproj')

         //apply router
         app.use('/api', router(testDb))
      })

      app.listen(PORT, () => {
         console.log('Server is running', PORT)
      })
   } catch (err) {
      console.log(err)
   }
}

start();