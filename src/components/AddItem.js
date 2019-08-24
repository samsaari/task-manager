import React, { Component } from 'react';

export class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};
    }
    hangleChange = (e) => {
        this.setState({value: e.target.value});
    }
    onSubmit = (e) => {
        e.preventDefault();
        const value = this.state.value;
        if (value.length === 0) return; 
        this.props.handleAddTask(value);
        this.setState({value: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="d-flex align-items-center">
                    <button type="submit" className="button button__add">+</button> 
                    <input type="text" value={this.state.value} onChange={this.hangleChange} className="input__add" placeholder="Add a task"/>
                </div>
                <hr/>
            </form>
          );
    }
}

export default AddItem;
