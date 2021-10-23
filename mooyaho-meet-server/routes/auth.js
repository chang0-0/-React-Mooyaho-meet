const fastify = require('fastify')
const db = require('../db')
const bcrypt = require('bcrypt')

/**
 * @param {fastify.FastifyInstance} fastify
 * */

async function authRouter(fastify) {
  fastify.post('/register', async (request, reply) => {
    const { username, password } = request.body

    //check username exists
    const user = await db.user.findUnique({ where: { username } })
    if (user) {
      reply.status(409)
      throw new Error('Username already exists')
    }
    const hash = await bcrypt.hash(password, 10)
    return {
      username,
      hash,
    }
  })
  fastify.post('/login', (request, reply) => {})
  fastify.post('/integrate', (request, reply) => {})
  fastify.post('/integrate-guest', (request, reply) => {})
}

module.exports = authRouter
