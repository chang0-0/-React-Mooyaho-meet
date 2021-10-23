const fastify = require('fastify')
const authRouter = require('./auth')
const meRouter = require('./me')
const meetRouter = require('./meet')

/**
 * @param {fastify.FastifyInstance} fastify
 * */
async function routes(fastify) {
  await fastify.register(meRouter, { prefix: '/me' })
  await fastify.register(authRouter, { prefix: '/auth' })
  await fastify.register(meetRouter, { prefix: '/meet' })
}

module.exports = routes
