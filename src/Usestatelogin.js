import React, { useState } from "react";


function Usestatelogin(){
    const [sign,setsign]= useState("You have to enter your credentials to Log in")
     
    const handlesignin=()=>{
        setsign("You are signed in!")
    }

    const handlesignout=()=>{
        setsign("You are signed out!")
    }
    return(
        <div>
            <p>{sign}</p>
            <button onClick={handlesignin} className="Btn">Sign in</button>
            <button onClick={handlesignout} className="Btn">Sign out</button>
        </div>
    )
}

export default Usestatelogin;