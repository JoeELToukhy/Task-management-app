import React from 'react'
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux';

export default function TaskList() {
    let tasks = useSelector(state => state)
    return (
        <div className="my-4">
            {tasks.map(task => {
                return <TaskItem key={task.id} task={task} />
            })}
        </div>
    )
}
