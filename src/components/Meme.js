import React from 'react'
import  "../App.css"
import memesData from "../memesData.js"
import { useState } from 'react'
const Meme = () => {
 
const [memeImage, setmemeImage] = useState("")


const getMemeImage = () => {
 const memesArray = memesData.data.memes
 const randomNumber = Math.floor(Math.random() * memesArray.length)
setmemeImage(memesArray[randomNumber].url)
//  const url = memesArray[randomNumber].url
//  console.log(url)
}
    return (
        <main>
        <div className="form">
            <input 
                type="text"
                placeholder="Top text"
                className="form--input"
            />
            <input 
                type="text"
                placeholder="Bottom text"
                className="form--input"
            />
            <button 
                onClick={getMemeImage}
                className="form--button"
            >
                Get a new meme image 🖼
            </button>
        </div>
        <img src={memeImage}/>
    </main>
    )
}

export default Meme;
