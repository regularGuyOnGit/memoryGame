import React from 'react';
import { useState,useEffect } from 'react';
import './componentStyles/scoreCards.css'
// import {kurama} from '../public/assets/1248757.png'

export default function ScoreCard({scoreIncrement}) {
    const [cards,setCards] = useState()
    const [id,setId] = useState([])
    

    useEffect(()=>{
    const url = fetch('https://narutodb.xyz/api/tailed-beast');
    url.then(res => res.json()).then(res => setCards(res))
    .catch(res=> console.log(res))
    },[])
    useEffect(()=>{
        scoreIncrement(id)
    },[id])


    function shuffleArray(itemsId) {

        const beastArray = cards.tailedBeasts

        for (var i = beastArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = beastArray[i];
            beastArray[i] = beastArray[j];
            beastArray[j] = temp;
        }
        setCards({...cards,beastArray})
        if(!id.includes(itemsId)){
            setId([...id,itemsId])
        }else{
            setId([])
        }
    }
    

    if (!cards){

        return (<>
        <div className='fullScreen'><img src="/assets/giphy.gif" alt="none"/></div>
        </>)
    }
    console.log(cards);
  return (
   <>
<div className="cards">
    {cards.tailedBeasts.map(items => {
        return <div onClick={()=>shuffleArray(items.id)} className='beastCards' key={items.div}>
<img src={items.id == 711 ? '/assets/1248757.png' : items.images} alt={items.name} />

        </div>
    })}
</div>


   </>
  );
}
