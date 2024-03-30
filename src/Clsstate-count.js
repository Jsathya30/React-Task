import React from "react";

class ClsstateCount extends React.Component{
      constructor(){
           super()
           this.state={
            count:0
           }
      }
      handlecount1=()=>{
         this.setState({count:this.state.count+1})
         
      }
      handlecount2=()=>{
        this.setState({count:this.state.count-1 < 0 ? 0 : this.state.count-1})
      }

      render(){

              return(
                <div>
                <p>Count value is : {this.state.count}</p>
                <button onClick={this.handlecount1} className="Btn">Increment</button>
                <button onClick={this.handlecount2} className="Btn">Decrement</button>
                
                </div>
                    

              )


      }



}

export default ClsstateCount;