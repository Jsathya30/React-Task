import React from 'react';
const List=(props)=>{

    const {user}=props

    const store =user.map((e,index)=>{
        return(
            <div key={index}>
                
                <li><strong>Id:</strong>{index+1}<br/> <strong>Name:</strong>{e.name}<br/> <strong>Age:</strong>{e.age}</li>
            </div>
        )
    })

    return(
        <ul className="Lists">
            {store}
        </ul>
    )

}

export default List; 