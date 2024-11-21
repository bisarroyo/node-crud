import { Router } from 'express'

import {
  getClientsByCategory,
  getClientById,
  getClientByEmail,
  getClientByName,
  insertClient,
  updateClient,
  removeClient
} from '../controllers/clients.js'

const router = Router()

router.get('/category/:category', getClientsByCategory)
router.get('/id', getClientById)
router.get('/email', getClientByEmail)
router.get('/name', getClientByName)
router.post('/create', insertClient)
router.put('/update', updateClient)
router.delete('/remove', removeClient)

export default router
