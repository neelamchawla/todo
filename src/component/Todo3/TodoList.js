import React, { Component } from 'react';
import List from './List';
import '../../App.css';
import AddTodo from './AddTodo';

class TodoList extends Component {
state = {
    todos: [
        {id: 1, content: 'buy milk'},
        {id: 2, content: 'buy apple'}
    ]
}

deleteTodo = (id) => {
    console.log(id);
    const todos = this.state.todos.filter(todo => {
        return todo.id !== id
    });
    this.setState({
        todos: todos
    })
}

addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
        todos
    })
}

    render() {
    return (
        <div className="TodoList">
            <AddTodo addTodo={this.addTodo} />
            <List
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}/>
        </div>
    )
}
}

export default TodoList;