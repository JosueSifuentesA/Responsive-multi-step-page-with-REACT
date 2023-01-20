import { useEffect, useState } from 'react';
import InputModule from '../InputComponent/InputModule';

const FirstStepModule = ({width,height,dataFunction}) =>{

    const [dataModule1,setDataModule1] = useState({
        nombre: '',
        email:'',
        numero:''
    })


    useEffect(()=>{
        if(dataModule1.nombre != "" && dataModule1.email != "" && dataModule1.numero != ""){
            sendDataInfo();
        }
    },[dataModule1])


    const sendDataInfo=()=>{

        dataFunction(dataModule1)

    }




    const recieveDataModule = (event) =>{

        const {name,value} = event.target;
        setDataModule1({...dataModule1, [name] : value})
        console.log(dataModule1);

    }

    return(

        <div style={{width:`${width}` , height:`${height}`, margin:'0px auto'}}>
        
            <InputModule name={'nombre'} dataFunction={recieveDataModule} width={'90%'} type = 'text' labelText={'Name'} placeholderText='e.g. Stephen King'></InputModule>
            <InputModule name={'email'}  dataFunction={recieveDataModule} width={'90%'} type='email' labelText={'Email Address'} placeholderText='e.g. stephenKing@lorem.com'></InputModule>
            <InputModule name={'numero'} dataFunction={recieveDataModule} width={'90%'} type='number' labelText={'Phone Number'} placeholderText='e.g. +1 234 567 890'></InputModule>

        </div>
    )

}

export default FirstStepModule;