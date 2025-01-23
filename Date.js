import { fasfify } from "fastify"

const server = fastify()
server.listen(3333)
server.get('/', () => {
    return Date.now()
})


function Alertar()
{
    alert(server.get())
}