import { createMail } from '../helpers/mail.js'

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
