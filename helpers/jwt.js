import jwt from 'jsonwebtoken'

export const generateJWT = (id, name) => {
  return new Promise((resolve, reject) => {
    const payload = { id, name }

    jwt.sign(
      payload,
      process.env.JSON_WEB_TOKEN_SECRET_KEY,
      {
        expiresIn: '1h'
      },
      (err, token) => {
        if (err) {
          console.log(err)
          reject('Can´t generate the token')
        }
        resolve(token)
      }
    )
  })
}
