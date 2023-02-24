import React,{useState,useEffect} from 'react';
import Cards from './Component/Card';
import Searchbox from './Component/Searchbox';
import axios from 'axios';
import './App.css';
function App() {
  const [monster,setMonster]=useState([]);
  const [search,setSearch]=useState('');
  
  const getUsers=()=>{
    
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      setMonster(response.data);
    })
    .catch((error)=>{
      console.log("Error coming.......!!!!!!!");
    });
    
  };
  const handleSearch=(event)=>{
    setSearch(event.target.value.toLowerCase());
    
  }
  const filteredMonsters=monster.filter(monster=>
    monster.name.toLowerCase().includes(search.toLocaleLowerCase())
  )
  useEffect(()=>{
  getUsers();
  },[])
  
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <p className='logo'>Zombo's Shop</p>
          </div>
        </div>
      </div>
      <div className='container'>
          <div className='row'>
              <div className='col-12'>
                <Searchbox placeHolder="Search" handleChange={handleSearch} />
              </div>
              {
                  filteredMonsters.map((monster)=>{
                    return(
                        
                          <Cards key={monster.id} id={monster.id} name={monster.name} username={monster.username} mail={monster.email} />
                         
                  )})
              }  
          </div>
      </div>
    </div>
  );
}

export default App;
