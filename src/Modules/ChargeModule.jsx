const ChargeModule = ({textLabel, textLabelPrice}) =>{
    
    return(
        <div style={{display:'flex',margin:'15px 15px', justifyContent:'space-between'}}>
            <label style={{color:'var(--coolGray)'}}>{textLabel}</label>
            <label style={{color:'var(--marineblue)'}}>{textLabelPrice}</label>
        </div>
    )
    
}

export default ChargeModule ;