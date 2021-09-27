import React, { useEffect } from 'react';
import '../components/Movie.css';

const Detail = ({ location: {state}, history }) => {

     useEffect(_ => {
          if(state === undefined) {
               history.push('/');
          }
     }, [state, history])

     if(state) {
          const { year, title, summary, poster, genres } = state;
          return (
               <div className="detail">
                    <div className="movie">
                         <img src={poster} alt={title} title={title}/>
                         <h5 className="movie__year">{year}</h5>
                         <h3 className="movie__title">{title}</h3>
                         <ul className="genres">
                              {genres.map((genre, index) => <li className="genres__genre" key={index}>{genre}</li>)}
                         </ul>
                         <p className="movie__summary">{summary}</p>
                    </div>
               </div>
          )
     } else {
          return null;
     }
}

// class Detail extends React.Component {
//      constructor(props) {
//           super(props);
//      }
     
//      componentDidMount() {
//           const { location, history } = this.props;

//           if(location.state === undefined) {
//                history.push('/');
//           }
//      }
//      render() {
//           const { location } = this.props;
//           if(location.state) {
//                return <div>{location.state.title}{location.state.summary}</div>
//           } else {
//                return null;
//           }
//      }
// }

// const Detail = ({ location: {state}, history }) => {
//      // console.log(state);
//      if(state === undefined) {
//           history.push('/');
//           return null;
//      } else {
//           return (
//                <div>
//                     <div>{state.title}</div>
//                     <div>{state.summary}</div>
//                </div>
//           )
//      }
// }

export default Detail;