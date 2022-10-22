import React from 'react';
import ContactCard from '../ContactCard/ContactCard';
import Navbar from '../Navbar/Navbar';
import cssH from './Home.module.css'

export default function Home (): JSX.Element {
    return (
        <div className={cssH.containerHome}>
            <ContactCard name='ivan' phone='123'/>
        </div>
    )
}