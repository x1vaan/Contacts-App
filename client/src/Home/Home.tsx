import React, {useEffect} from 'react';
import ContactCard from '../ContactCard/ContactCard';
import cssH from './Home.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getcontacts } from '../Redux/Actions';

export default function Home (): JSX.Element {
interface Icontact {
 name: string;
 phone: string;
 _id: string;
}

interface state {
contacts : Icontact[]
}
 const dispatch = useDispatch()
 const contacts = useSelector((state: state) => state?.contacts)

useEffect(()=>{
    dispatch(getcontacts())
},[contacts])
    return (
        <div className={cssH.containerHome}>
            {
               contacts ? 
                contacts.map(contact => {
                 return <ContactCard name={contact.name} phone={contact.phone} key={contact._id}/>
                })
                : ''
            }
        </div>
    )
}