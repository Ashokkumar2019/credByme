import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'
export default function Edit() {
  const [errorshow,setErrorshow]=useState({})
  const {eid}=useParams();
  const navigate=useNavigate()
  const editdataget=()=>{
    try{
      axios.get(`http://localhost:3000/emp/${eid}`)
      .then(response=>setEditdata(response.data))
      // setEditdata(data)
    } catch(error){console.error('error',error)}
  }
  useEffect(()=>{
    editdataget();
  },[])
  const inputdata={
    id:"",
    name:"",
    designation:"",
    salary:""
  }
  const[editdata,setEditdata]=useState(inputdata)
  const {id,name,designation,salary}=editdata
  const valueupdate=(e)=>{
    const {name,value}=e.target;
    setEditdata({...editdata,[name]:value})

  }
 
  const validdata=()=>{
    const err={};
    if(name===''){
      err.errname='Please enter name'
    } else if(designation===''){
      err.errdes='Please enter the Designation'
    } else if(salary===''){
      err.errsal='Please enter the Salary'
    }
    setErrorshow(err)
  }
  const updatenewvalue=async(e)=>{
    e.preventDefault();
    validdata();
    try{
      await axios.put(`http://localhost:3000/emp/${eid}`,{name,designation,salary});
      navigate('/')
    } catch(error){
      console.error('Error',error)
    }


  }
  // console.log(editdata)
  return (
    <div>
      <form action="" onSubmit={updatenewvalue}>
        <label className='flexitem' htmlFor="id">Id:</label>
        <input className='flexitem'  type="text" name="id" value={id} readOnly />        
        <label className='flexitem' htmlFor="name">Name:</label>
        <div className='flexitem'>
        <input   type="text" name="name" value={name} onChange={valueupdate}/>
       <br /> <span style={{ color: "red" }}>{errorshow.errname}</span>
        </div>
        
        <label className='flexitem' htmlFor="designation">Designation:</label>
        <div className='flexitem'>
        <input   type="text" name="designation" value={designation} onChange={valueupdate}/>
       <br /> <span style={{ color: "red" }}>{errorshow.errdes}</span>
        </div>
        
        <label className='flexitem' htmlFor="salary">Salary:</label>
        <div className='flexitem'>
        <input   type="text" name="salary" value={salary} onChange={valueupdate}/>
       <br /> <span style={{ color: "red" }}>{errorshow.errsal}</span>
        </div>
        <input className='flexitem'  type="submit" value="Update Data" />
      </form>
    </div>
  )
}
