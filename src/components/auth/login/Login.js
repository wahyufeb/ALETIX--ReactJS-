import React,{useState, useEffect} from "react";
import {Redirect} from "react-router-dom"
import axios from "axios";
// package reactstrap
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert
} from "reactstrap";

import "./login.css"
import loadingGif from "../../assets/loading.gif"

import Header from "../template/Header";
import usersAPI from "../../../services/users/users"
import {setUserSesion, getToken} from "../../../utils/Common";

const Login =()=> {
  const [loginUser, setLoginUser] = useState({})
  const [status, setStatus] = useState({
      status:null,
      message:""
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false);

  const [logged, setLogged] = useState();


  useEffect(()=>{
      async function coba (){
        const tokenExists = await getToken();
        setLogged(tokenExists)
      }
      coba();
  },[])
  
//   Functions
  const handleInput =(e)=>{
    setLoginUser({
      ...loginUser,
      [e.target.name]:e.target.value
    })
  }

  const handleSignIn = async ()=>{
    try {
        const reqLogin = await axios.post(usersAPI.login, loginUser);
        const resLogin = await reqLogin.data;
        console.log(resLogin)
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          setStatus({
            status:resLogin.success,
            message:resLogin.message
          })
        }, 2000);
        setTimeout(() => {
          if(resLogin.success){
            setSuccess(true)
          }
          setUserSesion(resLogin.token, resLogin.user)
        }, 4000);
    } catch (err) {
      alert(err)
        console.log(err)
    }
  }
    return (
        <div>
            <Header/>
            {logged ? (<Redirect to="/" />) : (<Redirect to="/login"/>) }
            {success && (
              <Redirect to="/"/>
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
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" onChange={handleInput} name="password" id="password" required autoComplete="off"/>
                  </FormGroup>
                </Form>
                <Button id="signin" onClick={handleSignIn}>SIGN IN</Button>{' '}
              </Container>
        </div>
    )
}

export default Login;