import React, { useState } from 'react'
import data from './Data'
const App = () => {
  const [search,setSearch]=useState('')
  const changeHandler=(e)=>{
      setSearch(e.target.value)
  }
  return (
    <>
    <h3>Books App</h3>

      <input type='text' value={search} onChange={changeHandler} style={{"width":"200px"}} placeholder='search books'/>
      {
        data.filter(book=>book.name.toLowerCase().includes(search.toLowerCase())).map((ele)=>{
          return <div>
            <p>{ele.name}</p>
            <img src={ele.img} style={{"height":"150px"}}/>
          </div>
        })
      }


    </>
  )
}

export default App