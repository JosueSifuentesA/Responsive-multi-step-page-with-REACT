const ChargeModuleContainer = ({chargeModuleList}) =>{

    let list =chargeModuleList;

    const listModules = list.map((module,index)=>
    
        <li style={{listStyle:'none'}} key={index}>{module}</li>
    
    ); 
    
    return(listModules)

}


export default ChargeModuleContainer;