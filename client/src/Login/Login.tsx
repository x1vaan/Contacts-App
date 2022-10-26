import React,{useState, ChangeEvent, FormEvent, useEffect} from 'react';
import cssL from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login (): JSX.Element {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        email : '',
        password : ''
    })

 const onchange = (e: ChangeEvent<HTMLInputElement>):void => {
    setInput({
      ...input,
     [e.target.name] : e.target.value
    })
}

const onlogin = ():void => {
    navigate('/register')
}

const onsubmit = async (e: FormEvent) => {
    e.preventDefault()
   try {
       const {data,status} =  await axios.post('/login',{
           email : input.email,
           password : input.password
          })
         setInput({
          email : '',
          password : ''
         })
    if(status === 200) {
      let now = new Date().getTime()
      window.localStorage.setItem('loginTime', now.toString())
      window.localStorage.setItem('token', data)
        navigate('/home')
    }
    } catch (error: any) {
      alert(error.message)
      setInput({
        email : '',
        password : ''
      })
    }
}
const token = window.localStorage.getItem('token')

useEffect(()=> {
  if(token){
    navigate('/home')
  }
},[token])
    return (
        <div>
          <div className={cssL.container}>
         <form onSubmit={onsubmit} className={cssL.form}>
         <p className={cssL.title}>Log in</p>
              <input type="text" className={cssL.email} placeholder='Email' name='email' value={input.email} onChange={onchange}/>
              <input type="password" className={cssL.password} placeholder='Password' name='password' value={input.password} onChange={onchange}/>
              <input type="submit" className={cssL.signup} value='Log in'/>
         </form>
         <p className={cssL.p1}>You don't have an account?</p>
         <p className={cssL.p2} onClick={onlogin}>Register</p>
        </div>
        </div>
    )
}