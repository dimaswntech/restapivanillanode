import http from "http";

const server = http.createServer((req, res) => {
    res.write("ToDoList App")
    res.end()
})

server.listen(3000)