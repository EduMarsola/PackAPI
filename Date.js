import { fastify } from 'fastify'

const server = fastify()
server.get('/', () => {
    return Date.now()
})


server.listen(3000)

