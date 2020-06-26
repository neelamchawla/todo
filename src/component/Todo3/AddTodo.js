import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render() {
    return (
      <div className="AddTodo">
          <form onSubmit={this.handleSubmit}>
              <label className="home">Add new todo:</label>
              <input style = {{width: '100%', boxShadow: '1px 2px 6px 5px blueviolet'}}
              placeholder = "Enter Items"
              type="text" onChange={this.handleChange}
              value={this.state.content}
              />
          </form>
      </div>
    )
  }
}

export default AddTodo;