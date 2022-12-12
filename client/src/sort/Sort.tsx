import React, {SyntheticEvent} from "react";
import css from './Sort.module.css'
import {AiOutlineSortAscending, AiOutlineSortDescending} from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { sortAscending, sortDescending } from "../Redux/Actions";

export default function Sort (): JSX.Element {
interface Icontact {
    name: string;
    phone: string;
    _id: string;
 }
interface state {
 contacts : Icontact[]
}

const dispatch = useDispatch();
const sort = (e: SyntheticEvent):void =>{
    if((e.currentTarget as HTMLSpanElement).id === 'ascending'){
        dispatch(sortAscending())
    }
    if((e.currentTarget as HTMLSpanElement).id === 'descending'){
        dispatch(sortDescending())
    }
}
  return(
    <div className={css.containerSort}>
    <span className={css.ascending} id='ascending' onClick={sort}>{<AiOutlineSortAscending/>}</span>
    <span className={css.descending} id='descending' onClick={sort}>{<AiOutlineSortDescending/>}</span>
    </div>
  )
}