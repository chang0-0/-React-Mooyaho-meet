const { default: fastify } = require('fastify')
const { default: fp } = require('fastify-plugin')

const jwtPlugin = fp(
  async (fastify) => {
    fastify.addHook('preHandler', async (request, reply) => {
      const token = request.headers['authorization']?.split('Bearer ')[1]
      if (!token) {
        fastify.decorate('user', null)
      } else {
        try {
          const decoded = await jwt.verify(token, process, env, JWT_SECRET)
          fastify.decorate('user', decoded)
        } catch (e) {
          fastify.decorate('user', null)
        }
      }
      console.log(token)
    })
  },
  {
    name: 'jwtPlugin',
  }
)

module.exports = jwtPlugin
