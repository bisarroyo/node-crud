import jwt from 'jsonwebtoken'

const validateJWT = (req, res) => {
  // custom header x-header
  const token = req.header('x-token')

  if (!token) {
    res.status(401).json({
      ok: false
    })
  }
  try {
  } catch (err) {}
}
