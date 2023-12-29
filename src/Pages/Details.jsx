import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../Context';

//we need the id of the item from the url to display its details on this page 
// for that we will use the useParams Hook from react 
function Details() {
  const params=useParams();
  //importing the recipe dteails from the context api using the use context hook
  const {recipedeatils,setrecipedeatils,handleAddtoFavourite,favouriteList}=useContext(GlobalContext)
  useEffect(()=>{
  async function getRecipeDetails(){
      const response=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`)
      const data=await response.json()
      if(data?.data){
        setrecipedeatils(data?.data)
      }
  }
  getRecipeDetails()
  },[])
  return (
    <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 '>
       <div className='row-start-2 lg:row-start-auto'>
         <div className='h-96 overflow-hidden rounded-xl group'>
           <img src={recipedeatils?.recipe?.image_url} className='w-full h-full  block group-hover:scale-105 duration-300'/>
         </div>
       </div>
       <div className='flex flex-col gap-3'>
          <span  className='text-md text-cyan-700 font-medium'  >{recipedeatils?.recipe?.publisher}</span>
          <h3 className='font-bold text-4xl truncate text-black'>{recipedeatils?.recipe?.title}</h3>
          <button  onClick={()=>handleAddtoFavourite(recipedeatils?.recipe)} className='p-3 px-8 rounded-lg text-sm uppercase font-md tracking-wider inline-block mt-3 shadow-md bg-black text-white'>{ favouriteList && favouriteList.length>0 && favouriteList.findIndex(item=> item.id===recipedeatils?.recipe.id)!==-1?'Remove from Favourite':"Add To favourite"}</button>
          <span className='text-2xl font-semibold text-black'>Ingredients:</span>
        <ul className='flex flex-col gap-3'>
         {
          recipedeatils?.recipe?.ingredients.map((item)=><li><span className='text-2xl font-semibold text-black'>{item.quantity} {item.unit}</span><span className='text-2xl font-semibold text-black'>{item.description}</span></li>)
         }
        </ul>
       </div>
    </div>
  )
}

export default Details
