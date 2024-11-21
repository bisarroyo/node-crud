import { turso } from '../config/database.js'

export const findClientByEmail = async (email) => {
  const response = await turso.execute({
    sql: 'SELECT * FROM clients WHERE email = ?',
    args: [email]
  })
  return response
}
export const findClientByname = async (name) => {
  const response = await turso.execute({
    sql: 'SELECT * FROM clients WHERE name = ?',
    args: [name]
  })
  return response
}

export const insertClient = async (email, name, last_name, password) => {
  const response = await turso.execute({
    sql: 'INSERT INTO clients (email, name, company, ) VALUES (?,?,?,?)',
    args: [email, name, last_name, password]
  })
  return response
}
export const removeClient = async (email) => {
  const response = await turso.execute({
    sql: 'DELETE FROM clients WHERE email = ?',
    args: [email]
  })
  return response
}

export const updateClient = async (email, name, last_name, password) => {
  const response = await turso.execute({
    sql: 'UPDATE clients SET name = ?, last_name = ?, password = ? WHERE email = ?',
    args: [name, last_name, password, email]
  })
  return response
}
export const getClientsByCategory = async (category) => {
  const response = await turso.execute({
    sql: 'SELECT * FROM clients WHERE category = ? ',
    args: [category]
  })
  return response
}
