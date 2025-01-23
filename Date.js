import { fastify } from 'fastify'
import mysql from 'mysql2'

const server = fastify()
//const memory = new Memory()


var con = mysql.createConnection({
    server : 'localhost',
    port : 5555,
    user : 'root',
    password : 11
})

con.connect(function(err){
    if(err) throw err;
    console.log("conectado")
})
con.connect()



server.get('/', () => {
    memory.List()
    return
})
server.post('/', () => {
    return 
})


server.listen({ port : 3000})

