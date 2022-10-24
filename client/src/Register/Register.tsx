import React,{useState, ChangeEvent, FormEvent, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import cssR from './Register.module.css'
import axios from 'axios';

export default function Register (): JSX.Element {
const navigate = useNavigate()
    const [input, setInput] = useState({
        name : '',
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
    navigate('/login')
}

const onsubmit = async (e: FormEvent) => {
    e.preventDefault()
   try {
       const user =  await axios.post('http://localhost:3001/register',{
           name : input.name,
           email : input.email,
           password : input.password
          })
         setInput({
          name : '',
          email : '',
          password : ''
         })
         if(user.status === 201){
            navigate('/login')
         }
    } catch (error: any) {
      alert(error.message)
      setInput({
        name : '',
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
        <div className={cssR.container}>
         <form onSubmit={onsubmit} className={cssR.form}>
         <p className={cssR.title}>Register</p>
              <input type="text" className={cssR.name} placeholder='Name and Lastname' name='name' value={input.name} onChange={onchange}/>
              <input type="text" className={cssR.email} placeholder='Email' name='email' value={input.email} onChange={onchange}/>
              <input type="password" className={cssR.password} placeholder='Password' name='password' value={input.password} onChange={onchange}/>
              <input type="submit" className={cssR.signup} value='Sign up'/>
         </form>
         <p className={cssR.p1}>Already have an account?</p>
         <p className={cssR.p2} onClick={onlogin}>Log in</p>
        </div>
    )
}