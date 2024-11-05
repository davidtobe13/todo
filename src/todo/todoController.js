const todoModel = require("./todoModel");


exports.createTodo = async (req, res) =>{
    try{
        const {title} = req.body;

        const newTodo = await todoModel.create({
            title,
        })

        if(!newTodo){
            return res.status(400).json({message: "Invalid title"})
        }

        res.status(201).json(newTodo)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}


exports.getAllTodos = async (req, res) =>{
    try{
        const allTodos = await todoModel.find()
       
            return res.status(200).json(allTodos)
        }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.deleteTodo = async (req, res) =>{
    try{
        const {id} = req.params;
        const deletedTodo = await todoModel.findByIdAndDelete(id)
        
        if(!deletedTodo){
            return res.status(404).json({message: "Todo not found"})
        }
        
        res.status(200).json({message: "Deleted successfully"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}