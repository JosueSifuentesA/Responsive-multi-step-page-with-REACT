import { useEffect, useState } from 'react';
import './slider.css'
const SliderModule = ({dataFunction}) =>{

    const [checked,setChecked] = useState(false);



    const dataSender=(e)=>{
        setChecked(e.target.checked)
    }

    useEffect(()=>{
        dataFunction(checked)
    },[checked])


    const primitiveStyles = <label className="switch">
                                <input checked={checked} onChange={dataSender} type="checkbox"/>
                                <span className="slider round"></span>
                            </label>;
    return(primitiveStyles);
}

export default SliderModule;