import React, { Component } from 'react'

class ListUsers extends Component {
  render() {
    return (
      <ol className='users-list'>
		{this.props.profiles.map((profile) => {
      		const userName = this.props.users[profile.userID].name;
            const favMovieName = this.props.movies[profile.favoriteMovieID].name;
            return (

                <li key={profile.id} className='users-list-item'>
                    {userName}'s favorite movie is {favMovieName}.
                </li>
            );
  		})}
      </ol>
    )
  }
}

export default ListUsers