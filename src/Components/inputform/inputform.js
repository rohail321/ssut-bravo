import React from 'react'
import { Button } from 'react-bootstrap';
import './inputform.css'

export default function inputform(props) {
    let Inputform
    if(props.inputform===true){
        Inputform=<div>
        <form >
            <div className="form">
        <div className="form-name">
       
            
            <label><strong>First Name</strong></label>
            <input className="fn-input" type="text" onChange={props.setFname} value={props.firstname}  placeholder="firstname" />
            
        
            <label><strong>Last Name</strong></label>
            <input className="ln-input " type="text"  onChange={props.setLname} value={props.lastname}  placeholder="lastname"  />               
            
            
            <label><strong>Class</strong></label>
            <input type="text"  onChange={props.setClass} value={props.class}  placeholder="class"  />               
            
            
            <label><strong>Roll Number</strong></label>
            <input type="text"  onChange={props.setRollnumber} value={props.rollnumber}  placeholder="roll number"  />               
           
        <Button  className='button' onClick={props.clicked } variant="primary">Submit</Button>
        </div>
        </div>
        
        
        </form>
       
   
    <div>
        
    </div>
    </div>

    }
    return (
        <div>
            {Inputform}
        </div>      
    )
}
