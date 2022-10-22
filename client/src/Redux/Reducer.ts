import { GET_CONTACTS } from "./Actions";


const initialState = {

}

export default function Reducer (state= initialState, action:any): any {
   switch(action.type){
    case GET_CONTACTS: {
        return {
            ...state,
            contactos : action.payload
        }
    }
   }
}