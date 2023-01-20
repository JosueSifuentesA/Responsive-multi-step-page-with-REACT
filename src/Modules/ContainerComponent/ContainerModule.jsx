import "./containerModule.css";
import image from "../../assets/bg-sidebar-mobile.svg";
const ContainerModule = ({ stepModule, moduleHandler, buttonHandler }) => {
  return (
    <div className="container">
      <div className="container_stepHandler">{stepModule}</div>

      <div className="container_formHandler">
        <div className="container_moduleHandler">{moduleHandler}</div>

        <div className="container_buttonHandler">{buttonHandler}</div>
      </div>
    </div>
  );
};

export default ContainerModule;
