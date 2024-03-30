import React from "react";

class Nestobjdestruct extends React.Component{
    constructor(){
        super()
        this.state={
            employee:[
                {
                    name:"Alex",
                    skills:[
                        {name:"ReactJs", type:"Frontend"},
                        {name:"nodeJS",type:"Backend"}
                    ]
                },
                {
                    name:"Anna",
                    skills:[
                        {name:"Angular", type:"Frontend"},
                        {name:"Pyhton", type:"Backend"}
                    ]
                }
            ]   
            
        }
    }



    render(){
        const store=this.state.employee.map((e)=>{
            return(
                   <tr>
                      <td>{e.name}</td>
                      <td>
                        {e.skills.map((s)=>{
                            
                            return(
                                <ul>
                                    <li>{s.name} - {s.type}</li>
                                </ul>
                            )
                        })}
                      </td>
                   </tr>

                )
        })

        return(
            <table>
                <thead>
                    <th>Employee Name</th>
                    <th>Skills</th>
                </thead>
                <tbody>
                    {store}
                </tbody>
            </table>
        )
       
    }




}

export default Nestobjdestruct;