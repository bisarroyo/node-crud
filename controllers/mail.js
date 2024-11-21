import { createMail } from '../helpers/mail.js'
import { findClientsByCategory } from '../models/clients.js'

export const sendMail = async (req, res) => {
  const { email, name } = req.body
  try {
    await createMail(email, name)
    res.status(200).json({
      ok: true
    })
  } catch (err) {
    res.status(401).json({
      ok: false,
      msg: err.message
    })
  }
}
export const sendMailToAll = async (req, res) => {
  const { category } = req.body
  try {
    const clients = await findClientsByCategory(category)
    Promise.all(
      clients.rows.map(async (client) => {
        await createMail(client.email, client.name)
      })
    )
    res.status(200).json({
      ok: true
    })
  } catch (err) {
    res.status(401).json({
      ok: false,
      msg: err.message
    })
  }
}
