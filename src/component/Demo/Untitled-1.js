 
 super()
    this.handleCheckBox = this.handleCheckBox.bind(this)
    this.state = {
      checked: false
    }
  }
  
  handleCheckBox(e) {
    this.setState({
      checked: e.target.checked
    })
  }
  
  render(){
    return <input type="checkbox" onChange={this.handleCheckBox} checked={this.state.checked} />
  }
}

ReactDOM.render(<A/>, document.getElementById('app'))

this.state.data.map(
    (item, i) => <div key={i}> {item.matchID} {item.timeM} {item.description}</div>
)

const result = arrayToCount.filter(i => i === 2).length;
console.log('number of the found elements: ' + result);


const items = ['a', 'b', 'c', 'd', 'e', 'f']
const valuesToRemove = ['c', 'd']
const filteredItems = items.filter(item => !valuesToRemove.includes(item))
// ["a", "b", "e", "f"]


removeQuestion(index){
    this.questions = this.questions.filter((q, i) => {
      return i !== index;
    });
  }

  deleteQuestion(index){
    const length = this.questions.length
     
    if(index === 0) {
      this.questions = this.questions.slice(1);
    } else if(index === length - 1) {
      this.questions = this.questions.slice(0, length - 1);
    } else {
      this.questions = [
         ...this.questions.slice(0, index), 
         ...this.questions.slice(index + 1)
      ]
    }
  }

// --- hooks ---
  const Search = () => {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)
    return (
      <div>
        <input type="submit" value="Search" onClick={onClick} />
        { showResults ? <Results /> : null }
      </div>
    )
  }
  
  const Results = () => (
    <div id="results" className="search-results">
      Some Results
    </div>
  )
  
  ReactDOM.render(<Search />, document.querySelector("#container"))

  // --- setState ---

  var Search = React.createClass({
    getInitialState: function() {
        return { showResults: false };
    },
    onClick: function() {
        this.setState({ showResults: true });
    },
    render: function() {
        return (
            <div>
                <input type="submit" value="Search" onClick={this.onClick} />
                { this.state.showResults ? <Results /> : null }
            </div>
        );
    }
});

var Results = React.createClass({
    render: function() {
        return (
            <div id="results" className="search-results">
                Some Results
            </div>
        );
    }
});

ReactDOM.render( <Search /> , document.getElementById('container'));



============

datas.map(({name, index}) => {
  if (!dataOptions.includes(name)) {
       dataOptions.push({ value: index, label: name });
  }
}); 

