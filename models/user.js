import { turso } from '../config/database.js'

export const findUserByEmail = async (email) => {
  await turso.execute({
    sql: 'SELECT * FROM users WHERE email = ?',
    args: [email]
  })
}
export const insertUser = async (email, name, last_name, password) => {
  await turso.execute({
    sql: 'INSERT INTO users (email, name, last_name, password) VALUES (?,?,?,?)',
    args: [email, name, last_name, password]
  })
}
export const getUser = async (email) => {
  await turso.execute({
    sql: 'SELECT * FROM users WHERE email = ? ',
    args: [email]
  })
}
export const getAllUsers = async () => {
  await turso.execute({
    sql: 'SELECT * FROM users'
  })
}
export const deleteUser = async (email) => {
  await turso.execute({
    sql: 'DELETE FROM users WHERE email = ?',
    args: [email]
  })
}
export const updateUser = async (email, name, last_name, password) => {
  await turso.execute({
    sql: 'UPDATE users SET name = ?, last_name = ?, password = ? WHERE email = ?',
    args: [name, last_name, password, email]
  })
}
