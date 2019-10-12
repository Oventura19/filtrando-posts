import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implementar la funcionalidad requerida

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      everyPosts: posts,
      posts: posts
    }
  }

  handleChange(e) {
    let actualList = [];
    let newList =[];

    actualList = this.state.everyPosts;
    newList = actualList.filter((item, index) => item.title.toLowerCase().includes(e.target.value.toLowerCase() ));

    this.setState({
      posts: newList
    });
  }

  render() {
    return (
      <div>
        <div className="filter">
          <input type="text" onChange={this.handleChange.bind(this)} placeholder="Ingresa el término de búsqueda"/>
        </div>
        <ul>
          {this.state.posts.map((post, index) => (
          <li>
            <a href={posts[0].url}><img src={posts[0].image}/></a>
            <p>{posts[0].title}</p>
          </li>
          ))}
        </ul>
      </div>
    )
  }
}


export default App


