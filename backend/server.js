import express from 'express'
import 'dotenv/config'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import connectToMongoDB from './db/connectToMongoDB.js'

const app = express()
const PORT = process.env.PORT

app.use(express.json()) //parse the incoming json
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
  res.send('TEST')
})

app.listen(PORT, () => {
  connectToMongoDB()
  console.log(`Server running on port ${PORT}`)
})
