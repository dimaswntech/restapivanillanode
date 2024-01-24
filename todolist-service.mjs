export class TodolistService{
    todolist = ["qwerty", "asdfgh", "zxccvb"]

    getJsonTodoList(){
        return JSON.stringify({
            code:200,
            status:"OK",
            data:this.todolist.map((value, index)=>{
                return {
                    id:index,
                    todo:value
                }
            })
        })
    }
    getTodoList(req,res){
        res.write(this.getJsonTodoList())
        res.end()
    }
    createTodo(req,res){
        req.addListener("data", (data)=>{
            const body = JSON.parse(data.toString())
            this.todolist.push(body.todo)
        })

        res.write(this.getJsonTodoList())
        res.end()
    }
    updateTodo(req, res){
        req.addListener("data", (data)=>{
            const body = JSON.parse(data.toString())
            if (this.todolist[body.id]){
                this.todolist[body.id] = body.todo
            }
            res.write(this.getJsonTodoList())
            res.end()
        })
    }
}