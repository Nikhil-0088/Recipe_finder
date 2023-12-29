import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const GlobalContext = createContext(null)
function GlobalState({ children }) {
  const [search, setsearch] = useState("")
  const [loading, setloading] = useState(false)
  const [recipeList, setrecipeList] = useState([])
  const [recipedeatils,setrecipedeatils]=useState(null)
  const [favouriteList,setfavouriteList]=useState([])
  const navigate=useNavigate()
  async function handleSubmit(event) {
    event.preventDefault()
    try {
      setloading(true)
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`)
      const data = await res.json();
      if (data?.data?.recipes) {
        setrecipeList(data?.data?.recipes)
        setloading(false)
        setsearch("")
        navigate('/')
      }
    }
    catch (e) {
      console.log(e)
      setloading(false)
      setsearch("")
    }
  }
  function handleAddtoFavourite(Curitem){
    let copy=[...favouriteList]
    const index=copy.findIndex(item=>item.id===Curitem.id)
    if(index===-1){
      copy.push(Curitem)
    }
    else{
      copy.splice(index)
    }
    setfavouriteList(copy)
  }
  return (
    <GlobalContext.Provider value={{ search, setsearch, handleSubmit,loading,recipeList,recipedeatils,setrecipedeatils,handleAddtoFavourite,favouriteList}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
