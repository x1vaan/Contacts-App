import React, {useEffect} from 'react';
import ContactCard from '../ContactCard/ContactCard';
import cssH from './Home.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getcontacts } from '../Redux/Actions';
import { useNavigate } from 'react-router-dom';

export default function Home (): JSX.Element {
interface Icontact {
 name: string;
 phone: string;
 _id: string;
}

interface state {
contacts : Icontact[]
}
 const navigate = useNavigate()
 const dispatch = useDispatch()
 const contacts = useSelector((state: state) => state?.contacts)

useEffect(()=>{
    const token = window.localStorage.getItem('token');
    if(!token){
      navigate('/register')
    }
    else{
      dispatch(getcontacts())
    }
},[contacts])
    return (
        <div className={cssH.containerHome}>
            {
               contacts ? 
                contacts.map(contact => {
                 return <ContactCard name={contact.name} phone={contact.phone} key={contact._id} id={contact._id}/>
                })
                : ''
            }
        </div>
    )
}