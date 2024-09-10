import { response } from 'express'

export const createUser = async (req, res = response) => {
  res.json({ ok: true })
}

export const updateUser = (req, res) => {}

export const deleteUser = (req, res) => {}

export const authUser = (req, res) => {}

export const revalidateToken = (req, res) => {}
