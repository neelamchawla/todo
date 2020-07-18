// import React, { Fragment } from 'react';
// import { MDBIcon } from "mdbreact";
// import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
// import { compose } from 'redux';

// import './Todo.css';
// import { setList } from './redux/list.actions';

// class Todo extends React.Component {
// constructor(){
//   super();
//     this.state = {
//       todo: "",
//       id: Date.now(),
//       done: false,
//       list: [],
//       showAll: true,
//       showActive: false,
//       showComplete: false
//     }
//     this.handleChange = this.handleChange.bind(this);
//     //example if we dnt bind here then, we hv to bind like this anyMethod = (e) => {
//   }

//   handleChange (e) {
//     this.setState({
//       todo: e.target.value,
//       done: e.target.done
//     })
//   }

//   addTodo = (e) => {
//     const {todo, id} = this.state
//     const { list } = this.props;

//     const dataToAdd = {
//       done: false,
//       id: Date.now(),
//       name: todo.charAt(0).toUpperCase() + todo.slice(1)
//     }

//     list.push(dataToAdd)
//       this.setState({ 
//         list,
//         id,
//         todo: ''
//        });
//     // console.log("type ->",typeof(list))
//     // console.log('list', list)
//   }

//   doneTodo = (e) => {
//     const {value, checked} = e.target;
//     // const {list} = this.state;
//     const {list} = this.props;
//     const id = list.findIndex(items => items.name === value);
//     console.log("doneTodo: ", id, value, checked);
//     // if (id === -1) return

//     list[id].done = checked;
    
//     this.setState({list})
//     // console.log([checked === 'done'], 'total');
//   }

//   handleSave = (e) => {
//     e.preventDefault();
//     console.log(this.state.list);
//     this.props.setList(this.state.list);
//   }

//   selectAllChkBox = (e) => {
//     // let list = this.state.list
//     const {list} = this.props;
//     // console.log("lst",list);
//     list.map(res => (res.done = true));
//     this.setState({list: list});
//     // console.log('selectAll list', list)
//   }

//   deSelectAllChkBox = (e) => {
//     // let list = this.state.list
//     const {list} = this.props;
//     // console.log("lst",list);
//     list.forEach(res => (res.done = false));
//     this.setState({list: list});
//     // console.log('de-selectAll list', list)
//   }
  
//   handleDelete = (id) => {
//     if (window.confirm("Are You Sure, You Want To Delete This Item???" )){
//     const newlist = this.state.list.filter((e, item) => {
//       return item !== id
//     })
//     // console.log('res list', id)
//     this.setState({list: newlist})  
//     } else { return false }
//   }

//   DeleteAllItems = (id) => {
//     if (window.confirm("Are You Sure, You Want To Delete All These Items???" )){
//     const Deletelist = this.state.list.filter((done) => {
//       return done === 'false'
//     })
//     // console.log('Delete list ', id)
//     this.setState({list: Deletelist})}
//     else { return false }
//   }

// // ======================================================

// renderList = () => {
//   // const {list} = this.state;
//   const {list} = this.props;
//   const data = list.map((d,id) => {
//     return(
//       <MyList key={id} done={d.done} name={d.name} onChange={this.doneTodo}
//       handleDelete={this.handleDelete.bind(this,id)} 
//       list={list}
//       />
//     )
//   })
//   // console.log(list);
//   return data;
// }

// // ======================================================

// renderActiveList = () => {
//   // alert('test');
//   const activeList = this.state.list.filter(res => (res.done === false));
//   const activeData = activeList.map((d,id) => {
//     return(
//       <MyList key={id} done={d.done} name={d.name} onChange={this.doneTodo}
//       handleDelete={this.handleDelete.bind(this,id)} 
//       />
//     )
//   })
//   console.log(activeList);
//   return activeData;
// }

// // ======================================================

// renderCompletedList = () => {
//   // alert('test');
//   const completedList = this.state.list.filter(res => (res.done === true));
//   const completedData = completedList.map((d,id) => {
//     return(
//       <MyList key={id} done={d.done} name={d.name} onChange={this.doneTodo}
//       handleDelete={this.handleDelete.bind(this,id)} 
//       />
//     )
//   })
//   console.log(completedList);
//   return completedData;
// }

// // =================== switch case ===========================

