import React, { useContext } from 'react'
import { GlobalContext } from '../Context'
import RecipeCard from '../components/RecipeCard'

function Favourites() {
  const {favouriteList} = useContext(GlobalContext)
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {favouriteList && favouriteList.length > 0
        ? favouriteList.map((item) => <RecipeCard item={item} />)
        : <p className="lg:text-4xl text-xl text-center text-black font-extrabold">Nothing Added To Favourites</p>
      }
      
    </div>
  )
}

export default Favourites
