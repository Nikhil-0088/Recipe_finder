import React, { useContext } from 'react'
import { GlobalContext } from '../Context'
import RecipeCard from '../components/RecipeCard'
// because our recipe list variable was managed by contect api we cannow access it in any component without passing params 
function Home() {
  const {loading,recipeList}=useContext(GlobalContext)
  if (loading) return <div>Loading Please Wait....</div> 
   return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
     {recipeList && recipeList.length>0
       ? recipeList.map((item)=><RecipeCard item={item}/>)
       :<p className="lg:text-4xl text-xl text-center text-black font-extrabold">No recipes Matched your serach result</p>
     }
    </div>
  )
}

export default Home
//while dispalying items in an array by using map function please note .map((item)=><p>{item}<p>) no need of {}  in tohe call back functiom of map