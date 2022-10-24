import React from "react";
import css from './landing.module.css'
import { useNavigate } from "react-router-dom";

export default function Landing (): JSX.Element {
  const navigate = useNavigate()

  const onclick = ():void => {
    const token = window.localStorage.getItem('token')
    if(token){
        navigate('home')
    }else{
      navigate('/register')
    }
  }
    return (
        <div className={css.container}>
             <p className={css.p1}>Contacts App</p>
            <p className={css.p2}>Now you can store your contacts</p>
            <button className={css.button} onClick={onclick}>Get started</button>
        </div>
    )
}