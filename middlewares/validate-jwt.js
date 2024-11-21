import jwt from 'jsonwebtoken'

export const validateJWT = (req, res) => {
  // custom header x-header
  const token = req.header('x-token')

  if (!token) {
    res.status(401).json({
      ok: false,
      msg: 'No token provided'
    })
  }
  try {
    const { uid, name } = jwt.verify(
      token,
      process.env.JSON_WEB_TOKEN_SECRET_KEY
    )
    req.uid = uid
    req.name = name
  } catch (err) {
    return res.status(401).json({
      ok: false,
      msg: 'Invalid token'
    })
  }
}
