import axios from "axios";

export const GET_CONTACTS:string = 'GET_CONTACTS';
export const DELETE_CONTACTS:string = 'DELETE_CONTACTS'


export const getcontacts = (): any => {
    let token = window.localStorage.getItem('token')
   return function (dispatch: any): any{
    return axios.get('http://localhost:3001/auth/contacts', {
        headers : {
            Authorization: "Bearer " + token
        }
    })
    .then(contacts => {
        dispatch({type : GET_CONTACTS, payload : contacts.data})
    })
   }
}

export const deleteContacts = (id:string):any => {
    let token = window.localStorage.getItem('token')
    return function (dispatch: any): any{
     return axios.delete('http://localhost:3001/auth/deleteContact',{
         headers : {
             Authorization: "Bearer " + token
         },
         data : {
            _id : id
         }
     })
     .then(contacts => {
         dispatch({type : GET_CONTACTS, payload : contacts.data})
     })
    }
}