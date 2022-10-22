import React from "react";
import css from './ContactCard.module.css'

interface Props {
    name:string;
    phone: string;
}

export default function ContactCard ({name,phone}:Props): JSX.Element {
    return (
        <div className={css.container}>
                <p className={css.p1}>{name}</p>
                <p className={css.p2}>{phone}</p>
                <button className={css.edit}>Edit Contact</button>
                <button className={css.delete}>Delete Contact</button>
        </div>
    )
}