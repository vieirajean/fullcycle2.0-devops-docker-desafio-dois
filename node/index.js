const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

app.get('/', (req,res) => {
    const mysql = require('mysql')
    const connection = mysql.createConnection(config)

    connection.query(`INSERT INTO people(nome) values('Jean Vieira')`)

    connection.query(`SELECT nome FROM people`, (error, results, fields) => {
        res.send(`
          <h1>Full Cycle Rocks!</h1>
          <ol>
            ${!!results.length ? results.map(el => `<li>${el.nome}</li>`).join('') : ''}
          </ol>
          `)
        })

    connection.end()
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})