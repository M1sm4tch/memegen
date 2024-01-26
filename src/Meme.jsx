import memesdata from "./memesdata";
import { useEffect,useState } from "react";

const Meme = () => {

  const [getAllMemes, setAllMemes] = useState([])

  useEffect(()=>{
      async function getMemes() {
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMemes(data.data.memes))
      }
    getMemes() 
    } ,[]
  )

  const [getmeme,setmeme] = useState({
    topText:"",
    bottomText:"",
    randomImage:"https://i.imgflip.com/1ur9b0.jpg",
  })


  function GetNewMeme() {
    const randomNumber = Math.floor(Math.random()* getAllMemes.length)
    const url = getAllMemes[randomNumber].url
    setmeme(prevmeme=>({
      ...prevmeme,
      randomImage:url
    }))
  }

  function handleChange(event) {
    const {name, value} = event.target
    setmeme(prevmeme => ({
      ...prevmeme,
      [name] : value
    }))
    console.log(getmeme)
  }
  return (
    <main>
        <div className="form">
            <input className="forminputs" type="text" placeholder="top text"
              value = {memesdata.topText} onChange={handleChange} name="topText"
            />
            <input className="forminputs" type="text" placeholder="bottom text"
              value = {memesdata.bottomText} onChange={handleChange} name="bottomText"
            />
            <button className="formbutton" onClick={GetNewMeme}>Get a new Meme Image</button>
        </div>
        <div className="meme">
          <img src={getmeme.randomImage} className="memeimage"/>
          <h2 className="meme-text-top">{getmeme.topText}</h2>
          <h2 className="meme-text-bottom">{getmeme.bottomText}</h2>
        </div>
    </main>
  )
}

export default Meme