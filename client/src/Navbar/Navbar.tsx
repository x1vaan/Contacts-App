import React,{useState} from 'react';
import Navcss from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';
import {MdContactPage} from 'react-icons/md'

export default function Navbar (): JSX.Element {
    const navigate = useNavigate()
    const [buttonState, setButtonState] = useState<string>('desactive');
    
    const onclick = ()  => {
         buttonState === 'active' ? setButtonState('desactive') : setButtonState('active') 
    }

    const onimage = ():void => {
     navigate('/')
    }
    const onclickProfile = () => {
       window.localStorage.removeItem('token')
       window.localStorage.removeItem('loginTime')
    }
    const onAdd = ():void => {
      navigate('/addContact')
    }
    return(
        <nav className={Navcss.nav}>
      <MdContactPage className={Navcss.img} onClick={onimage}/> <span className={Navcss.span} onClick={onimage}>Contacts App</span>
      <a href="#" className={Navcss.button} onClick={onclick}>
     <span className={Navcss.bar}></span>
     <span className={Navcss.bar}></span>
     <span className={Navcss.bar}></span>
      </a>

      <div className={ buttonState === 'active' ? Navcss.navlistactive : Navcss.navlist}>
      <ul className={Navcss.list}>
        <li onClick={onAdd}>Add contact</li> 
        <li onClick={onclickProfile}>Log out</li>
      </ul>
      </div>

    </nav>
    )
}