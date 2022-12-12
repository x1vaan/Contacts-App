import { DELETE_CONTACTS, GET_CONTACTS, SORT_ASCENDING, SORT_DESCENDING } from "./Actions";

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
    case DELETE_CONTACTS: {
        return {
            contacts : action.payload
        }
    }
    case SORT_ASCENDING: {
       var sortAscending = state.contacts.sort((a:Icontact,b:Icontact):any => {
            if(a.name < b.name) {
               return -1;
            }
            if(a.name > b.name) {
               return 1
            }
            return 0
         })
         return {
           contacts : [...sortAscending]
     }
       }
    case SORT_DESCENDING: {
       var sortDescending = state.contacts.sort((a:Icontact,b:Icontact):any => {
            if(a.name < b.name) {
               return 1;
            }
            if(a.name > b.name) {
               return -1
            }
            return 0
        })
        return {
            contacts : [...sortDescending]
    }
       }
   }
}