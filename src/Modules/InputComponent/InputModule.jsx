import './input.css'


const InputModule = ({width,labelText,inputType , placeholderText, dataFunction,name}) =>{


    const sendData = (data) =>{
        dataFunction(data)
    }



    return (

        <div style={{width:`${width}`, margin:'15px auto'}}>
            <label className="inputModule_label">{labelText}</label>
            <input name={name} onBlur={(e)=>{sendData(e)}} className="inputModule_input" type={inputType} placeholder={placeholderText} />
        </div>

    )



}

export default InputModule;