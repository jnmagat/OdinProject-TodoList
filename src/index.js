import { createinitPage , createModal} from "./display";
import {Todo,createTodo} from "./todo.js";
import {Folder,createFolder} from "./folder.js";


let todoDependencies = (function(){

    let defaultFolder = new Folder('Default');
    let folders = [defaultFolder];

    return {
        folders,
        defaultFolder
    }

})()
    
createTodo(
    'Title Test',
    'random desc',
    '2023-08-01',
    1
);
createinitPage();



// console.log(todoDependencies.folders);
export {todoDependencies}