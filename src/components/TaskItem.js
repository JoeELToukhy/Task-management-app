import React, { useState, useLayoutEffect, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addTask, deleteTask, updateTask } from '../redux/actions';
import axios from "axios";
import TasksApi from '../services/tasksApi'

var tasks = [];


export default function TaskItem({ task }) {
    const [editable, setEditable] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState()
    let dispatch = useDispatch();

    const loadTasks = () => {
        axios.get('http://localhost:8081/api/tasks')
        .then(res => {
            // console.log(res.data[0].id)
            for (let index = 0; index < res.data.length; index++) {
                tasks.push(res.data[index].title);
                console.log(task)                
            }})
        .catch(TasksApi.errorHandler);
    }
    const edittask = (callback) => {
        axios.post('api/tasks', task)
        .then(() => TasksApi.getTasks(callback))
        .catch(TasksApi.errorHandler);
    }

    const deletetask = (id, callback) => {
        axios.delete('api/tasks/' + id)
            .then(() => TasksApi.getTasks(callback))
            .catch(TasksApi.errorHandler);
    }

    useLayoutEffect(() => {
        loadTasks();
        console.log(tasks)
      }, []);

    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>#{task.id.length > 1 ? task.id[2] : task.id }</div>
                <div className="col">
                    {editable ? <input 
                    type="text" 
                    className="form-control" 
                    value={title}
                    onChange={
                        (x) => setTitle(x.target.value)
                    }
                    />:<h4>{task.title}</h4>}
                </div>
                <div className="col">
                    {editable ? <input 
                    type="text" 
                    className="form-control" 
                    value={description}
                    onChange={
                        (x) => setDescription(x.target.value)
                    }
                    />:<h4>{task.description}</h4>}
                </div>
                <button 
                    onClick={() => {
                        dispatch(updateTask(
                            {
                                ...task,
                                description: description,
                                title: title
                            }
                        ))
                        if (editable) {
                            setTitle(task.description)
                        }
                        setEditable(!editable)
                        edittask();
                    }}
                    className='btn btn-primary m-2'
                >Edit</button>
                <button 
                    onClick={() => {
                        dispatch(deleteTask(task.id))
                        deletetask();
                    }}
                    className='btn btn-danger m-2'
                >Delete</button>
            </div>
        </div>
    )
}
