import {todoDependencies} from "./index.js";
import { Folder } from "./folder.js";

class Todo{
    constructor(title,description,dueDate,priority)   {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

}

function createTodo(
    title,
    description,
    dueDate,
    priority,
    foldertoInsert=''    
){
    let todo = new Todo(title,description,dueDate,priority);
    if(foldertoInsert ==''){
        todoDependencies.defaultFolder.todos.push(todo);
    }
    else{
     todoDependencies.folders.forEach( function(currentFolder){
        if(currentFolder.name === foldertoInsert){
            currentFolder.todos.push(todo);
        }
     }) ;  
    }
}



export {Todo,createTodo};