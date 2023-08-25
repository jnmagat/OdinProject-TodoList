import { todoDependencies } from "./index.js";
import { Folder,createFolder,setFolder,checkFolder } from "./folder.js";

let divContent = document.querySelector("#content");
import { addBtnModal,delBtn,editBtn } from "./buttons.js";
import { createTodo } from "./todo.js";


let nav = document.createElement('nav');
let nav_title = document.createElement('h3');
let main_panel = document.createElement('div');
let left_panel = document.createElement('div');
let right_panel = document.createElement('div');
let sidebar_title = document.createElement('h2');
sidebar_title.setAttribute("class","projects_title");
let project_list = document.createElement("ul");
project_list.setAttribute("class","project_list");

let todo_table = document.createElement("table");
todo_table.setAttribute("class","todo_list");

let todo_thead = document.createElement("thead");
let th_thead_row = document.createElement("tr");
th_thead_row.setAttribute("class","tr_todos_headings");
let th_title = document.createElement("th");
th_title.innerHTML = "Title";
let th_desc = document.createElement("th");
th_desc.innerHTML = "Description";
let th_duedate = document.createElement("th");
th_duedate.innerHTML = "Due Date";
let th_priority = document.createElement("th");
th_priority.innerHTML = "Priority";
let th_action = document.createElement("th");
th_action.innerHTML = "";

let todo_tbody = document.createElement("tbody");
let todo_tb_header = document.createElement("th");
// let todo_tb_data = document.createElement("td");

// let todo_list = document.createElement("ul");
// todo_list.setAttribute("class","todo_list");
let sidebar_line = document.createElement('hr');
let add_btn = document.createElement('button');
let add_todo_btn = document.createElement('button');
addBtnModal(divContent,add_todo_btn);
let current_loaded_todos;

let Btn_id = 0 ;
let folder_name = "default";


const createinitPage = () =>{
    folder_name = "default";
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

    divContent.appendChild(main_panel);
    main_panel.appendChild(left_panel);
    main_panel.appendChild(right_panel);
    left_panel.appendChild(sidebar_title);
    left_panel.appendChild(project_list);

    right_panel.appendChild(todo_table);
    todo_table.appendChild(todo_thead);
    todo_thead.appendChild(th_thead_row);
    th_thead_row.appendChild(th_title);
    th_thead_row.appendChild(th_desc);
    th_thead_row.appendChild(th_duedate);
    th_thead_row.appendChild(th_priority);
    th_thead_row.appendChild(th_action);
    todo_thead.appendChild(todo_tb_header);
    todo_table.appendChild(todo_tbody);
    // todo_tbody.appendChild(todo_tb_row);

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
                clearDisplay();
                appendTodos(default_project_list_item.innerHTML);
                current_loaded_todos = default_project_list_item.innerHTML;
            }
        });
    });

}
// function createtodoElements(){
    
// }
function clearDisplay(){
    let current_tr = document.querySelectorAll(".tr_todos");
    let current_name = document.querySelectorAll('#todo_name');
    let current_desc = document.querySelectorAll('#todo_desc');
    let current_duedate = document.querySelectorAll('#todo_duedate');
    let current_prio = document.querySelectorAll('#todo_prio');
    
    if(current_name && current_desc && current_duedate && current_prio){
        current_name.forEach(function(element) {
            element.remove();
        });
        current_desc.forEach(function(element) {
            element.remove();
        });
        current_duedate.forEach(function(element) {
            element.remove();
        });
        current_prio.forEach(function(element) {
            element.remove();
        });
        current_tr.forEach(function(element) {
            element.remove();
        });
    }
}

function appendFolder(folder_name){
        if(checkFolder(folder_name)==0){

        }
        else{
            let newFolder = new Folder(folder_name);
            createFolder(newFolder);
            let project_list_item = document.createElement("li");
            project_list_item.setAttribute("id","project");
            project_list_item.innerHTML = folder_name;
            project_list.appendChild(project_list_item);
            project_list_item.addEventListener('click',function(){
                    setFolder(project_list_item.innerHTML);
                    clearDisplay();
                    appendTodos(project_list_item.innerHTML);
                    current_loaded_todos = project_list_item.innerHTML;
            });
        }
        

}


