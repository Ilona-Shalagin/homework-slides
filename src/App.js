import { useState } from 'react'
import { data } from './data';
import { list } from './list';
import './App.css';

function App(){
  const[gift,setGift]=useState(0);
  const{price,description,image,readMore} = data[gift];
  const[showSlide,setShowSlide] = useState(false);
  

  const[ideas,setIdeas] = useState(list);
  const[showText,setShowText] = useState(false);

  const previousButton =()=>{
    setGift((gift=>{
      gift--;
      if(gift < 0) {
        return data.length-1;
      }
      return gift
    }))
  }
  const nextButton =() =>{
     setGift((gift=>{
       gift++;
       if(gift > gift.length-1) {
         gift = 0;
       }
         return gift
       
     }))
  }
  const removeItem = (id) => {
    let newIdea = ideas.filter(idea => idea.id !== id);
    setIdeas(newIdea);
    console.log(newIdea)
  }
  const showTextClick = (item) => {
    item.showMore = !item.showMore;
    setShowText(!showText)
  }
  const textShow = (gift) => {
    gift.readMore = !gift.readMore;
    setShowSlide(!showSlide);
    console.log(showSlide)
  }

  return(
    <div>
    <div className="container">
     <h1>Wine Gift Baskets</h1>
    </div>
    <div className="container">
     <button className="btn" onClick={previousButton}>◀</button>
     <img src={ image } alt="gift" width="450" />
     <button className="btnOne" onClick={nextButton}>▶</button>
    </div>
    <div className="container"> 
    <p className="text">{readMore ? description : description.substring(0,140)+"..." }
    <button onClick={() => textShow(gift)}>{readMore ? "readLess" : "readMore"}</button></p>
    </div>
    <div className="container price">
      $ {price}
    </div>

    <hr></hr>
    <div className="container">
    <h2>{ list.length }  Gifts for Wine Lovers Who Have Everything</h2>
    </div>
    {ideas.map((item => {
      const {id,name,description,image,price,showMore} = item;
      
      return(
        <div key={id}>
          <div className="container">
            <h3 className="top">{ name }</h3>
          </div>
          <div className="container">
            <img src={ image } alt="gift" width="450px"/>
          </div>
          <div>
            <p className="text">{showMore ? description : description.substring(0,130)+"..."}
            <button className="btnShow" onClick={() => showTextClick(item)}>{showMore ? "showLess" :"showMore"}</button></p>
          </div>
          <div className="container price">
           $ { price }
          </div>
          <div className="container">
            <button className="btnRemove" onClick={() => removeItem(id)}>Remove</button>
          </div>
        </div>
      )
    }))}
    <div className="container">
    <button onClick={()=>setIdeas([])}>Delete All</button>
    </div>
    </div>
    
  )
}
export default App;