
export default function getLocalStorage(){
    const taskListData = JSON.parse(localStorage.getItem("taskdata")) || [];
    return taskListData;
}

export function sendLocalStorage (taskList){
    localStorage.setItem("taskdata", JSON.stringify(taskList));
}

