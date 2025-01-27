import { fastify } from 'fastify'
import { Memory } from './memory.js'

const server = fastify()
const memory = new Memory()


server.get('/', (reply) => {
    return memory.List()
})
server.post('/:temp', (request, reply) => {
    memory.Add(request.params.temp)
    console.log(request.params.temp)
    return reply.status(204).send()
})


server.listen({ port : 3000})

