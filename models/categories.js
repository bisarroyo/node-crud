import { turso } from '../config/database.js'

export const findCategories = async () => {
  const { rows } = await turso.execute({
    sql: 'SELECT * FROM categories'
  })
  return rows
}

export const insertCategory = async (category) => {
  const { rows } = await turso.execute({
    sql: 'INSERT INTO categories (category) VALUES (?)',
    args: [category]
  })
  return rows
}

export const updateCategory = async (category, id) => {
  const { rows } = await turso.execute({
    sql: 'UPDATE categories SET category = ? WHERE id = ?',
    args: [category, id]
  })
  return rows
}

export const removeCategory = async (id) => {
  const { rows } = await turso.execute({
    sql: 'DELETE FROM categories WHERE id = ?',
    args: [id]
  })
  return rows
}
