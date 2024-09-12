import { encryptPassword, comparePassword } from '../helpers/password.js'
import { findUserByEmail, insertUser } from '../models/user.js'
import { generateJWT } from '../helpers/jwt.js'

export const createUser = async (req, res) => {
  const { email, name, last_name, password } = req.body

  try {
    const user = await findUserByEmail(email)
    if (user.rows.length) {
      res.status(401).json({
        ok: false,
        msg: 'User already exists'
      })
      return
    }
    const passwordEncrypted = encryptPassword(password)

    await insertUser(email, name, last_name, passwordEncrypted)

    const token = await generateJWT(email, name)
    const { rows } = await findUserByEmail(email)

    res.status(201).json({
      ok: true,
      id: rows[0].id,
      name,
      last_name,
      token
    })
  } catch (err) {
    res.status(401).json({
      ok: false,
      msg: err.message
    })
    // console.log(err)
  }
}

export const authUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await findUserByEmail(email)
    if (user.rows.length) {
      const passwordEncrypted = user.rows[0].password
      if (comparePassword(password, passwordEncrypted)) {
        const token = await generateJWT(email, user.rows[0].name)
        res.status(200).json({
          ok: true,
          id: user.rows[0].id,
          name: user.rows[0].name,
          last_name: user.rows[0].last_name,
          token
        })
      } else {
        res.status(401).json({
          ok: false,
          msg: 'Invalid password'
        })
      }
    } else {
      res.status(401).json({
        ok: false,
        msg: 'Invalid email'
      })
    }
  } catch (err) {
    res.status(401).json({
      ok: false,
      msg: err.message
    })
  }
}

export const updateUser = (req, res) => {
  const { email, name, last_name, password } = req.body
}

export const deleteUser = async (req, res) => {
  const { email } = req.body
  try {
    const user = await findUserByEmail(email)
    if (user.rows.length) {
      await deleteUser(email)
      res.status(200).json({
        ok: true
      })
    } else {
      res.status(401).json({
        ok: false,
        msg: 'Invalid email'
      })
    }
  } catch (err) {
    res.status(401).json({
      ok: false,
      msg: err.message
    })
  }
}

export const revalidateToken = (req, res) => {
  const { id, name } = req.body
  const token = generateJWT(id, name)
  res.status(200).json({
    ok: true,
    token
  })
}
