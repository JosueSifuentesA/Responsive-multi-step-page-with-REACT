import ChargeModuleContainer from '../ChargeModuleContainer'
import ChargeModule from '../ChargeModule'


const FourthStepModule = ({information}) =>{

    //let price = information[0].planSelected.price.split('/')[0]

    let data = [];
    let counter = 0;
    let finalPrice = 0;


    for(let i = 0 ; i < information[1].length;i++){


        data[i] = <ChargeModule textLabel={information[1][i].textH1} textLabelPrice={`+$${information[1][i].textLabel}`} />

        counter = counter + parseInt(information[1][i].textLabel.split('/')[0])
    }

    
    finalPrice = parseInt(information[0].planSelected.price) + counter;

    const list = data;


    return(
        <>
        <div style={{backgroundColor:'var(--alabaster)',padding:'10px',borderRadius:'10px'}}>
            
            <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>

                <div>
                    <label><strong style={{display:'block', color:'var(--marineblue)'}}>
                        {information[0].planSelected.name} (Monthly)</strong></label>
                    <a style={{display:'block',color:'var(--coolGray)',textDecoration:'underline'}}>Change</a>
                </div>
                
                <div>
                    <label><strong>${information[0].planSelected.price}</strong></label>
                </div>
            </div>
            <hr></hr>
            
            
            <ChargeModuleContainer chargeModuleList={list}/>
        </div>

        <div>
            <div style={{display:'flex' , justifyContent:'space-between',padding:'20px'}}>
                <label style={{color:'var(--coolGray)'}}>Total (per year)</label>
                <label><strong style={{color:'var(--purplishBlue)'}}>{`$${finalPrice}/mo`}</strong></label>
            </div>
        </div>
        </>
    )    


        
    
}

export default FourthStepModule