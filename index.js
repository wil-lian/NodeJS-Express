// todo 1 HTTP vs Express
//?Primer ejemplo con node.js
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream('./static/index.html')
//     read.pipe(res)
// })
// server.listen(3000)
// console.log(`Server on port ${3000}`)

//!estos 2 ejemplos son ejemplos bastante basico que mandar un archivo

//?segundo ejemplo con framework express
// const express = require('express')
// const app = express() // TODOapp es lo mismo que server

// app.get('/', (req, res) => {
//     res.send('./static/index.html', {
//         root: __dirname
//     })
// })

// app.listen(3000)
// console.log(`Server on port ${3000}`)

//todo 2 routing
//?este ejemplo es sobre las rutas (routing)
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/weather', (req, res) => {
    res.send('Esto es el clima')
})
app.get('/tiempo', (req, res) => {
    res.send('El tiempo')
})

//!si esque no se ha podio encontrar la ruta la ultim opcion sera use
//*hemos creado una funcion que maneja las rutas que no existen
app.use((req, res) => {
    res.send('No se pudo encontrar tu pagina')
})

app.listen(3000)
console.log(`Server on port ${3000}`)

//todo 3 HTTP Methods

