import React from 'react';
class Clsstate extends React.Component{
  
    constructor(){
        super()
        this.state={
            
            type:"bike",
            color:"black",
            brand:"szu"
        }
        
        
    }
    handleChange=()=>{
      this.setState({color:"blue"});
      this.setState({type:"car"});
    }
    render(){
        return(
        
            <div>
                <p>It is a {this.state.color}</p>
                <p>It is a {this.state.type}</p>
                <button onClick={this.handleChange}>Click</button>
            </div>
            
        )
    }
}


export default Clsstate;