// hideComponent = (name) => {
//   switch (name) {
//     case "showActive":
//       this.setState({ showActive: true, showAll: false, showComplete: false });
//       break;
//     case "showComplete":
//       this.setState({ showComplete: true, showAll: false, showActive: false });
//       break;
//     case "showAll": 
//       this.setState({ showAll: true, showActive: false, showComplete: false });
//       break;
//     default:
//       this.setState({ showAll: true, showActive: false, showComplete: false });
//   }
// }

// // ======================================================

//   render() {
//     // console.log("render",this.state.list);
//     const { showAll, showActive, showComplete } = this.state;       // switch case state
//     console.log(this.props);

//     return (
//       <div>
// {/* ============== header container ============== */}
//         <div className="container">
//           {/* <form onSubmit={this.handleSave}> */}
//           <center>
//             <input type="text" className="form-control" id="todo" value={this.state.todo} onChange={this.handleChange} />
//             <button className="btn btn-warning" onClick={this.addTodo} disabled={!this.state.todo}>
//               {"Add " + (this.state.list.length + 1)}
//             </button>

//             <button
//             className="btn btn-success"
//             onSubmit={this.handleSave}
//             >
//             Save Data
//             </button>
//             <button
//             className="btn btn-info"
//             >
//             Fetch Data
//             </button>
//           </center>
//           {/* </form> */}
//         </div>

// {/* ============== Select All / De - Select All ============== */}
//   <span className="check">
//   <MDBIcon icon="check" 
//   onClick={this.selectAllChkBox} 
//   disabled={this.state.list.length === 0}
//   > Select All
//   </MDBIcon>
//   </span>    
//   <span className="check" style={{float: 'right'}}>
//   <MDBIcon icon="ban"
//   onClick={this.deSelectAllChkBox}
//   disabled={this.state.list.length === 0}
//   > De - Select All
//   </MDBIcon>
//   </span>
//   <br/>
//   <hr/>

// {/* ============== Todo List Box ============== */} 
// {/* <MyList name={"something"} onChange={this.doneTodo}/> */}

// <div className="box">
// { showAll && this.renderList()}
// { showActive && this.renderActiveList() }
// { showComplete && this.renderCompletedList() }
// </div>
// <br/>
          
//             <span style={{color: 'aliceblue'}}>
//                 {(this.state.list
//                   .filter(res => (res.done === false))
//                   .length) + " items left"}
                
//                 <button className="btn3 btn-danger"
//                 onClick={this.DeleteAllItems}
//                 disabled={this.state.list.length === 0}
//                 >
//                 <MDBIcon far icon="trash-alt" /> Delete All
//                 </button>
//             </span>
// {/* ============== hideComponent switch case Buttons ============== */} 
//         <center><br/>
//             <button className="btn btn-success"
//             onClick={() => this.hideComponent('showAll')}
//             >
//               <MDBIcon icon="check" /> All
//             </button>
//             <button className="btn btn-info"
//             onClick={() => this.hideComponent("showActive")}
//             >
//               <MDBIcon icon="check" /> Active
//             </button>
//             <button className="btn btn-info"
//             onClick={() => this.hideComponent("showComplete")} >
//               <MDBIcon icon="ban" /> Completed
//             </button>
//         </center>
//       </div>
//     )
//   }
// }

// // {/* ============== List Method ============== */} 
// const MyList = (props) => {
//   let name
//   // const {list} = this.props
//   // const name = list.reduce(function (a, b) {
//   //     if (a.indexOf(b.name) === -1) {
//   //       a.push(b.name)
//   //     }
//   //     return a;
//   //   }, []);
    
//   // console.log(name);
//   let AlertClass
//   if(props.done){
//     name = <strike>{props.name}</strike>
//     AlertClass = "alert alert-danger"
//   }
//   else{
//     name = props.name
//     AlertClass = "alert alert-info"
//   }
//   return(
//     <Fragment>
//       <div className={AlertClass}>
//         <div className="checkbox">
//           <label><input type="checkbox" defaultValue={props.name} onChange={props.onChange} checked={props.done}/>
//           &nbsp;
//           {name}
//           </label>
//           <button type="button" className="btn2 btn-danger" 
//           onClick={() => props.handleDelete()}
//           >
//             <MDBIcon far icon="trash-alt" />
//             {/* <span class="glyphicon glyphicon-trash"></span>
//             // enable the bootstrap css in index.html */}
//           </button>
//         </div>
//       </div>
//     </Fragment>
//   )
// }

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     list: state.list.list
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setList: (list) => dispatch(setList(list))
//   }
// }

// export default compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   firestoreConnect([
//     { collection: 'todoList' }
//   ])
// )(Todo);
