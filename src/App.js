import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { upload } from './Middlewares/multer.middleware.js'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: '20kb' }))
app.use(express.urlencoded({ limit: '20kb' }))
app.use(express.static('public'))
app.use(cookieParser())


// Router import 
import user from './Routes/user.routes.js'
import AdoptionRequest  from './Routes/adoption_req.route.js'
import pets  from './Routes/pets.routes.js'

// routes decleration
app.use("/api/v1/user", upload.none(),user)
app.use("/api/v1/request", upload.none(),AdoptionRequest)
app.use("/api/v1/pets",pets)


export { app }