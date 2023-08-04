const http = require("http")
function requestController(){
    console.log("Recibimos una nueva request o no?")
}
//Esto configura nuestro servidor
const server = http.createServer(requestController)

server.listen(4000)
