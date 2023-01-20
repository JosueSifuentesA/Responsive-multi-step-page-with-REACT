import { useEffect, useState } from 'react';
import './planModule.css'

const PlanModule = ({imgIcon,h3Text,spanText,saleText = undefined ,planDuration,dataFunction,nameClass}) => {

    const setClick=()=>{
        dataHandler({saleText:saleText,
            name:h3Text,
            promotion: planDuration,
            price:spanText})

    }

    const dataHandler=(data)=>{

        dataFunction(data);

    }

    const saleLabel = (<label style={{fontSize:'14px'}}>{saleText}</label>)

    return(

        <div className={nameClass} onClick={setClick} >
            <img className='planModule_img' src = {imgIcon}></img>
            
            <div className='planModule_stats'>
                <h3 className='stats_h3'>{h3Text}</h3>
                <span className='stats_span'>${spanText}</span>
                {planDuration ? saleLabel : null }
            </div>

        </div>

    )

}

export default PlanModule;