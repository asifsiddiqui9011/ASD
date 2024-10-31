import './Games.css'
import { Link } from 'react-router-dom'
//import imgg from "https://s.cafebazaar.ir/images/upload/screenshot/com.web30india.DuckHunt-5223307d-90b1-48a3-a43a-dea15bbdc5ed.png?x-img=v1/resize,h_600,lossless_false/optimize"
const Games = () => {
  return (
    <div className='games-container'>
      <Link to='/play/0'><div className='game-box'>
        <img src={'https://s.cafebazaar.ir/images/icons/com.web30india.DuckHunt-833e039c-61da-4b86-a504-e4567bbea60f_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize'} alt="" className='game-img'/>
        <h1>Duck Hunt</h1>
      </div> 
      </Link>
    </div>
  )
}

export default Games
