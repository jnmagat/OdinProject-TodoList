import {todoDependencies} from "./index.js";

let selected_folder;

class Folder {
    constructor(name){
        this.name = name;
        this.todos = [];
    }

    addNote(note){
        this.todos.push(note);
    }

    showTodo(){
        this.todos.forEach((todo)=>{
            console.log(todo);
        });
    }
}

function createFolder(name){
    todoDependencies.folders.push(name);
}

function setFolder(folder_name){
    selected_folder = folder_name;
}

function getFolder(){
    return selected_folder;
}

export {Folder, createFolder,setFolder,getFolder}