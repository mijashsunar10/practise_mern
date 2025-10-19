import React from 'react'
import { useLoaderData } from 'react-router-dom'
import foodImg from '../assets/images/image.png'
import { FaStopwatch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


export default function Receipitems() {
    const allRecipes = useLoaderData()
    console.log(allRecipes)

  return (
    <>
    <div className='card-container'>
        {
            allRecipes?.map((item,index)=>
            {
                return(
                    <div key={index} className='card' >
                        <img src={foodImg} alt="" width="120px" height="100px" />
                        <div className='card-body'>
                            <div className='title' >
                                {item.title}

                            </div>

                            <div className='icons'>

                                <div className='timer'>
                                   <FaStopwatch />
                                   30min 
                                </div>

                                <FaHeart />
                                   
                            </div>


                        </div>
                        

                    </div>

                )
            })
        }
    </div></>
  )
}
