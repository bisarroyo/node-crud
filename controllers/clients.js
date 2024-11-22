import {
  findClientsByCategory,
  findClientByEmail,
  findClientByName,
  findClientById,
  insertClientDb,
  updateClientDb,
  removeClientDb
} from '../models/clients.js'

export const getClientsByCategory = async (req, res) => {
  const { category } = req.params
  try {
    const clients = await findClientsByCategory(category)
    res.status(200).json(clients)
  } catch (err) {
    res.status(401).json({
      ok: false,
      msg: err.message
    })
  }
}

export const getClientByEmail = async (req, res) => {
  const { email } = req.body
  try {
    const client = await findClientByEmail(email)
    res.status(200).json(client)
  } catch (err) {
    res.status(401).json({
      ok: false,
      msg: err.message
    })
  }
}

export const getClientByName = async (req, res) => {
  const { name } = req.body
  try {
    const client = await findClientByName(name)
    res.status(200).json(client)
  } catch (err) {
    res.status(401).json({
      ok: false,
      msg: err.message
    })
  }
}
export const getClientById = async (req, res) => {
  const { id } = req.body
  try {
    const client = await findClientById(id)
    res.status(200).json(client)
  } catch (err) {
    res.status(401).json({
      ok: false,
      msg: err.message
    })
  }
}

export const insertClient = async (req, res) => {
  const { email, name, company, category } = req.body
  try {
    const client = await findClientByEmail(email)
    if (client.length > 0) {
      res.status(401).json({
        ok: false,
        msg: 'Client already exists'
      })
    }
    await insertClientDb(email, name, company, category)
    res.status(200).json({
      ok: true,
      msg: 'Client created successfully',
      result: {
        email,
        name,
        company,
        category
      }
    })
  } catch (err) {
    res.status(401).json({
      ok: false,
      msg: err.message
    })
  }
}
export const updateClient = async (req, res) => {
  const { email, name, company, category } = req.body
  console.log(email, name, company, category)
  try {
    await updateClientDb(name, email, company, category)
    res.status(200).json({
      ok: true,
      msg: 'Client updated successfully',
      result: {
        email,
        name,
        company,
        category
      }
    })
  } catch (err) {
    res.status(401).json({
      ok: false,
      msg: err.message
    })
  }
}

export const removeClient = async (req, res) => {
  const { email } = req.body
  try {
    await removeClientDb(email)
    res.status(200).json({
      ok: true,
      msg: 'Client removed successfully'
    })
  } catch (err) {
    res.status(401).json({
      ok: false,
      msg: err.message
    })
  }
}
