import React,{useState} from "react";



function Changehook(){
      const [count,setcount]=useState(0)

      const handlehook1=()=>{
         setcount(count+1)
      }

      const handlehook2=()=>{
         setcount(count-1)
      }
      return(
          <div>
              <p>Count value is: {count}</p>
              <button onClick={handlehook1}>Increment</button>
              <button onClick={handlehook2}>Decrement</button>
              
          </div>

      )


}

export default Changehook;