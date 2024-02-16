import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import { addContact } from '../Redux/Actions';
import {useNavigate} from 'react-router-dom'
const AddContact=()=>{

    const [name,setName] = useState('')
    const [age,setAge] = useState(0)
    const [email,setEmail] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleadd=(e)=>{
        e.preventDefault()
        dispatch(addContact({name,age,email},navigate))
    }
    return(
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>age</Form.Label>
          <Form.Control onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter age" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>
  
        
        <Button onClick={(e)=> handleadd(e)} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default AddContact