import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../redux/actions';

export default function TaskItem({ task }) {
    const [editable, setEditable] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState()
    let dispatch = useDispatch();
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
                <button 
                    onClick={() => {
                        dispatch(updateTask(
                            {
                                ...task,
                                title: title
                            }
                        ))
                        if (editable) {
                            setTitle(task.title)
                        }
                        setEditable(!editable)
                    }}
                    className='btn btn-primary m-2'
                >Edit</button>
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
                                description: description
                            }
                        ))
                        if (editable) {
                            setTitle(task.description)
                        }
                        setEditable(!editable)
                    }}
                    className='btn btn-primary m-2'
                >Edit</button>
                <button 
                    onClick={() => dispatch(deleteTask(task.id))}
                    className='btn btn-danger m-2'
                >Delete</button>
            </div>
        </div>
    )
}
