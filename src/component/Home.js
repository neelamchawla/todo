import React, { Component } from 'react'
import Axios from 'axios';

class Home extends Component {
  state = {
    posts: []
  }
  
  componentDidMount() {
    Axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(res => {
      // console.log(res);
      this.setState({
        posts: res.data.slice(0,5)
      })
    })
  }

  render() {
    const {posts} = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="containers container" key={post.id}>
            <div className="card-content">
              <span className="card-title">
                {post.id}.  
                {post.title}
              </span>
              <p className="body">{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">
        No Post's Yet
      </div>
    )

    return (
      <div className="home">
        <h4>Todo List Demo's</h4>
          <div className="box2">
            {postList}
          </div>
      </div>
    )
  }
}

export default Home;