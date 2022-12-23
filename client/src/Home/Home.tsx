import React, {useEffect, useState} from 'react';
import ContactCard from '../ContactCard/ContactCard';
import cssH from './Home.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getcontacts } from '../Redux/Actions';
import { useNavigate } from 'react-router-dom';
import Sort from '../sort/Sort';
import Loading from '../Loading/Loading';

export default function Home (): JSX.Element {
interface Icontact {
 name: string;
 phone: string;
 _id: string;
}

interface state {
contacts : Icontact[],
}
 const navigate = useNavigate()
 const dispatch = useDispatch()
 const contacts = useSelector((state: state) => state?.contacts)
 const token = window.localStorage.getItem('token')
 const [status, setStatus] = useState('not done')

useEffect(() => {
    if(!token){
        navigate('/')
      }
},[token])

useEffect(()=>{
    if(status === 'not done') {
        dispatch(getcontacts())
        setStatus('done')
    }
},[contacts])

    return (
        <div className={cssH.containerHome}>
            {
                contacts ? contacts.length === 0 ? '' : <Sort/> : ''
            }
            
            {   
               contacts ? contacts.length === 0 ? <p className={cssH.noContacts}>You do not have any contacts yet</p> : 
                contacts.map(contact => {
                 return <ContactCard name={contact.name} phone={contact.phone} key={contact._id} id={contact._id}/>
                })
                : <Loading/>
            }
        </div>
    )
}