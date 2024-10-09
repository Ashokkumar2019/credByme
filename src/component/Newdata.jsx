import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Newdata() {
  const navigate=useNavigate()
  const[errordata,setErrordata]=useState({})
  const inputdata={
    id:'',
    name:'',
    designation:'',
    salary:''
  }
  const [newdata,setNewdata]=useState(inputdata)
  const {id,name,designation,salary}=newdata
  const newvalueget=(e)=>{
    const{name,value}=e.target;
    setNewdata({...newdata,[name]:value})
  }

  const validdata=()=>{
    const err={};
    if(id===''){
      err.errid='Please enter the ID'
    }
    if(name===''){
      err.errname='Please enter the name'
    }
    if(designation===''){
      err.errdesignation='Please enter the designation'
    }
    if(salary===''){
      err.errsalary='Please enter the salary'
    }
    setErrordata(err)
  }
  const submitdata=async (e)=>{
    e.preventDefault();
    validdata();
    try{
      await axios.post(`http://localhost:3000/emp/`,{id,name,designation,salary})
      navigate('/')
    } catch(error){
      console.error('err',error)
    }
  }


  return (
    <div>
      <form action="" onSubmit={submitdata}>
        <label htmlFor="id">Id :</label>
        <div className='itemflex'>
          <input type="text" name="id" value={id} onChange={newvalueget}/>
          <span style={{color:"red"}}>{errordata.errid}</span>
        </div>
        <label htmlFor="name">name :</label>
        <div className='itemflex'>
          <input type="text" name="name" value={name} onChange={newvalueget}/>
          <span style={{color:"red"}}>{errordata.errname}</span>
        </div>
        <label htmlFor="designation">designation :</label>
        <div className='itemflex'>
          <input type="text" name="designation" value={designation} onChange={newvalueget}/>
          <span style={{color:"red"}}>{errordata.errid}</span>
        </div>
        <label htmlFor="salary">salary :</label>
        <div className='itemflex'>
          <input type="text" name="salary" value={salary} onChange={newvalueget}/>
          <span style={{color:"red"}}>{errordata.errsalary}</span>
        </div>
        <input type="submit" value="Add new Item" />
      </form>
    </div>
  )
}
