import React from 'react';

const ListItem = (props) => (
    <li>
        <div className="task">
            <div className="d-flex">
                <button className={`check ${props.completed ? 'checked' : ''}`} onClick={(e) => {
                    props.handleCompleteTask(props.id);
                }}
                ></button>
                <span className={`task-name ${props.completed ? 'completed' : ''}`}>{props.task}</span>
            </div>
            <div>
                <button className="button button__delete" onClick={(e) => {
                        props.handleDeleteTask(props.id);
                    }}
                >
                    x
                </button>
            </div>
      </div>
      <hr></hr>
    </li>
);

export default ListItem;
