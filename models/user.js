import { turso } from '../config/database.js'

export const findUserByEmail = async (email) => {
  const response = await turso.execute({
    sql: 'SELECT * FROM users WHERE email = ?',
    args: [email]
  })
  return response
}
export const insertUser = async (email, name, last_name, password) => {
  const response = await turso.execute({
    sql: 'INSERT INTO users (email, name, last_name, password) VALUES (?,?,?,?)',
    args: [email, name, last_name, password]
  })
  return response
}
export const getUser = async (email) => {
  const response = await turso.execute({
    sql: 'SELECT * FROM users WHERE email = ? ',
    args: [email]
  })
  return response
}
export const getAllUsers = async () => {
  const response = await turso.execute({
    sql: 'SELECT * FROM users'
  })
  return response
}
export const deleteUser = async (email) => {
  const response = await turso.execute({
    sql: 'DELETE FROM users WHERE email = ?',
    args: [email]
  })
  return response
}
export const updateUser = async (email, name, last_name, password) => {
  const response = await turso.execute({
    sql: 'UPDATE users SET name = ?, last_name = ?, password = ? WHERE email = ?',
    args: [name, last_name, password, email]
  })
  return response
}
