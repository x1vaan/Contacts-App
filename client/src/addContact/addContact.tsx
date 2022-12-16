import React,{useState, ChangeEvent, FormEvent} from "react";
import { useNavigate } from "react-router-dom";
import cssA from './addContact.module.css'
import axios from "axios";

export default function Addcontact (): JSX.Element {
    const navigate = useNavigate()
    const[input,setInput] = useState({
        name: '',
        phone: ''
    });

    const onchange = (e: ChangeEvent<HTMLInputElement>):void => {
        setInput({
          ...input,
         [e.target.name] : e.target.value
        })
    }
    const onsubmit = async(e: FormEvent) => {
       e.preventDefault();
       const token = window.localStorage.getItem('token')
       try {
         const {status} = await axios({
            method : 'put', 
            url:'/auth/addcontact',
            headers: {
                Authorization : "Bearer " + token
            },
            data: {
            name: input.name,
            phone: input.phone
            }
        })
       if(status === 201) {
        setInput({
            name: '',
            phone: ''
        })
        navigate('/home')
       }
       } catch (error: any) {
         alert(error.message)
         setInput({
            name: '',
            phone: ''
        })
       }
    }

    return (
        <div>
            <p className={cssA.addContact}>Add a new Contact!</p>
         <div className={cssA.container}>
         <form onSubmit={onsubmit} className={cssA.form}>
            <input type="text" className={cssA.name} placeholder='Name' name='name' value={input.name} onChange={onchange}/>
            <input type="number" className={cssA.phone} placeholder='Phone' name='phone' value={input.phone} onChange={onchange}/>
            <input type="submit" className={cssA.add} value='Add'/>
         </form>
        </div>
        </div>
    )
}