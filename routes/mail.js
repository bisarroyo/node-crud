import { Router } from 'express'

import { sendMail } from '../controllers/mail.js'

const router = Router()

router.post('/', sendMail) // Enviar mail

export default router
