import React, { Component } from 'react'
import './form.css';
import { Button } from 'react-bootstrap';
import './loader.css'
import Navbar from './Components/navbar/navbar'
import Footer from './Components/footer/footer'
import OutputForm from './Components/outputform/outputform'
import Loader from './Components/loader/loader'
import Inputform from './Components/inputform/inputform'
import inputform from './Components/inputform/inputform';


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
            loading:true,
            inputform:false
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
        this.setState({loading:true})
        this.setState({output:false})
        setTimeout(()=>{
            this.setState({loading:false})
            this.setState({output:true})
            
        },3000)
        
       


    }



    componentDidMount(){
        this.setState({output:false})
        setTimeout(()=>{
            this.setState({loading:false})
            this.setState({inputform:true})

        },2000)
        

        

    }




    
    

   


    render(){
        
        return(
        <div>

            <Navbar/>

            <div className='formes'>
            {/* {this.state.inputform?setTimeout(()=>)} */}
            <Inputform setFname={this.setFname} setLname={this.setLname} setClass={this.setClass} setRollnumber={this.setRollnumber} clicked={this.clicked}
            firstname={this.state.firstname} lastname={this.state.lastname}
            class={this.state.class} rollnumber={this.state.rollnumber} inputform={this.state.inputform}
            />

            <Loader loading={this.state.loading}/>
           
           
           <OutputForm output={this.state.output} firstname={this.state.firstname} lastname={this.state.lastname}
           class={this.state.class} rollnumber={this.state.rollnumber}/>

           </div>
        <Footer />
        </div>);

    }
}

export default Forms;