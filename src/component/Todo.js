import React, { Fragment } from 'react';
// import React, { Component } from 'react';
import { MDBIcon } from "mdbreact";
// import { MDBRow, MDBCol } from "mdbreact";
import './Todo.css';

class Todo extends React.Component {
constructor(){
  super();
    this.state = {
      todo: "",
      id: Date.now(),
      list: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.doneTodo = this.doneTodo.bind(this);
    this.selectAllChkBox = this.selectAllChkBox.bind(this);
    this.deSelectAllChkBox = this.deSelectAllChkBox.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    //example if we dnt bind here then, we hv to bind in props property
  }

  handleChange(e){
    this.setState({
      todo: e.target.value
    })
  }

  addTodo(e){
    const {todo, list, id} = this.state
    
    const dataToAdd = {
      done: false,
      id: Date.now(),
      name: todo
    }

    list.push(dataToAdd)
      this.setState({ 
        list,
        id,
        todo: ''
       });
    // console.log("type ->",typeof(list))
    // console.log('list', list)
  }

  doneTodo(e){
    const {value, checked} = e.target
    const {list} = this.state
    const id = list.findIndex(items => items.name === value)
    console.log("doneTodo",id, value, checked)
    // if (id === -1) return

    list[id].done = checked
    
    this.setState({list})
    console.log([checked === 'done'], 'total');
  }

  renderList(){
    const {list} = this.state
    const data = list.map((d,id) => {
      return(
        <MyList key={id} done={d.done} name={d.name} onChange={this.doneTodo} 
        handleDelete={this.handleDelete.bind(this,id)} 
        />
      )
    })
    return data;
  }

  selectAllChkBox = (e) => {
    let list = this.state.list
    // console.log("lst",list);
    list.map(res => (res.done = true))
    this.setState({list: list})
    console.log('selectAll list', list)
    return list;
  }

  deSelectAllChkBox = (e) => {
    let list = this.state.list
    // console.log("lst",list);
    list.forEach(res => (res.done = false))
    this.setState({list: list})
    console.log('de-selectAll list', list)
    return list;
  }
  
  handleDelete = (id) => {
    if (window.confirm("Are You Sure, You Want To Delete This Item???" )){
    const newlist = this.state.list.filter((e, item) => {
      return item !== id
    })
    console.log('res list', id)
    this.setState({list: newlist})  }
    else { return false }
  }

  render() {
    // console.log("render",this.state.list);

    return (
      <div>
        <div className="container">
            <label htmlFor="todo"><b>TODO LIST</b></label>
            <input type="text" className="form-control" id="todo" value={this.state.todo} onChange={this.handleChange} />
            <button className="btn btn-warning" onClick={this.addTodo} disabled={!this.state.todo}>{"Add " + (this.state.list.length + 1)}</button>
        </div>
          
            {/* <MyList name={"something"} onChange={this.doneTodo}/> */}
            {this.renderList()}
          
            <span style={{color: 'aliceblue'}}>
                {(this.state.list.length) + " items left"}
            </span>
        <center>
            <button className="btn btn-success" onClick={this.selectAllChkBox} >
              <MDBIcon icon="check" /> Select All
            </button>
            <button className="btn btn-info" onClick={this.deSelectAllChkBox} >
                <MDBIcon icon="ban" /> De - Select All
            </button>
        </center>
      </div>
    )
  }
}

const MyList = (props) => {
  let name
  let AlertClass
  if(props.done){
    name = <strike>{props.name}</strike>
    AlertClass = "alert alert-danger"
  }
  else{
    name = props.name
    AlertClass = "alert alert-info"
  }
  return(
    <Fragment>
      <div className={AlertClass}>
        <div className="checkbox">
          <label><input type="checkbox" defaultValue={props.name} onChange={props.onChange} checked={props.done}/>{name}</label>
          <button type="button" className="btn2 btn-danger" 
          onClick={() => props.handleDelete()}
          >
            <MDBIcon far icon="trash-alt" />
            {/* <span class="glyphicon glyphicon-trash"></span>
            // enable the bootstrap css in index.html */}
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default Todo;