export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

export  function addTask(task) {
    return {
        type: ADD_TASK,
        payload: task,
    }
}

export  function deleteTask(taskId) {
    return {
        type: DELETE_TASK,
        payload: taskId,
    }
}

export  function updateTask(task) {
    return {
        type: UPDATE_TASK,
        payload: task,
    }
}