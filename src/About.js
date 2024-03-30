import React from "react";


class About extends React.Component{
     render(){

        const {userData}=this.props;
        const storeData= userData.map((e)=>{
              return(
                <tr>
                  <td>{e.name}</td>
                  <td>{e.age}</td>
                </tr>
              )
            
        })
        return(
            <div>
                <h1>Hi I am Class component</h1>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Age</th>
                    </thead>
                    <tbody>
                          {storeData}
                    </tbody>
                </table>
            </div>
        )
     }

}

export default About;