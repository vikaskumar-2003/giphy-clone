import React, { useEffect, useState } from 'react'
import { GifState } from '../context/Gif-Context'
import Gif from '../components/Gif';

const Favorites = () => {
  const[favoriteGIFs,setFavoriteGIFs]=useState([])
  const { gf, favorites } = GifState();

  const fetchFavoriteGIFs = async () => {
    const { data: gifs } = await gf.gifs(favorites);
    setFavoriteGIFs(gifs)
  }

  useEffect(() => {
    fetchFavoriteGIFs();
  },[favorites])

  return (
    <div className='mt-2'>
      <span>
        My Favorites
        <div className="columns-2 md:columns-4 xl:columns-5 gap-2 mt-2">{
          favoriteGIFs.map((gif) => (
          <Gif gif={gif} key={gif.id} />
        ))
        }</div>
      </span>
    </div>
  )
}

export default Favorites
