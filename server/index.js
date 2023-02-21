import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './Routes/authRoute.js'
import userRoute from './Routes/userRoute.js'
import hotelRoute from './Routes/hotelRoute.js'
import roomRoute from './Routes/roomRoute.js'

const app = express()
dotenv.config()
app.use(express.json())

mongoose.set('strictQuery', false)

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB)
    console.log('Connected to DB')
  } catch (error) {
    console.log(error)
  }
}

app.listen(5000, () => {
  connect()
  console.log('Connected to server')
})

//Routes
app.use('/auth', authRoute)
app.use('/user', userRoute)
app.use('/hotel', hotelRoute)
app.use('/room', roomRoute)