function appendTodos(folder_name){
    // console.log(folder_name);
    if(folder_name === undefined){
        folder_name = "Default";
    }
    clearDisplay();
    todoDependencies.folders.forEach(function(currentFolder){
        
        if(currentFolder.name == folder_name){
            
            Btn_id = 0;
                currentFolder.todos.forEach(function(currentTodo){

                    if(currentFolder.todos.length==0){
                        // if empty folder
                        name_currentTodo.innerHTML = "";
                        description_currentTodo.innerHTML = "";
                        dueDate_currentTodo.innerHTML = "";
                        priority_currentTodo.innerHTML = "";
        
                    }
                    
                    add_todo_btn.innerHTML = "+ Add Todo";
                    add_todo_btn.setAttribute("class","add_todo_btn");
    
                    let todo_tb_row = document.createElement("tr");
                    todo_tb_row.setAttribute("class","tr_todos");
                    todo_tb_row.setAttribute("id",Btn_id);
                    let priority_currentTodo = document.createElement("td");
                    priority_currentTodo.setAttribute("id","todo_prio");
                    let dueDate_currentTodo = document.createElement("td");
                    dueDate_currentTodo.setAttribute("id","todo_duedate");
                    let description_currentTodo = document.createElement("td");
                    description_currentTodo.setAttribute("id","todo_desc");
                    let name_currentTodo = document.createElement("td");
                    name_currentTodo.setAttribute("id","todo_name");
                    let todo_act = document.createElement("td");
                    // todo_del_btn.setAttribute("id","");

                    // DELETE BTN
                    // delBtn_id = currentFolder.todos.length;
                    let todo_del_btn = document.createElement("button");
                    todo_del_btn.setAttribute("class","todo_del_btn");
                    todo_del_btn.setAttribute("id",Btn_id);
                    todo_del_btn.innerHTML = "DEL";
    
                    delBtn(todo_del_btn,Btn_id);  

                      // DELETE BTN
                    // delBtn_id = currentFolder.todos.length;
                    let todo_edit_btn = document.createElement("button");
                    todo_edit_btn.setAttribute("class","todo_edit_btn");
                    todo_edit_btn.setAttribute("id",Btn_id);
                    todo_edit_btn.innerHTML = "EDIT";
    
                    editBtn(todo_edit_btn,Btn_id);   

                    // show todos based on selected folder
                    name_currentTodo.innerHTML = currentTodo.title;
                    description_currentTodo.innerHTML = currentTodo.description;
                    dueDate_currentTodo.innerHTML = currentTodo.dueDate;
                    priority_currentTodo.innerHTML = currentTodo.priority;
                    
                    // display elements for todos
                    todo_tbody.appendChild(todo_tb_row);
                    todo_tb_row.appendChild(name_currentTodo);
                    todo_tb_row.appendChild(description_currentTodo);
                    todo_tb_row.appendChild(dueDate_currentTodo);
                    todo_tb_row.appendChild(priority_currentTodo);
                    todo_tb_row.appendChild(todo_act);
                    todo_act.appendChild(todo_del_btn);
                    todo_act.appendChild(todo_edit_btn);
                    // console.log(currentTodo);
                    Btn_id++;
                });            
        }
    }); 
    // console.log(todoDependencies.folders);
} 

function appendEditTodo(id){
    let selected_elem = document.getElementById(id);
    
    let a = selected_elem.querySelector("#todo_name");
    let b = selected_elem.querySelector("#todo_desc");
    let c = selected_elem.querySelector("#todo_duedate");
    let d = selected_elem.querySelector("#todo_prio");
    // console.log(a);
    let name_input = document.createElement("input");
    name_input.setAttribute("value",a.innerHTML);
    a.innerHTML = "";

    let desc_input = document.createElement("input");
    desc_input.setAttribute("value",b.innerHTML);
    b.innerHTML = "";

    let duedate_input = document.createElement("input");
    duedate_input.setAttribute("type","date");
    duedate_input.setAttribute("value",c.innerHTML);
    c.innerHTML = "";

    let prio_input = document.createElement("input");
    prio_input.setAttribute("type","number");
    prio_input.setAttribute("min",0);
    prio_input.setAttribute("max",1);
    prio_input.setAttribute("value",d.innerHTML);
    d.innerHTML = "";

    a.appendChild(name_input);      
    b.appendChild(desc_input);
    c.appendChild(duedate_input);
    d.appendChild(prio_input);
}

right_panel.appendChild(add_todo_btn);
export { createinitPage, appendFolder,appendTodos,clearDisplay,appendEditTodo};