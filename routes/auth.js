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
router.post('/', authUser) // Autenticación del usuario
router.delete('/delete', deleteUser) // Eliminar usuario
router.get('/revalidate', revalidateToken) // Revalidar token de autenticación
router.put('/update', updateUser) // Actualizar usuario

export default router
