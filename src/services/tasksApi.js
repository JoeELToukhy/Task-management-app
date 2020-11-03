import axios from 'axios';

class TasksApi {

    static getTasks = (callback) => {
        axios.get('/tasks')
            .then(res => callback(res.data))
            .catch(TasksApi.errorHandler);
    }

    static getTask = (id, callback) => {
        axios.get('api/tasks/' + id)
            .then(res => callback(res.data))
            .catch(TasksApi.errorHandler);
    }

    static addTask = (task, callback) => {
        axios.post('api/tasks', task)
            .then(() => TasksApi.getTasks(callback))
            .catch(TasksApi.errorHandler);
    }

    // static editTask = (task, callback) => {
    //     let id = task.id;
    //     delete task.id;
    //     axios.put('api/tasks/' + id, user)
    //         .then(() => TasksApi.getTasks(callback))
    //         .catch(TasksApi.errorHandler);
    // }

    static deleteTask = (id, callback) => {
        axios.delete('api/tasks/' + id)
            .then(() => TasksApi.getTasks(callback))
            .catch(TasksApi.errorHandler);
    }

    errorHandler = error => console.log(error);
}

export default TasksApi;