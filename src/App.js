import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isLoading: true,
    movies: []
  };

  plus = () =>  {
    /* 
      ! this.setState(current => ({ count: current.count + 1 }));
      this.setState({ count: this.state.count+1 })
      위와 같이 this.state.count를 직접 코드에 넣는 것은 좋은 코드가 아님.
      -> 추후 성능상 문제, state에 의존하면 안 됨

      state를 set할 때 react에서 외부의 상태에 의존하지 않는 가장 좋은 방법
      this.setState(current => current.count + 1)
    */
  }
  
  getMovies =  async () => {
    // const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    // console.log(movies.data.data.movies[0]); // 대체: es6 문법 🔽

    const {
       data: { 
         data: { movies }
        }
       } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating"); // ?sort_by=rating 랭킹 정렬
      //  console.log(movies);
       this.setState({ movies, isLoading: false }); // this.state.movies에 axios로 가져온 movies를 넣는다.
  }

  componentDidMount() {
    // setTimeout(_ => this.setState({ isLoading: !this.state.isLoading }), 3000);
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        { isLoading ? 
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
        : (
          <div className="movies">
          {movies.map(movie => {
          return <Movie key={movie.id} id={movie.id} year={movie.year} genres={movie.genres} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image}/>
        })}
        </div>
        )
        }
      </section>
    )
  }
}

export default App;
