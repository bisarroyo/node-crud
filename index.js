import express from 'express'
import cors from 'cors'

import 'dotenv/config'

import usersRoutes from './routes/auth.js'

const app = express()
const PORT = process.env.PORT || 3000

// handle cors
app.use(cors())

// Lectura y parseo del body
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1/auth', usersRoutes)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
