import { useEffect, useState } from "react"
import SelectionModule from "../SelectionModule/SelectionModule"

const ThirdStepModule = ({dataRecieved,dataFunction}) =>{
    
    const [dataArray2,setDataArray2] = useState([])

    useEffect(()=>{

        dataFunction(dataArray2);

    },[dataArray2])

    let planTime = '';
    let plusPrice;
    if(dataRecieved.switchData){
        planTime = '/yr'
        plusPrice = 10
    }else{
        planTime = '/mo'
        plusPrice = 1
    }

    //esta funcion sera ejecutada cada vez que el usuario haga click en un selection module
    const handleData = (data) =>{
     
        if(data != null || data != undefined){

            if(data?.checked === true){
                setDataArray2([...dataArray2,data])
            }else{


                const index = dataArray2.findIndex(item => item.id === data.id);
                dataArray2.splice(index,1)
                setDataArray2([...dataArray2])
                
            }
        }else{
            console.error('undefined')
        }



    }
    

    const selectionModuleList =
        [
            <SelectionModule key={0}
                            textH1={'Online service'} 
                            textSpan={'Access to multiplayer games'} 
                            textLabel={`${1*plusPrice}${planTime}`}
                            dataFunction= {handleData}
                            number={0}
                            />,
            <SelectionModule key={1}
                            textH1={'Larger storage'} 
                            textSpan={'Extra 1TB of cloud save'} 
                            textLabel={`${2*plusPrice}${planTime}`}
                            dataFunction= {handleData}
                            number={1}
                            />,
            <SelectionModule key={2}
                            textH1={'Customizable  profile '} 
                            textSpan={'Custom theme on your profile'} 
                            textLabel={`${2*plusPrice}${planTime}`}
                            dataFunction= {handleData}
                            number={2}
                            />

        ]







    return(

        <>
            {selectionModuleList}
        </>
    )

}

export default ThirdStepModule