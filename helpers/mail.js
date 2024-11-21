import { transporter } from '../config/mail.js'

export const createMail = async (email, name) => {
  const mailOptions = {
    from: '"Bismark from Plus Creative" <contact@pluscreativesolutions.com>',
    to: email,
    subject: `Test ${name}`,
    text: `Test mail from Bismark from Plus Creative`
  }

  const info = await transporter.sendMail(mailOptions)
  console.log(info.messageId)
}
