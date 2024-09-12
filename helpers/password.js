import bcrypt from 'bcryptjs'

export const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync()
  password = bcrypt.hashSync(password, salt)
  return password
}
export const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}
