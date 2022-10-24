import React from 'react';
import cssO from './otherRoutes.module.css'
import {TbError404, TbAlertTriangle} from 'react-icons/tb'

export default function OtherRoutes ():JSX.Element {
    return (
        <div className={cssO.container}>
          <TbError404 className={cssO.p2}/>
          <p className={cssO.p1}>Page not found</p>
          <TbAlertTriangle className={cssO.alert}/>
        </div>
    )
}