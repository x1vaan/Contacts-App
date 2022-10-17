import React from "react";
import css from './landing.module.css'
import { useNavigate } from "react-router-dom";

export default function Landing (): JSX.Element {
  const navigate = useNavigate()

  const onclick = ():void => {
      navigate('/register')
  }
    return (
        <div className={css.container}>
             <p className={css.p1}>Contacts App</p>
            <p className={css.p2}>Now you can store your contacts</p>
            <button className={css.button} onClick={onclick}>Get started</button>
        </div>
    )
}