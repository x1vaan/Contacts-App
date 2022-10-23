import React, { SyntheticEvent } from "react";
import css from './ContactCard.module.css'
import {useDispatch} from 'react-redux';
import { deleteContacts } from "../Redux/Actions";

interface Props {
    name:string;
    phone: string;
    id: string;
}

export default function ContactCard ({name,phone, id}:Props): JSX.Element {
    const dispatch = useDispatch()
    const onclickDelete = (e: SyntheticEvent):void => {
      dispatch(deleteContacts((e.target as HTMLInputElement).id))
      console.log((e.target as HTMLInputElement).id)
    }
    return (
        <div className={css.container}>
                <p className={css.p1}>{name}</p>
                <p className={css.p2}>{phone}</p>
                <button className={css.edit}>Edit Contact</button>
                <button className={css.delete} onClick={onclickDelete} id={id}>Delete Contact</button>
        </div>
    )
}