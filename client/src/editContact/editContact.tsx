import axios from 'axios';
import React,{useState, ChangeEvent, FormEvent} from 'react';
import cssE from './editContact.module.css';
import { useNavigate,useParams } from 'react-router-dom';

export default function EditContact (): JSX.Element {
  const navigate = useNavigate()
  const id = useParams().id
  const[input,setInput] = useState({
    name: '',
    phone :''
  });

  const onchange = (e: ChangeEvent<HTMLInputElement>):void => {
    setInput({
      ...input,
     [e.target.name] : e.target.value
    })
}
const onsubmit = async(e: FormEvent) => {
    e.preventDefault();
    const token = window.localStorage.getItem('token');
    try {
        const {status} = await axios({
            method : 'put', 
            url:'/auth/editContact',
            headers: {
                Authorization : "Bearer " + token
            },
            data : {
            name: input.name,
            phone: input.phone,
            _id : id
            }
        })
        if(status === 200){
            setInput({
                name: '',
                phone: '',
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
        <p className={cssE.editContact}>Edit Contact</p>
        <div className={cssE.container}>
         <form onSubmit={onsubmit} className={cssE.form}>
            <input type="text" className={cssE.name} placeholder='Name' name='name' value={input.name} onChange={onchange}/>
            <input type="text" className={cssE.phone} placeholder='Phone' name='phone' value={input.phone} onChange={onchange}/>
            <input type="submit" className={cssE.add} value='Edit'/>
         </form>
        </div>
        </div>
    )
}