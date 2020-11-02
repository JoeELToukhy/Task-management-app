import React, { useState } from 'react';
import { addTask } from '../redux/actions';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';

export default function TaskInput() {
    let [title, setTitle] = useState();
    const [description, setDescription] = useState();
    let dispatch = useDispatch();
    return (
        <div>
            <div className="row m-2">
                <input 
                    onChange={(x) => setTitle(x.target.value)}
                    value={title}
                    type="text"
                    placeholder="title"
                    className="col form-control" />
                <input 
                    onChange={(x) => setDescription(x.target.value)}
                    value={description}
                    type="text"
                    placeholder="discription"
                    className="col form-control" />
                <button 
                    onClick={() => { 
                        dispatch(addTask(
                        {
                            id: uuid(),
                            title: title,
                            description: description
                        }
                    ))
                    setTitle('');
                    }}
                    className='btn btn-primary mx-2'
                >Add</button>
            </div>
        </div>
    )
}
