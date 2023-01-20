import { useEffect, useState } from 'react'
import { useDebugValue } from 'react';
import './selectionModule.css'

const SelectionModule=({textH1,textSpan,textLabel,dataFunction,number})=>{
    
    const[checked,setChecked] = useState(false);

    const handleChange = (e) =>{
        
        setChecked(e.target.checked)   
        dataFunction({id:number,textH1 : textH1,textSpan: textSpan,textLabel : textLabel,checked:e.target.checked})
        //dataFunction(data)
    }
    
    let component = <div className={checked ? 'selectionModule__selected' : 'selectionModule__noSelected'}>
            <input checked={checked} className='selectionModule_checkbox' onChange={handleChange} type='checkbox'></input>
            <div className='selectionModule_stats'>
                <h1 className='stats_h1'>{textH1}</h1>
                <span className='stats_span'>{textSpan}</span>
            </div>
            <label className='selectionModule_label'>+${textLabel}</label>
        </div>;
        
    
        

    return(component)



}

export default SelectionModule;