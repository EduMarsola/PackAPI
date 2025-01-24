import { fastify } from 'fastify'
import mysql from 'mysql2'

const server = fastify()
//const memory = new Memory()

const pool = mysql.createPool({
    host: '172.17.0.2',
    user: 'root',
    password : '',
    port : 5555
}).promise()

const result = await pool.query("create database APIMaster")




server.get('/', () => {
    memory.List()
    return
})
server.post('/', () => {
    return 
})


server.listen({ port : 3000})

