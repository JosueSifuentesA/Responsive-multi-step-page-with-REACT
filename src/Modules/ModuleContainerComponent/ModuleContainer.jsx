import './moduleContainer.css'


const ModuleContainer = ({stepModule,h1Text,spanText})=>{


    return (
        <div className='moduleContainer'>
            <h1 className="moduleContainer_h1">{h1Text}</h1>
            <span className="moduleContainer_span">{spanText}</span>
            {stepModule}
        </div>
    )


}

export default ModuleContainer;