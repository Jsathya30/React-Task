import logo from './logo.svg';
import './App.css';
import Table from './Table';
import List from './List';
import About from './About';
import Effecthook from './Effecthook';
import Clsstate from './Class-state';
import ClsstateCount from './Clsstate-count';
import Changehook from './Changehook';
import Usestatelogin from './Usestatelogin';
import Nestobjdestruct from './Nestobjdestruct';


function App() {
  const userDetail=[
    {
      name:"Sathi",
      age:23
    },
    {
      name:"Sathana",
      age:23
    },
    {
      name:"Sakthi",
      age:23
    },
    {
      name:"Divi",
      age:23
    },
  ]
  return (
    <div className="Lists">
      <h2>Welcome to React!!!</h2>
      <Table user={userDetail}/>
      <List user={userDetail}/>
      <About userData={userDetail}/>
      <Clsstate/>
      <ClsstateCount/>
      <Changehook/>
      <Usestatelogin/>
      <Nestobjdestruct/>
      <Effecthook/>

    </div>
  );
}

export default App;
