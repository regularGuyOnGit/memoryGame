
import { useEffect, useState } from 'react';
import './App.css'
import Score from './Score';
import HighScore from './HighScore';
import ScoreCard from './ScoreCard';

function App() {

  const [score,setScore] = useState(0);
  const [highScore,setHighScore] = useState(0)
 

  useEffect(()=>{
    highScore < score ? setHighScore(score) : setHighScore(highScore)

  },[score])

  const scoreIncrement = (array)=>{
    setScore(array.length)
  }
  const loaderChange = ()=>{
    setLoader(!loader)
  }

  if(score===10){
   return <div className="completed">
    <h1>You Selected Every-Card Congrants!</h1>
    <button onClick={()=> setScore(0)}>&larr;</button>
   </div>
  }


  return (
    <>  

    <div className="scores">
   
    <Score score = {score}/>
   <HighScore highScore = {highScore}/>
    </div>
    <p className='para'>The only rule for this game is to avoid selecting the same card more than once.</p>
    <ScoreCard loaderChange= {loaderChange} scoreIncrement = {scoreIncrement}/>
    {/* <img src="/assets/img.jpg" alt="none"/> */}

    </>
  )
}

export default App
