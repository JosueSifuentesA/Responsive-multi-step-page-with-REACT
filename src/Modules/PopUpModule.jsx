import iconThankYou from '../assets/icon-thank-you.svg'
const PopUpModule = () =>{

    return(
        <div style={{display:'flex',flexFlow:'column',gap:'20px',margin:'50px 0px'}}>
            <img src={iconThankYou} style={{margin:'0px auto'}}/>
            <h1 style={{textAlign:'center',fontSize:'24px'}}>Thank you!</h1>
            <span style={{color:'var(--coolGray)',lineHeight:'25px',textAlign:'center', display:'block'}}>Thanks for confirming your subscription!<br></br>
            We hope you have fun using our platform. If you ever need support,
            please feel free to email us at support@loremgaming.com</span>



        </div>

    )


}

export default PopUpModule