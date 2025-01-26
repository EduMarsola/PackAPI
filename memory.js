import mysql from 'mysql2'
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password : 'null'
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
        const result = await pool.query("select * from Tempos;")
        console.log(result)
        return result[0] //this.men.values()
    }

}

