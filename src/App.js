import React,{useEffect,useState} from 'react'

function App() {

  const [data, setData] = useState([])

useEffect(() => {

  fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
    result.json().then((response)=>{
      

      setData(response)
    })
  })
 
}, [])


  return (
    <div>
      
      <h1>Get Api Call</h1>
     
       <table border="1">

       {
         data.map((item)=>

         <tr >
           
         <td>{item.name} </td>
   
         <td>{item.username}</td>
   
         <td>{item.email}</td>
   
         <td>{item.website}</td> 

          <td>{ item.phone}</td>
         
         </tr>
        

         )
       }      

      </table>
      
    </div>
  )
}

export default App



