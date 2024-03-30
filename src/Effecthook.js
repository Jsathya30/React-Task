import React, { useState } from 'react';


function Effecthook(){
    const [count,setCount]=useState(0);
    const[msg,setMsg]=useState("Welcome to React!")

    const handleUpdate=()=>{
        setCount(count+1);
    }
    const updateMsg=()=>{
        setMsg(msg);
    }
    return(
        <div>
            <button onClick={handleUpdate}>Update count</button>
            <p>The count value is: {count}</p>
            <p>Updated Message is: {msg}</p> 
            <button onClick={updateMsg}>UpdateMessage</button>
        </div>
    );
}
export default Effecthook;