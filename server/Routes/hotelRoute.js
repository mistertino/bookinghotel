import express from 'express'
import { createHotel } from '../Controller/HotelController.js'

const router = express.Router()

router.post('/', createHotel)

export default router
