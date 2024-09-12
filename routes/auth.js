import { Router } from 'express'

import {
  createUser,
  updateUser,
  deleteUser,
  authUser,
  revalidateToken
} from '../controllers/auth.js'

const router = Router()

router.post('/create', createUser) // Crear usuario
router.put('/update', updateUser) // Actualizar usuario
router.delete('/delete', deleteUser) // Eliminar usuario
router.post('/login', authUser) // Autenticación del usuario
router.get('/revalidate', revalidateToken) // Revalidar token de autenticación

export default router
