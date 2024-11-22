import {
  findCategories,
  insertCategoryDb,
  updateCategoryDb,
  removeCategoryDb
} from '../models/categories.js'

export const getCategories = async (req, res) => {
  try {
    const categories = await findCategories()
    res.status(200).json(categories)
  } catch (err) {
    res.status(401).json({
      ok: false,
      msg: err.message
    })
  }
}
export const insertCategory = async (category) => {
  try {
    await insertCategoryDb(category)
    res.status(200).json({
      ok: true,
      msg: 'Category created successfully',
      result: {
        id: 1,
        category
      }
    })
  } catch (err) {
    res.status(401).json({
      ok: false,
      msg: err.message
    })
  }
}
export const updateCategory = async (req, res) => {
  const { id, category } = req.body
  try {
    await updateCategoryDb(category, id)
    res.status(200).json({
      ok: true,
      msg: 'Category updated successfully',
      result: {
        id,
        category
      }
    })
  } catch (err) {
    res.status(401).json({
      ok: false,
      msg: err.message
    })
  }
}
export const removeCategory = async (req, res) => {
  const { id } = req.body
  try {
    await removeCategoryDb(id)
    res.status(200).json({
      ok: true,
      msg: 'Category removed successfully'
    })
  } catch (err) {
    res.status(401).json({
      ok: false,
      msg: err.message
    })
  }
}
