import React from 'react';
import ListItem from './ListItem';
import AddItem from './AddItem';

const List = (props) => {
    return (
        <div>
            <div className="header">
                <div className="container title">
                    <h3>Your tasks</h3>
                    <button className={`button button__completed button--${props.showCompleted ? 'hide' : 'show'}`} onClick={props.handleShowCompleted}>{props.showCompleted ? 'Hide' : 'Show'} completed</button>
                </div>
            </div>
            <div className="container">
                <ul className="p-1">
                    {
                        props.tasks.map((task, index) => (
                            !task.completed || (task.completed && props.showCompleted) ?
                            <ListItem
                                id={task.id}
                                key={index}
                                task={task.title}
                                completed={task.completed}
                                handleDeleteTask={props.handleDeleteTask}
                                handleCompleteTask={props.handleCompleteTask}
                            />
                            : ''
                        ))
                    }
                    <li>  
                        <AddItem 
                            handleAddTask={props.handleAddTask}
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default List;