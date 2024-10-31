import { useState } from "react"
import "./PlayerForm.css"

const PlayerForm = () => {

  const[formData,setFromData] = useState({

  })

  const changeHandler =(e)=>{
    setFromData((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  const submitForm = (event)=>{
    event.preventDefault()
    console.log(formData,"form data")
  }
  
  return (
    <div className="playerform-container">
      <form onSubmit={submitForm} className="form-container">
        <span>
          <h1 className="form-heading">PLAYER DETAILS</h1>
        </span>
        <span>
          <input type="text" placeholder="Full Name" id="name" name="name" onChange={changeHandler}/>
        </span>

        
        <span>
          <input type="number" min={0}  placeholder="Age"name="age" id="age" onChange={changeHandler} />
        </span>

        <span>
          <select className="form-selector" name="gender" id="gender"  onChange={changeHandler}>
            <option >Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Others</option>
          </select>
        </span>
    
        <button className="submit-btn">Play</button>
     

      </form>
      
    </div>
  )
}

export default PlayerForm
