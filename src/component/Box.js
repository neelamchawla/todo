import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Box extends Component{
    constructor(props){
        super(props);
        this.state = {
            allChecked: false,
            list: [
                {id:1, name: "item1", isChecked: false},
                {id:2, name: "item2", isChecked: false},
                {id:3, name: "item3", isChecked: false},
            ],
        };
    }

handleChange = (e) => {
    let list =  this.state.list;
    let allChecked = this.state.allChecked;
    if(e.target.value === "checkAll"){
        list.forEach(item => {
            item.isChecked = e.target.checked;
            allChecked = e.target.checked;
        });
    }
    else{
        list.find( item => item.name === e.target.name).isChecked = e.target.checked;
    }
    this.setState({list:list, allChecked: allChecked});
}

renderList = () => {
    return this.state.list.map(item =>
        <div>
            <input key={item.id} type="checkbox" name={item.name} value={item.name} checked={item.isChecked} onChange={this.handleChange} />
            <label>{item.name}</label>
        </div>
    )
}
render(){
    return(
        <div  className="container">
            <input type="checkbox" 
            value="checkAll" 
            checked={this.state.allChecked} 
            onChange={this.handleChange} />Check all
            <br/>
            {this.renderList()}
        </div>
    );
  }
}

export default Box;

// =========

// selectAllChkBox = (e) => {
//     let list = this.state.list
//     // console.log("lst",list);
//     let allChecked = this.state.allChecked;
//     if(e.target.value === "checkAll"){
//     list.map(res => {
//         res.done = true;
//         item.isChecked = e.target.checked;
//         allChecked = e.target.checked;
//     })
//     }
//     else {
//     this.setState({list: list})
//     }
//     // this.setState({list: list})
//     console.log('selectAll list', list)
//     // return list;
//     this.setState({list:list, allChecked: allChecked});
//   }


{/* <input type="checkbox" 
value="checkAll" 
checked={this.state.allChecked} 
onChange={this.handleChange} />Check all */}

// handleChange = e => {
//     let itemName = e.target.name;
//     let checked = e.target.checked;
//     this.setState(prevState => {
//       let { list, allChecked } = prevState;
//       if (itemName === "checkAll") {
//         allChecked = checked;
//         list = list.map(item => ({ ...item, isChecked: checked }));
//       } else {
//         list = list.map(item =>
//           item.name === itemName ? { ...item, isChecked: checked } : item
//         );
//         allChecked = list.every(item => item.isChecked);
//       }
//       return { list, allChecked };
//     });
//   };