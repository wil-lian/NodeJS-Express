// todo 1 HTTP vs Express
//! Primer ejemplo con node.js
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream('./static/index.html') //?si no llamamos a la variable reas con el metodo pipe nos saldra error pero en realidad nos error
//     read.pipe(res) //?entonces le mandamos por (un conducto osea el pipe) el read para que lo lea(con el atributo res)
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
//!este ejemplo es sobre las rutas (routing)
// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

// app.get('/weather', (req, res) => {
//     res.send('Esto es el clima')
// })
// app.get('/tiempo', (req, res) => {
//     res.send('El tiempo')
// })

//!si esque no se ha podio encontrar la ruta la ultim opcion sera use
//*hemos creado una funcion que maneja las rutas que no existen
// app.use((req, res) => {
//     res.send('No se pudo encontrar tu pagina')
// })

// app.listen(3000)
// console.log(`Server on port ${3000}`)

//todo 3 HTTP Methods
/*
teoria: modelo cliente servidor(MVC) aplicaciones clientes
aplicaciones cliente se comunican con una aplicacion de 
servidor y tenian que mandar la peticion y el servidor una
respuesta
*/
/*
ejemplo: cuando hemos creado una ruta en el cliente
/tiempo, cuando el cliente pedia este dato al servidor
el servidor respondia con un dato que era un texto que 
decia el tiempo y el servidor lo unico que asia es retornar
el texto que decia El tiempo

Peticion Get: lo que hacia el cliente hacia una petecion get
loo que haciamos era que el servidor escuche por ese tipo de 
peticiones cuando es pedido este tipo de peticiones el 
servidor va retornar algo.

Estos son peticiones HTTP ojo william

Request:  GET ->  servidor va retonarnar algo
          
          POST  -> la peticion va estar envianddole datos 
          en el  servidor, esta tratando de guardar algo
          
          PUT ->  esta peticion se trata de que el cliente
          esta tratando de guardar algo
          
          DELETE -> este tipo de peticion especifica, es 
          cuando el cliente trata de eliminar un dato 
          desde el cliente en el servidor.
          El cliente le va enviar un dato para que este 
          servidor lo use y lo busque

Estos tipo de peticiones se los conoce como verbos HTTP (verbs)
lo que significa es que el cliente le esta dando mas imformacion
de que es lo que esta tratando de hacer en el servidor, de 
esta manera el servidor puede escribir cierto tipo de logica
cuando un verbo sea aceptado (cuando el cliente visita una url 
no tan solo esta visitando un nombre /el tiempo si no que tambien
utiliza uno de estos verbos para decirle al servidor que esta
tratando de obtener algo, actualizar eliminar etc.)

Nota: podemos utilizar la peticion(Request):
    PATCH: que es igual que la petion put
        - pero con la diferencia que PATCH actualiza solo 
        un dato y no asi todo los datos como lo asemas 
        con el put


*/


