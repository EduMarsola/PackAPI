import mysql from 'mysql2'
import  dotenv  from 'dotenv'
dotenv.config()


const pool = mysql.createPool({
    user: process.env.MYSQL_USER,
host: process.env.MYSQL_HOST,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
}).promise()

export class Memory{
    men = new Array()
    databaseSelected = false

    async Add(temp)
    {
        await pool.query("use PackAPI;")
        await this.pool.query('insert into Tempos (Temp) values ' + temp+';')
        this.men.Add(object)
    }
    async List()
    {
        await pool.query("use PackAPI;")
        const [result] = await pool.query("select * from Tempos;")
        console.log(result)
        return result //this.men.values()
    }
    async GetOne(id)
    {
        await pool.query("use PackAPI;")
        const row = await pool.query(`select * from Tempos where id = ?`, [id])
        return row
    }

}

