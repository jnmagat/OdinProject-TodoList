import { Folder,createFolder,getFolder } from "./folder.js";
import { appendFolder,appendTodos,clearDisplay,appendEditTodo,currentId } from "./display.js";
import { createTodo,deleteTodo,getTodo } from "./todo.js";
import { todoDependencies } from "./index.js";


function addBtnModal (a,b) {
    // create Modal
    let backdrop = document.createElement('div');
    backdrop.setAttribute("class","backdrop");

    let modalPanel = document.createElement('div');
    modalPanel.setAttribute("class","modalPanel");
    let modalDiv = document.createElement('div');
    modalDiv.setAttribute("class","modalDiv");

    let btn = b.getAttribute("class");
    // console.log(btn);
    
     // modal close button
     let modal_close_btn = document.createElement('button');
     modal_close_btn.setAttribute("class","c_modal_btn");
     modal_close_btn.innerHTML = "Close";
 
     // modal submit button
     let modal_submit_btn = document.createElement('button');
     modal_submit_btn.setAttribute("class","s_modal_btn");
     modal_submit_btn.innerHTML = "Submit";

    if(btn == 'add_btn'){
        let modal_text = document.createElement('h2');
        let header_line = document.createElement('hr');
        let input_label_name = document.createElement('label');
        let input_name = document.createElement('input');

        modal_text.innerHTML = "Project Details";

        // input name
        input_label_name.innerHTML = "Project Name";
        input_name.setAttribute("type","text");
        modalDiv.appendChild(modal_text);
        modalDiv.appendChild(header_line);
        modalDiv.appendChild(input_label_name);
        modalDiv.appendChild(input_name);

        modal_submit_btn.addEventListener('click', function(){
            if(input_name.value == ""){
                alert("Fill up the field");
            }
            else{
                backdrop.classList.toggle("show");
                modalDiv.classList.toggle("show");
                appendFolder(input_name.value);
                input_name.value = "";
            }
        });
    
    }
    else{
        // console.log('add todo here');
        let modal_text = document.createElement('h2');
        let header_line = document.createElement('hr');
        let input_label_name = document.createElement('label');
        let input_name = document.createElement('input');
        let input_label_description = document.createElement('label');
        let input_description = document.createElement('input');
        let input_label_dueDate = document.createElement('label');
        let input_dueDate = document.createElement('input');
        let input_label_priority = document.createElement('label');
        let input_priority = document.createElement('input');

        modal_text.innerHTML = "Todo Details";

        // input name
        input_label_name.innerHTML = "Title";
        input_name.setAttribute("type","text");
        modalDiv.appendChild(modal_text);
        modalDiv.appendChild(header_line);
        modalDiv.appendChild(input_label_name);
        modalDiv.appendChild(input_name);

        input_label_description.innerHTML = "Description";
        input_description.setAttribute("type","text");
        modalDiv.appendChild(input_label_description);
        modalDiv.appendChild(input_description);

        input_label_dueDate.innerHTML = "Due Date";
        input_dueDate.setAttribute("type","date");
        modalDiv.appendChild(input_label_dueDate);
        modalDiv.appendChild(input_dueDate);

        input_label_priority.innerHTML = "Priority";
        input_priority.setAttribute("type","number");
        input_priority.setAttribute("min",0);
        input_priority.setAttribute("max",1);
        modalDiv.appendChild(input_label_priority);
        modalDiv.appendChild(input_priority);

        modal_submit_btn.addEventListener('click', function(){
           
            let result = getFolder() ? getFolder() : ""
            if(input_name.value == ""|| input_description.value == "" ||
            input_dueDate.value == "" || input_priority.value == "" || input_priority.value > 1 ){
                alert("Check Inputs ");
            }
            else{
                createTodo(
                    input_name.value,
                    input_description.value,
                    input_dueDate.value,
                    input_priority.value,
                    result
                );
                backdrop.classList.toggle("show");
                modalDiv.classList.toggle("show");
                 
                input_name.value = "";
                input_description.value = "";
                input_dueDate.value = "";
                input_priority.value = "";   
            }
            console.log(result);
            appendTodos(getFolder());
            
        });
    
    }
    
   

    a.appendChild(backdrop);
    a.appendChild(modalPanel);
    modalPanel.appendChild(modalDiv);
    

    // modalDiv.appendChild(input_label_desc);
    // modalDiv.appendChild(input_desc);

    modalDiv.appendChild(modal_submit_btn);
    modalDiv.appendChild(modal_close_btn);
    
    // toggle Modal
    b.addEventListener('click', function(){
        modalDiv.classList.toggle("show");
        backdrop.classList.toggle("show");
    });

    modal_close_btn.addEventListener('click', function(){
        backdrop.classList.toggle("show");
        modalDiv.classList.toggle("show");
    });


   
}

function delBtn(b,c){
    let folder_selected;

        if(getFolder()){
            folder_selected = getFolder();
        }
        else{
            folder_selected = "Default";
        }
        b.addEventListener('click', function(){
            deleteTodo(folder_selected,c);
            
        clearDisplay()
        appendTodos(getFolder());

        });
}

function editBtn(b,c){

    let folder_selected;

    if(getFolder()){
        folder_selected = getFolder();
    }
    else{
        folder_selected = "Default";
    }
    b.addEventListener('click', function(){
            getTodo(folder_selected,c);
            appendEditTodo(b,c);
    });
}

export { addBtnModal,delBtn,editBtn };