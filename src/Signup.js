import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../src/App.css'

const Signup = () => {

  const [data, setData] = useState({
    username: '',
    mobileNo: '',
    email: '',
    address: '',
    password: ''
  })

  const [records, setRecords] = useState([])

  const handleInput = (e) => {
   const name =  e.target.name;
   const value = e.target.value;

   setData({...data, [name]:value})
   console.log(data);
  }

  const handleClick = (e) => {
    const newRecord = {...data, id: new Date().getTime().toString() }
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);
    setData({username:'', mobileNo:'', email:'', password:'', address:''})
  }
  return (
    <div className='container'>
    <h1 className='heading'>Registration Form</h1>
    <div className='signup'>

    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail" >
      <Form.Control type="text" placeholder="Your Full Name" className='child' value={data.username} name="username" onChange={handleInput} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="number" placeholder="Phone Number" className='child' value={data.mobileNo} name="mobileNo" onChange={handleInput} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="text" placeholder="Email" className='child' value={data.email} name="email" onChange={handleInput}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="text" placeholder="Enter Address" value={data.address} name="address" className='child' onChange={handleInput}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control type="password" placeholder="Password" value={data.password} name="password" className='child' onChange={handleInput}/>
    </Form.Group>
    
    <div className="d-grid gap-2 ">
      <Button  onClick={handleClick} variant="primary" size="lg">
        SIGN UP
      </Button>
      </div>
  </Form>
  <div>
  {
    records.map((curElem) => {
      return (
        <div className='showData'>
        <h1>Form Data</h1>
          <p>{curElem.username}</p>
          <p>{curElem.mobileNo}</p>
          <p>{curElem.email}</p>
          <p>{curElem.address}</p>
          <p>{curElem.password}</p>
        </div>
      )
    })
  }
  </div>
    </div>
    </div>
  )
}

export default Signup