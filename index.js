import express from 'express'
import cors from 'cors'

import 'dotenv/config'

import usersRoutes from './routes/auth.js'
import mailRoutes from './routes/mail.js'
import clientRoutes from './routes/clients.js'

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
app.use('/api/v1/mail', mailRoutes)
app.use('/api/v1/clients', clientRoutes)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
