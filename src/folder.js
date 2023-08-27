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
    if(isNaN && !selected_folder){
        return "Default";
    }
    else if(selected_folder){
        return selected_folder;
    }
}

function checkFolder(folder_name){
    let val = 0;
    todoDependencies.folders.forEach(function(currentFolder){
        if(folder_name == currentFolder.name || folder_name == ""){
            val = 0;
        }
        else{
            val = 1;
        }
    });
    return val;
}

export {Folder, createFolder,setFolder,getFolder,checkFolder}