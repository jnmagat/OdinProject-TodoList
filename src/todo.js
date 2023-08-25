import {todoDependencies} from "./index.js";
import { Folder } from "./folder.js";



class Todo{
    static todoCount = 0; 
    constructor(title,description,dueDate,priority,todoId)   {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.todoId = todoId;
        // Todo.todoCount += 1;
    }

}

function createTodo(
    title,
    description,
    dueDate,
    priority,
    foldertoInsert='',
    todoId
){
    
    if(foldertoInsert ==''){
        if(todoDependencies.defaultFolder.todos.length>0){
            todoId = todoDependencies.defaultFolder.todos.length;
        }
        else{
            todoId = 0;
        }
        // console.log(todoId);
        let todo = new Todo(title,description,dueDate,priority,todoId);
        todoDependencies.defaultFolder.todos.push(todo);
    }
    else{
        todoDependencies.folders.forEach( function(currentFolder){
            if(currentFolder.name === foldertoInsert){
                if(currentFolder.todos.length>0){
                    todoId = currentFolder.todos.length;
                }
                else{
                    todoId = 0;
                }
                // console.log(todoId);
                let todo = new Todo(title,description,dueDate,priority,todoId);
                currentFolder.todos.push(todo);
            }
     }) ;  
    }
}

function deleteTodo(folder_name,id){
    console.log("This is id:"+id);
    todoDependencies.folders.forEach(function(currentFolder){
        if(folder_name == currentFolder.name){
            currentFolder.todos.splice(id,1)
        }
    });
}    

function getTodo(folder_name,id){
    // console.log("This is id:"+id);
    todoDependencies.folders.forEach(function(currentFolder){
        if(folder_name == currentFolder.name){
           currentFolder.todos.forEach(function(currentTodo){
            if(currentTodo.todoId == id){

                let selected_elem = document.getElementById(id);
                selected_elem.classList.toggle("selected");
                // elem.classList.add("test");
                // console.log(elem);
                // todo_selected.classList.remove("tr_todos");
                // todo_selected.className.includes("test");
            }
           });
        }
    });
}



export {Todo,createTodo,deleteTodo,getTodo};