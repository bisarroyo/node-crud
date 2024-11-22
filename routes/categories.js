import { Router } from 'express'

import {
  getCategories,
  insertCategory,
  updateCategory,
  removeCategory
} from '../controllers/categories.js'

const router = Router()

router.get('/', getCategories)
router.post('/', insertCategory)
router.put('/', updateCategory)
router.delete('/', removeCategory)

export default router
