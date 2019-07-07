import React, { Component } from 'react'
import './form.css';
import { Button } from 'react-bootstrap';


class Forms extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname:'',
            class:'',
            rollnumber:'',
            output:false,
            student:[],
            loading:false
        }
        this.setFname=this.setFname.bind(this);
        this.setLname=this.setLname.bind(this);
        this.clicked=this.clicked.bind(this)
        this.setClass=this.setClass.bind(this)
        this.setRollnumber=this.setRollnumber.bind(this)
        // this.getStudent=this.getStudent.bind(this)

    }

    setFname(firstnames){
        this.setState({firstname:firstnames.target.value});

    }
    setLname(lastnames){
        this.setState({lastname:lastnames.target.value});
        

    }

    setClass(Class){
        this.setState({class:Class.target.value});
        

    }
    setRollnumber(rollnumbers){
        this.setState({rollnumber:rollnumbers.target.value})
    }

    clicked(e){
        e.preventDefault();
        this.state.student.push({firstname:this.state.firstname});
        this.setState({output:true})
       


    }
    // componentDidMount(){
    //     fetch("",
    //     {method:"GET"})
    //     .then((data)=>{
    //         data.json()
    //     })
    //     .then((datajson)=>{
    //         console.log(datajson)
    //     }).catch(err=>{
    //         console.log(err)
    //     })

    //     console.log('component did mount')

    // }

    // componentDidUpdate(){
    //     console.log("update")

    // }

    // getStudent(){
    //     const stds=this.state.student.map((s)=>{
    //         console.log(s.firstname) 

    //         return(s.firstname)
    //     });
    //     console.log(stds) 

    //     return stds
  
  
    // }




    
    

   


    render(){
        // let stds;

        // if(this.state.student!==null || this.state.student!==undefined){
        //     stds=this.state.student.map((s)=>{
        //         return(s.firstname)
        //     }).reduce((arr,el)=>{
        //         return (arr.concat(el))
        //     },[])
           
            
            
        // }
        // console.log(stds)


        let output;
        if(this.state.output===true){
            output=<form className="form">
            <div className="form-name">  <label ><strong>First Name:</strong></label>
            <p>{this.state.firstname}</p>
            <label ><strong>Last Name:</strong></label>
            <p>{this.state.lastname}</p>
            <label ><strong>Class:</strong></label>
            <p>{this.state.class}</p>
            <label ><strong>Roll Number:</strong></label>
            <p>{this.state.rollnumber}</p>
            </div> 
            </form>
        }
        
        
        return(<div className="forms">
            
            
            
            <form className="form">
            <div className="form-name">
           
                
                <label><strong>First Name</strong></label>
                <input className="fn-input" type="text" onChange={this.setFname} value={this.state.firstname}  placeholder="firstname" />
                
            
                <label><strong>Last Name</strong></label>
                <input className="ln-input" type="text"  onChange={this.setLname} value={this.state.lastname}  placeholder="lastname"  />               
                
                
                <label><strong>Class</strong></label>
                <input type="text"  onChange={this.setClass} value={this.state.class}  placeholder="class"  />               
                
                <label><strong>Roll Number</strong></label>
                <input type="text"  onChange={this.setRollnumber} value={this.state.rollnumber}  placeholder="roll number"  />               
               
            </div>
            
            <Button onClick={this.clicked } variant="primary">Submit</Button>



            
            </form>

            {output}

            
           
            
            
            
            {/* <Resturant/> */}
            
            {/* <form className="form">
            <div className="form-name">  <label ><strong>First Name:</strong></label>
            <p>{stds}</p>
            </div>
            </form> */}
            
            

        </div>);

    }
}

export default Forms;