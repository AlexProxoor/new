import React, { useState, useEffect } from 'react'
import './Two.css'

function Two() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [newImg, setNew] = useState(true)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setImageUrl(result.message)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [newImg])

  if (error) {
    return <div>Ошибка: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Загрузка...</div>
  } else {
    return (
      <div className="container">

    
        <p className="description">
          [2] Задание. Используя предоставленную API, необходимо
          сделать запрос на сервер, получить картинку и
          отобразить пользователю.
          https://dog.ceo/api/breeds/image/random

        </p>
        <img src={imageUrl} alt="Random Dog" />
        <div>
          <button onClick={() => setNew(!newImg)}>New img</button>
        </div>
      </div>
    )
  }
}

export default Two
