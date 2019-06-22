import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.list);
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink
            activeClassName="saved-active"
            key={movie.id}
            to={`/movies/${movie.id}`}
            className="saved-movie"
          >
            {movie.title}
          </NavLink>
        ))}
        <Link to="/" className="home-button">
          Home
        </Link>
      </div>
    );
  }
}
