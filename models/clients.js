import { turso } from '../config/database.js'

export const findClientsByCategory = async (category) => {
  const { rows } = await turso.execute({
    sql: 'SELECT * FROM clients WHERE category = ? ',
    args: [category]
  })
  return rows
}
export const findClientByEmail = async (email) => {
  const { rows } = await turso.execute({
    sql: 'SELECT * FROM clients WHERE email = ?',
    args: [email]
  })
  return rows
}
export const findClientByName = async (name) => {
  const { rows } = await turso.execute({
    sql: 'SELECT * FROM clients WHERE name LIKE ?',
    args: [`%${name}%`]
  })
  return rows
}
export const findClientById = async (id) => {
  const { rows } = await turso.execute({
    sql: 'SELECT * FROM clients WHERE id = ?',
    args: [id]
  })
  return rows
}

export const insertClientDb = async (email, name, company, category) => {
  const { rows } = await turso.execute({
    sql: 'INSERT INTO clients (email, name, company, category) VALUES (?,?,?,?)',
    args: [email, name, company, category]
  })
  return rows
}
export const updateClientDb = async (name, email, company, category) => {
  const { rows } = await turso.execute({
    sql: 'UPDATE clients SET name = ?, email = ?, company = ?, category = ? WHERE email = ?',
    args: [name, email, company, category, email]
  })
  return rows
}
export const removeClientDb = async (email) => {
  const { rows } = await turso.execute({
    sql: 'DELETE FROM clients WHERE email = ?',
    args: [email]
  })
  return rows
}
