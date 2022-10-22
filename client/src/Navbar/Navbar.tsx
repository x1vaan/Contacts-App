import React,{useState} from 'react';
import Navcss from './Navbar.module.css';
import logo from '../Images/ContactsApp4.svg';
import { useNavigate } from 'react-router-dom';
import {MdContactPage} from 'react-icons/md'

export default function Navbar (): JSX.Element {
    const navigate = useNavigate()
    const [buttonState, setButtonState] = useState<string>('desactive')
    const onclick = ()  => {
         buttonState === 'active' ? setButtonState('desactive') : setButtonState('active') 
    }

    const onimage = ():void => {
     navigate('/')
    }
    return(
        <nav className={Navcss.nav}>
      <MdContactPage className={Navcss.img} onClick={onimage}/> <span className={Navcss.span}>Contacts App</span>
      <a href="#" className={Navcss.button} onClick={onclick}>
     <span className={Navcss.bar}></span>
     <span className={Navcss.bar}></span>
     <span className={Navcss.bar}></span>
      </a>

      <div className={Navcss.navlist}>
      <ul className={Navcss.list}>
        <li>Add contact</li> 
        <li>My profile</li>
      </ul>
      </div>

    </nav>
    )
}