import axios from 'axios'
import React,{ useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'

export default function Delete() {
  const {id}=useParams()
  console.log(id)
  const navigate=useNavigate();
  useEffect(()=>{
    const deletedata=()=>{
      try{
        axios.delete(`http://localhost:3000/emp/${id}`)
        .then(()=>navigate('/'))
      } catch(error){
        console.error('Error',error)
      }
      
    }
    deletedata();
  },[])
  return (
    <div>Delete</div>
  )
}
