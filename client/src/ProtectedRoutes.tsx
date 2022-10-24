import React from 'react';
import { Outlet , Navigate} from 'react-router-dom';

export default function ProtectedRoutes (): any {
const token = window.localStorage.getItem('token')
   return (
         token ? <Outlet/> : <Navigate to='/register'/>
   )
}