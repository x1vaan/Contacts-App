import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";

export const GET_CONTACTS:string = 'GET_CONTACTS';

export const getcontacts = () => {
   return function (dispatch: Dispatch<any>):any{
    return axios.get('http://localhost:3001/auth/contacts')
    .then(contacts => {
        dispatch({type : GET_CONTACTS, payload : contacts})
    })
   }
}