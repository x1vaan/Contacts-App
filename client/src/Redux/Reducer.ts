import { GET_CONTACTS } from "./Actions";

interface Icontact {
    name: string;
    phone: string;
}

let initialState : {
    contacts : Icontact[]
}

export default function Reducer (state= initialState, action:any): any {
   switch(action.type){
    case GET_CONTACTS: {
        return {
            contacts : action.payload
        }
    }
   }
}