import React,{Component} from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component{
  state = {}

  componentDidMount(){
    this._getMovies();
  }
/*promise 
1. 비동기, 2. 시나리오 잡아줌 -> good & bad

*/

//나의 기능은 _ 로 시작하도록, 리액트는 자체 기능이 많기 때문에 구분하는 것.
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie 
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres} 
      synopsis={movie.synopsis}
      />
    })
    return movies
  }

  _getMovies = async ()=> {
    const movies = await this._callApi()
    this.setState({
      movies: movies
    })
  }
  
  _callApi = ()=>{
    return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating")
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App">
       {this.state.movies ? this._renderMovies() : "loading"}
      </div>
    );
  }
}

export default App;
