import React,{useState} from 'react'
import Word from "./Word"
import Para from "./Para"

const Project = () => {
  const [number,setNumber]=useState(null)
  const [radio,setRadio]=useState(null)
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    setNumber(e.target[0].value)
    if(e.target[1].checked){
      setRadio(e.target[1].value)
    }else if(e.target[2].checked){
      setRadio(e.target[2].value)
    }else {
      return
    }
    e.target[0].value='';
    e.target[1].checked=false;
    e.target[2].checked=false;
    
  }
  return (
    <div className="container">
      <h1>Random Text Generator</h1>
      <form  onSubmit={onSubmit}  >

      <div>

      <label>Number</label>
      <input type="number" />
      </div>
      

      
      <div className="radio">
      <div>
      <input type="radio" value="word" name="item"  />
      <label htmlFor="word">word</label>

      </div>
      <div>
      <input type="radio" value="para" name="item"  />
      <label htmlFor="para">para</label>

      </div>
      </div>
      <div>

      <button className="btn">Generate</button>
      </div>

      </form>
      <main>

      {radio==="word"&& <Word number={number}/>}
      {radio==="para"&& <Para number={number}/>}
      </main>
      



      
    </div>
  )
}

export default Project
