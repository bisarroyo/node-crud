import { encryptPassword } from '../helpers/password.js'
import { findUserByEmail, insertUser } from '../models/user.js'

export const createUser = async (req, res) => {
  const { email, name, last_name, password } = req.body

  try {
    const user = await findUserByEmail(email)
    console.log(user)
    if (user) {
      res.json({
        ok: false,
        msg: 'User already exists'
      })
    }

    await insertUser(email, name, last_name, password)
  } catch (err) {
    res.status(401).json({
      ok: false,
      msg: err.message
    })
    // console.log(err)
  }
}

export const updateUser = (req, res) => {}

export const deleteUser = (req, res) => {}

export const authUser = (req, res) => {}

export const revalidateToken = (req, res) => {}
