import React,{useEffect, useState} from 'react';
import Card from './components/Card';


const App = () => {
    const [users, setUsers] = useState([])
  
    const fetchUserData = () => {
      fetch("https://www.reddit.com/r/reactjs.json").then((response) => {
        return response.json()
      }).then(response => {
        console.log(response);
        setUsers(response.data.children)
      })
    


  }

    useEffect(() => {
      fetchUserData()
    }, [])

    
  return (
    <div className='container'>
        {users.map((user)=>
        <Card user={user} />)}
      </div>
  )
  
}

export default App;

