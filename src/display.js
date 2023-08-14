import { todoDependencies } from "./index.js";
import { Folder,createFolder,setFolder } from "./folder.js";

let divContent = document.querySelector("#content");
import { addBtnModal } from "./buttons.js";
import { createTodo } from "./todo.js";


let nav = document.createElement('nav');
let nav_title = document.createElement('h3');
let main_panel = document.createElement('div');
let left_panel = document.createElement('div');
let right_panel = document.createElement('div');
let sidebar_title = document.createElement('h2');
let project_list = document.createElement("ul");
let todo_list = document.createElement("ul");
let sidebar_line = document.createElement('hr');
let add_btn = document.createElement('button');
let add_todo_btn = document.createElement('button');
let current_loaded_todos;


let default_todo_list_priority = document.createElement("li");
default_todo_list_priority.setAttribute("class","todo_prio");
let default_todo_list_dueDate = document.createElement("li");
default_todo_list_dueDate.setAttribute("class","todo_duedate");
let default_todo_list_description = document.createElement("li");
default_todo_list_description.setAttribute("class","todo_desc");
let default_todo_list_name = document.createElement("li");
default_todo_list_name.setAttribute("class","todo_name");


const createinitPage = () =>{
    // NAV SECTION
    nav.setAttribute("class","nav_todo");
    nav_title.innerHTML = "() => Todolist App";

    divContent.appendChild(nav);
    nav.appendChild(nav_title);
    
    // ADD PROJECT BUTTON
    main_panel.setAttribute("class","main_panel");
    left_panel.setAttribute("class","left_panel");
    right_panel.setAttribute("class","right_panel");
    sidebar_title.innerHTML = "Projects";

    add_btn.innerHTML = "+ Add Project";
    add_btn.setAttribute("class","add_btn");

    addBtnModal(divContent,add_btn);
    addBtnModal(divContent,add_todo_btn);

    divContent.appendChild(main_panel);
    main_panel.appendChild(left_panel);
    main_panel.appendChild(right_panel);
    left_panel.appendChild(sidebar_title);
    left_panel.appendChild(project_list);
    right_panel.appendChild(todo_list);
    right_panel.appendChild(add_todo_btn);
    sidebar_title.appendChild(sidebar_line);
    left_panel.appendChild(add_btn);

    // APPEND DEFAULT FOLDER
    todoDependencies.folders.forEach(function(currentFolder){
        let default_project_list_item = document.createElement("li");
        default_project_list_item.setAttribute("class","project");
        default_project_list_item.innerHTML = currentFolder.name;
        project_list.appendChild(default_project_list_item);

        if(currentFolder.name == "Default"){
                appendTodos(default_project_list_item.innerHTML);
        }
        
        default_project_list_item.addEventListener('click',function(){
            if(current_loaded_todos != default_project_list_item.innerHTML){
                setFolder(default_project_list_item.innerHTML);
                appendTodos(default_project_list_item.innerHTML);
                current_loaded_todos = default_project_list_item.innerHTML;
            }
        });
    });

}

function appendFolder(folder_name){
        let newFolder = new Folder(folder_name);
        createFolder(newFolder);
        let project_list_item = document.createElement("li");
        project_list_item.setAttribute("id","project");
        project_list_item.innerHTML = folder_name;
        project_list.appendChild(project_list_item);
        project_list_item.addEventListener('click',function(){
            if(current_loaded_todos != project_list_item.innerHTML){
                setFolder(project_list_item.innerHTML);
                appendTodos(project_list_item.innerHTML);
                current_loaded_todos = project_list_item.innerHTML;
            }
        });

}

function appendTodos(folder_name){
    todoDependencies.folders.forEach(function(currentFolder){
        if(currentFolder.name == folder_name){
            if(currentFolder.todos.length==0){
                // if empty folder
                default_todo_list_name.innerHTML = "";
                default_todo_list_description.innerHTML = "";
                default_todo_list_dueDate.innerHTML = "";
                default_todo_list_priority.innerHTML = "";
            }
            currentFolder.todos.forEach(function(currentTodo){
                // show todos based on selected folder
                default_todo_list_name.innerHTML = currentTodo.title;
                default_todo_list_description.innerHTML = currentTodo.description;
                default_todo_list_dueDate.innerHTML = currentTodo.dueDate;
                default_todo_list_priority.innerHTML = currentTodo.priority;
            });
            // display elements for todos
            todo_list.appendChild(default_todo_list_name);
            todo_list.appendChild(default_todo_list_description);
            todo_list.appendChild(default_todo_list_dueDate);
            todo_list.appendChild(default_todo_list_priority);
            add_todo_btn.innerHTML = "+ Add Todo";
            add_todo_btn.setAttribute("class","add_todo_btn");
        }
    }); 
    console.log(todoDependencies.folders)
} 
    



//
export { createinitPage, appendFolder,appendTodos};