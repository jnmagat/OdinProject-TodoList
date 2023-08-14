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

let newFolder = new Folder("Test");
createFolder(newFolder);

createTodo(
    'Title Test',
    'random desc',
    '',
    2
);
createTodo(
    'a',
    'a',
    'a',
    2,
    "Test"
);

createinitPage();



// console.log(todoDependencies.folders);
export {todoDependencies}