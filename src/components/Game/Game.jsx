import React, { useState } from 'react'
import './Game.css'
import { Link } from 'react-router-dom'

const Game = ({ name, image, rating, id, deleteGame }) => {
  const [favoris, setFavoris] = useState(false)
  return (
    <div className='game-container'>
      <h2>
        {name} {favoris ? '❤️' : null}
      </h2>
      <button
        type='button'
        onClick={() => {
          setFavoris(!favoris)}}>
        {favoris ? 'retirer des fav' : 'ajouter aux fav'}{' '}
      </button>
      <img src={image} alt='game' />
      <p> note: {rating}</p>
      <button type='button' onClick={() => deleteGame(id)}>
        DELETE
      </button>
      <Link to={`/games/${id}`}> Voir Jeux </Link>
    </div>
  )
}

export default Game
