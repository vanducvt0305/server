import express from 'express'
import userRoute from './users.js'
const rootRoute = express.Router()

rootRoute.use('/',userRoute)


export default rootRoute
