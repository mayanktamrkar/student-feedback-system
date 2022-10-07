import express from 'express'
import cors from 'cors'

const app = express()

import connectDB from './db.js'

import bodyparser from 'body-parser'
app.use(bodyparser.json())
connectDB()
import router from './router.js'
// app.use(cors({ origin: 'http://localhost:00' }));
app.use(cors())

app.use('', router)
app.use(express.json())

app.listen(8000, () => {
    console.log("its working ")
})