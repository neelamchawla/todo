import React, { Fragment } from 'react';
import { MDBIcon } from "mdbreact";
import './Todo.css';

class Todo extends React.Component {
constructor(){
  super();
    this.state = {
      todo: "",
      id: Date.now(),
      done: false,
      list: [],
      showAll: true,
      showActive: false,
      showComplete: false
    }
    this.handleChange = this.handleChange.bind(this);
    //example if we dnt bind here then, we hv to bind like this addTodo = (e) => {
  }

  handleChange (e) {
    this.setState({
      todo: e.target.value,
      done: e.target.done
    })
  }

  addTodo = (e) => {
    const {todo, list, id} = this.state
    
    const dataToAdd = {
      done: false,
      id: Date.now(),
      name: todo.charAt(0).toUpperCase() + todo.slice(1)
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

  doneTodo = (e) => {
    const {value, checked} = e.target
    const {list} = this.state
    const id = list.findIndex(items => items.name === value)
    console.log("doneTodo",id, value, checked)
    // if (id === -1) return

    list[id].done = checked
    
    this.setState({list})
    console.log([checked === 'done'], 'total');
  }

  selectAllChkBox = (e) => {
    let list = this.state.list
    // console.log("lst",list);
    list.map(res => (res.done = true))
    this.setState({list: list})
    console.log('selectAll list', list)
  }

  deSelectAllChkBox = (e) => {
    let list = this.state.list
    // console.log("lst",list);
    list.forEach(res => (res.done = false))
    this.setState({list: list})
    console.log('de-selectAll list', list)
  }
  
  handleDelete = (id) => {
    if (window.confirm("Are You Sure, You Want To Delete This Item???" )){
    const newlist = this.state.list.filter((e, item) => {
      return item !== id
    })
    console.log('res list', id)
    this.setState({list: newlist})  
    } else { return false }
  }

  DeleteAllItems = (id) => {
    if (window.confirm("Are You Sure, You Want To Delete All These Items???" )){
    const Deletelist = this.state.list.filter((done) => {
      return done === 'false'
    })
    console.log('Delete list ', id)
    this.setState({list: Deletelist})}
    else { return false }
  }

// ======================================================

renderList = () => {
  const {list} = this.state;
  const data = list.map((d,id) => {
    return(
      <MyList key={id} done={d.done} name={d.name} onChange={this.doneTodo}
      handleDelete={this.handleDelete.bind(this,id)} 
      />
    )
  })
  // console.log(list);
  return data;
}

// ======================================================

renderActiveList = () => {
  // alert('test');
  const activeList = this.state.list.filter(res => (res.done === false));
  const activeData = activeList.map((d,id) => {
    return(
      <MyList key={id} done={d.done} name={d.name} onChange={this.doneTodo}
      handleDelete={this.handleDelete.bind(this,id)} 
      />
    )
  })
  console.log(activeList);
  return activeData;
}

// ======================================================

renderCompletedList = () => {
  // alert('test');
  const completedList = this.state.list.filter(res => (res.done === true));
  const completedData = completedList.map((d,id) => {
    return(
      <MyList key={id} done={d.done} name={d.name} onChange={this.doneTodo}
      handleDelete={this.handleDelete.bind(this,id)} 
      />
    )
  })
  console.log(completedList);
  return completedData;
}

// ======================================================

hideComponent = (name) => {
  switch (name) {
    case "showActive":
      this.setState({ showActive: true, showAll: false, showComplete: false });
      break;
    case "showComplete":
      this.setState({ showComplete: true, showAll: false, showActive: false });
      break;
    case "showAll": 
      this.setState({ showAll: true, showActive: false, showComplete: false });
      break;
    default:
      this.setState({ showAll: true, showActive: false, showComplete: false });
  }
}

// ======================================================

  render() {
    // console.log("render",this.state.list);
    const { showAll, showActive, showComplete } = this.state;

    return (
      <div>
        <div className="container">
            <h1 htmlFor="todo"><b>TODO LIST</b></h1>
            <input type="text" className="form-control" id="todo" value={this.state.todo} onChange={this.handleChange} />
            <button className="btn btn-warning" onClick={this.addTodo} disabled={!this.state.todo}>{"Add " + (this.state.list.length + 1)}</button>
        </div>

  <span className="check">
  <MDBIcon icon="check" onClick={this.selectAllChkBox}> Select All
  </MDBIcon>
  </span>    
  <span className="check" style={{float: 'right'}}>
  <MDBIcon icon="ban" onClick={this.deSelectAllChkBox}> De - Select All
  </MDBIcon>
  </span>
  <br/>
  <hr/>
            {/* <MyList name={"something"} onChange={this.doneTodo}/> */}

            <div className="box">
            { showAll && this.renderList()}
            { showActive && this.renderActiveList() }
            { showComplete && this.renderCompletedList() }
            </div>
            <br/>
          
            <span style={{color: 'aliceblue'}}>
                {(this.state.list
                  .filter(res => (res.done === false))
                  .length) + " items left"}
                
                <button className="btn3 btn-danger" onClick={this.DeleteAllItems}>
                <MDBIcon far icon="trash-alt" /> Delete All
                </button>
            </span>
        <center>
          <br/>

            <button className="btn btn-success"
            onClick={() => this.hideComponent('showAll')}
            >
              <MDBIcon icon="check" /> All
            </button>
            <button className="btn btn-info"
            onClick={() => this.hideComponent("showActive")}
            >
              <MDBIcon icon="check" /> Active
            </button>
            <button className="btn btn-info"
            onClick={() => this.hideComponent("showComplete")} >
              <MDBIcon icon="ban" /> Completed
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
          <label><input type="checkbox" defaultValue={props.name} onChange={props.onChange} checked={props.done}/>
          &nbsp;
          {name}
          </label>
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