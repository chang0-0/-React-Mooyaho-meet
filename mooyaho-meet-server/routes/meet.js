const fastify = require('fastify')
const db = require('../db')

/**
 * @param {fastify.FastifyInstance} fastify
 * */

async function meetRouter(fastify) {
  fastify.post('/', async (request, reply) => {
    const { code } = request.body

    const exists = await db.meet.findUnique({
      where: {
        code,
      },
    })

    if (exists) {
      reply.status(409)
      throw new Error('Meet with same code already exists')
    }

    const { id: channelId } = await mooyaho.createChannel()

    const meet = await db.meet.create({
      data: {
        channelId,
        code,
      },
    })

    return {
      id: meet.id,
      code,
      channelId,
    }
  })

  fastify.get('/:id', (request, reply) => {})
}

module.exports = meetRouter
