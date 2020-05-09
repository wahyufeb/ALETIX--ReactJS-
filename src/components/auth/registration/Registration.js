import React,{useState} from "react";
import axios from "axios";
// package reactstrap
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert
} from "reactstrap";

import "./registration.css"
import loadingGif from "../../assets/loading.gif"
import Header from "../template/Header";
import usersAPI from "../../../services/users/users"
import {Redirect} from "react-router-dom"

const Registration =()=> {
  const [register, setRegister] = useState({})
  const [status, setStatus] = useState({
    status:null,
    message:""
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false);


// Functions
  const handleInput =(e)=>{
    setRegister({
      ...register,
      [e.target.name]:e.target.value
    })
  }

  const handleSignUp = async (e)=>{
    e.preventDefault()
    try {
      const reqRegistration = await axios.post(usersAPI.registration, register);
      const resRegistration = await reqRegistration.data;
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setStatus({
          status:resRegistration.success,
          message:resRegistration.message
        })
      }, 2000);
      setTimeout(() => {
        if(resRegistration.success){
          setSuccess(true)
        }
      }, 4000);
    } catch (err) {
      console.log(err)
    }
  }
    return (
        <div>
            <Header/>
            {success && (
              <Redirect to="/login"/>
            )}
            {loading ? (
              <div className="loading">
                <img src={loadingGif} alt="loader" width="80"/>
              </div>
            ) : ""}
              <Container>
                {status.status && (
                  <Alert color="success">
                    {status.message}
                  </Alert>
                )}
                {status.status === false && (
                  <Alert color="danger">
                      {status.message}
                  </Alert>
                )}
                <Form>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" onChange={handleInput} name="email" id="email" required autoComplete="off"/>
                  </FormGroup>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label for="first_name">Nama depan</Label>
                        <Input type="first_name" onChange={handleInput} name="first_name" id="first_name" required autoComplete="off"/>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label for="last_name">Nama belakang</Label>
                        <Input type="last_name" onChange={handleInput} name="last_name" id="last_name" required autoComplete="off"/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for="telephone">Telephone</Label>
                    <Input type="number" onChange={handleInput} name="telephone" id="telephone" required autoComplete="off"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" onChange={handleInput} name="password" id="password" required autoComplete="off"/>
                  </FormGroup>
                </Form>
                <Button id="signup" onClick={handleSignUp}>SIGN UP</Button>{' '}
              </Container>
        </div>
    )
}

export default Registration;