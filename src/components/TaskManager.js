import React, { Component } from 'react';
import List from './List';

export class TaskManager extends Component {
    state = {
        tasks: [],
        showCompleted: true
    }

    componentDidMount() {
        const json = localStorage.getItem('tasks');
        const tasks = JSON.parse(json);

        if (tasks) this.setState(() => ({ tasks }));
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.tasks.length !== this.state.tasks.length) {
            this.saveToLocalStorage();
        }
    }

    saveToLocalStorage = () => {
        const json = JSON.stringify(this.state.tasks);
        localStorage.setItem('tasks', json);
    }

    handleAddTask = (task) => {
        this.setState((prevState) => ({
            tasks: [...prevState.tasks, ...[{id:`${Date.now()}-${task}`, title: task, completed: false}]]
        }));
    }

    handleDeleteTask = (taskToRemove) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => taskToRemove !== task.id)
        }));
    }

    handleCompleteTask = (taskToComplete) => {
        const tasks = this.state.tasks;
        // Find index of taskToComplete
        const i = tasks.indexOf(tasks[tasks.findIndex((task) => task.id === taskToComplete)]);
        // Toggle completed value of task
        tasks[i].completed = !tasks[i].completed;
        this.setState({
            tasks: tasks
        });
        this.saveToLocalStorage();
    }

    handleShowCompleted = (e) => {
        e.preventDefault();
        this.setState({
            showCompleted: !this.state.showCompleted
        })
    }

    render() {
        return (
            <div>
                <List 
                    tasks={this.state.tasks}
                    showCompleted={this.state.showCompleted}
                    handleAddTask={this.handleAddTask}
                    handleDeleteTask={this.handleDeleteTask}
                    handleCompleteTask={this.handleCompleteTask}
                    handleShowCompleted={this.handleShowCompleted}
                />
            </div>
        )
    }
}

export default TaskManager;
