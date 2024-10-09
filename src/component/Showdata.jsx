import React from 'react'
import { Link } from 'react-router-dom'


export default function Showdata({empdataprops}) {
  return (
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td colSpan={5}>
                        <Link to={`/newdata`}>Add new item</Link>
                    </td>
                </tr>
                {empdataprops.map(emp => (
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.designation}</td>
                        <td>{emp.salary}</td>
                        <td><Link to={`/edit/${emp.id}`}>Edit</Link> |   
                        <Link to={`/delete/${emp.id}`}>Delete</Link>    </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    </div>
  )
}
