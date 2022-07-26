import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const GameDetails = () => {
  const [gameDetails, setGameDetails] = useState({})

  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`https://apis.wilders.dev/wild-games/games/${id}/`)
      .then(response => response.data)
      .then(data => {
        setGameDetails(data)
      })
  }, [id])

  return (
    <div>
      {gameDetails && (
        <>
          <h2>{gameDetails.name}</h2>
          <img src={gameDetails.background_image} alt='game' />
          <p>{gameDetails.rating}</p>
          <Link to='/'> Retour jeux </Link>
        </>
      )}
    </div>
  )
}

export default GameDetails
