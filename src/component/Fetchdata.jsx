import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Showdata from './Showdata'

export default function Fetchdata() {
    const [empdata,setEmpdata]=useState(null)
    useEffect(()=>{
        const fetchdataapi= async ()=>{
            try{
            const response= await axios.get('http://localhost:3000/emp/')
            return setEmpdata(response.data)
            } catch{error=>console.error("Error",error)}
            
        }
         fetchdataapi();

    },[])
    
  return (
    <div>
       {
        empdata && empdata.length > 0 ? (<Showdata empdataprops={empdata}/>):(<p>data is loading</p>)
       }
    </div>
  )
}
 