import React, { useEffect, useState } from 'react'

const Home = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setData(users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  };
  useEffect( () => {
      fetchData();
  },[]);

  return (
    <div>
      {data.map((user)=>(
         <div>
          <p key={user.id}>{user.email}</p>
          <p>{user.name}</p>
         </div>
      ))}
    </div> 
  )
}

export default Home ;


