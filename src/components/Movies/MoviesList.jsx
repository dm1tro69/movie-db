import React, { Component } from "react";
import MovieItem from "./MovieItem";
import { API_URL, API_KEY_3 } from "../../api/api";

export default class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };
  }

  getMovies = (filters, page) => {
    const {filters: {sort_by}} = filters
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU&sort_by=${sort_by}&page=${page}`;
    fetch(link)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({
            movies: data.results
          });
        });
  }

  componentDidMount() {
    this.getMovies(this.props, this.props.page);
    // const {filters: {sort_by}} = this.props
    // const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU&sort_by=${sort_by}`;
    // fetch(link)
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(data => {
    //     this.setState({
    //       movies: data.results
    //     });
    //   });
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.filters.sort_by !== this.props.filters.sort_by) {this.getMovies(nextProps)
  //   }
    //   const {filters: {sort_by}} = nextProps
    //   const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU&sort_by=${sort_by}`;
    //   fetch(link)
    //       .then(response => {
    //         return response.json();
    //       })
    //       .then(data => {
    //         this.setState({
    //           movies: data.results
    //         });
    //       });
    // }
  // }
  componentDidUpdate(prevProps) {
      if (this.props.filters.sort_by !== prevProps.filters.sort_by){
        this.props.onChangePage(1)
        this.getMovies(this.props, 1)}
      if (this.props.page !== prevProps.page){this.getMovies(this.props, this.props.page)}
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="row">
        {movies.map(movie => {
          return (
            <div key={movie.id} className="col-6 mb-4">
              <MovieItem item={movie} />
            </div>
          );
        })}
      </div>
    );
  }
}
