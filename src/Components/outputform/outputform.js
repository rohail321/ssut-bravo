import React from 'react'
import './outputform.css'

export default function outputform(props) {
    let outputForm;
        if(props.output===true){
            outputForm=
            <form className="form">
            <div className="form-name">  <label ><strong>First Name:</strong></label>
            <p>{props.firstname}</p>
            <label ><strong>Last Name:</strong></label>
            <p>{props.lastname}</p>
            <label ><strong>Class:</strong></label>
            <p>{props.class}</p>
            <label ><strong>Roll Number:</strong></label>
            <p>{props.rollnumber}</p>
            </div> 
            </form>
        }
    return (

        
        <div>
            {outputForm}
            
        </div>
    )
}
