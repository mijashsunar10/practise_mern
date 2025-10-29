import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';


const AddFoodReceipe = () => {

  const [receipeData,setReceipeData]=useState({})
  const navigate=useNavigate()
  const onHandleChange=(e)=>
  {
    
    let val=(e.target.name==="ingredients") ? e.target.value.split(","):e.target.value
    setReceipeData(pre=> ({...pre,[e.target.name]:val}))

  }

  const onHandleSubmit=async(e)=>{
    e.preventDefault()
    console.log(receipeData)
    await axios.post("http://localhost:3000/receipe",receipeData).then(()=>navigate("/"))
  }
  return (
    <>
      <div className="container">
        <form action="" className="form"  onSubmit={onHandleSubmit}>
            <div className="form-control">
                <label htmlFor="">Title</label>
                <input type="text" className='input' name='title' onChange={onHandleChange}/>
            </div>

             <div className="form-control">
                <label htmlFor="">Time</label>
                <input type="text" className='input' name='time' onChange={onHandleChange}/>
            </div>
             <div className="form-control">
                <label htmlFor="">Ingredients</label>
                <textarea type="text" className='input-textarea' name='ingredients' rows="5" onChange={onHandleChange}></textarea>
            </div>

            <div className="form-control">
                <label htmlFor="">Instructions</label>
                <textarea type="text" className='input-textarea' name='instructions' rows="5" onChange={onHandleChange} ></textarea>
            </div>

             <div className="form-control">
                <label htmlFor="">Recipe Image</label>
                <input type="file" className='input' name='file' />
            </div>
            <button type='submit'>Add Receipe</button>
             
        </form>
      </div>
      
    </>
  )
}

export default AddFoodReceipe
