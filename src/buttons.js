import { Folder,createFolder,getFolder } from "./folder.js";
import { appendFolder,appendTodos } from "./display.js";
import { createTodo } from "./todo.js";
import { todoDependencies } from "./index.js";
function addBtnModal (a,b) {
    // create Modal
    let backdrop = document.createElement('div');
    backdrop.setAttribute("class","backdrop");

    let modalPanel = document.createElement('div');
    modalPanel.setAttribute("class","modalPanel");
    let modalDiv = document.createElement('div');
    modalDiv.setAttribute("class","modalDiv");

    let btn = b.getAttribute("class")
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
            backdrop.classList.toggle("show");
            modalDiv.classList.toggle("show");
            appendFolder(input_name.value);
        });
    
    }

    else{
        let modal_text = document.createElement('h2');
        let header_line = document.createElement('hr');
        let input_label_name = document.createElement('label');
        let input_name = document.createElement('input');

        modal_text.innerHTML = "Todo Details";

        // input name
        input_label_name.innerHTML = "Todo Title";
        input_name.setAttribute("type","text");
        modalDiv.appendChild(modal_text);
        modalDiv.appendChild(header_line);
        modalDiv.appendChild(input_label_name);
        modalDiv.appendChild(input_name);

        modal_submit_btn.addEventListener('click', function(){
            
            backdrop.classList.toggle("show");
            modalDiv.classList.toggle("show");
            createTodo(
                'b',
                'b',
                'b',
                2,
                getFolder()
            );
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



export { addBtnModal };