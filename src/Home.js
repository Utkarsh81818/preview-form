import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './App.css'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='btn'>
    <Button onClick={()=>navigate("/form")} variant="primary" size="lg">
    Preview
  </Button>
    </div>
  )
}

export default Home