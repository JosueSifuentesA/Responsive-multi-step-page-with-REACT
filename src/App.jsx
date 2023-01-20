import FirstStepModule from "./Modules/FirstStepModule/FirstStepModule";
import SecondStepModule from "./Modules/SecondStepModule/SecondStepModule";
import ModuleContainer from "./Modules/ModuleContainerComponent/ModuleContainer";
import ThirdStepModule from "./Modules/ThirdStepComponent/ThirdStepModule";

import ButtonModule from "./Modules/ButtonModule";

import ContainerModule from "./Modules/ContainerComponent/ContainerModule";
import StepModule from "./Modules/StepComponent/StepModule";
import PopUpModule from "./Modules/PopUpModule";

import "./root.css";
import { useEffect, useState } from "react";
import FourthStepModule from "./Modules/FourthStepComponent/FourthStepModule";

const App = () => {
  const [step, setStep] = useState(1);
  const [index, setIndex] = useState(1);
  const [state, setState] = useState();

  const [firstModuleData, setFirstModuleData] = useState(null);
  const [secondModuleData, setSecondModuleData] = useState({});
  const [thirdModuleData, setThirdModuleData] = useState({});

  useEffect(() => {
    buttonEvents();
    setStep(index);
  }, [index, step, firstModuleData, secondModuleData, thirdModuleData]);

  const recieveFirstModuleData = (data) => {
    setFirstModuleData(data);
  };

  const recieveSecondModuleData = (data) => {
    setSecondModuleData(data);
  };

  const recieveThirdModuleData = (data) => {
    setThirdModuleData(data);
  };

  let firstStep = (
    <ModuleContainer
      h1Text={"Personal Info"}
      spanText={"Please provide your name, email address,and your phone number"}
      stepModule={
        <FirstStepModule
          width={"100%"}
          height={"230px"}
          dataFunction={recieveFirstModuleData}
        />
      }
    />
  );

  let secondStep = (
    <ModuleContainer
      h1Text={"Select your plan"}
      spanText={"You have the option of monthly or yearly biling"}
      stepModule={<SecondStepModule sendDataParent={recieveSecondModuleData} />}
    />
  );

  let thirdStep = (
    <ModuleContainer
      h1Text={"Pick add-ons"}
      spanText={"Add-ons help enhance your gaming experience."}
      stepModule={
        <ThirdStepModule
          dataFunction={recieveThirdModuleData}
          dataRecieved={secondModuleData}
        />
      }
    />
  );

  let fourthStep = (
    <ModuleContainer
      h1Text={"Finishing up"}
      spanText={"Double-check everything looks OK before confirming"}
      stepModule={
        <FourthStepModule information={[secondModuleData, thirdModuleData]} />
      }
    />
  );

  let popUpModule = <ModuleContainer stepModule={<PopUpModule />} />;

  let module;

  switch (step) {
    case 1:
      module = firstStep;
      break;

    case 2:
      module = secondStep;
      break;

    case 3:
      module = thirdStep;
      break;

    case 4:
      module = fourthStep;
      break;

    case 5:
      module = popUpModule;
      break;

    default:
      console.log(console.error("Se paso de modulos"));
  }

  const goNextMethod = () => {
    setIndex(index + 1);
  };

  const goBackMethod = () => {
    setIndex(index - 1);
    console.log("Back-index:" + index);
  };

  const nextButton = (
    <ButtonModule
      buttonText={"Next Step"}
      colorText={"white"}
      bgColour={"var(--marineblue)"}
      methods={goNextMethod}
    />
  );

  const nextButtonDisabled = (
    <ButtonModule
      buttonText={"Next Step"}
      colorText={"white"}
      bgColour={"var(--marineblue)"}
      opacity={"0.6"}
    />
  );

  const backButton = (
    <ButtonModule
      buttonText={"Go Back"}
      colorText={"var(--coolGray)"}
      bgColour={"white"}
      methods={goBackMethod}
    />
  );

  const confirmButton = (
    <ButtonModule
      buttonText={"Confirm"}
      colorText={"white"}
      bgColour={"var(--purplishBlue)"}
      methods={goNextMethod}
    />
  );

  function buttonEvents() {
    if (step < 2) {
      setState(nextButton);

      if (firstModuleData == null) {
        setState(nextButtonDisabled);
      }
    } else if (step == 4) {
      setState(
        <>
          {" "}
          {backButton} {confirmButton}{" "}
        </>
      );
    } else if (step > 4) {
      setState(<></>);
    } else {
      setState(
        <>
          {backButton} {nextButton}
        </>
      );

      if (
        step == 2 &&
        secondModuleData != null &&
        secondModuleData.planSelected != null
      ) {
        if (Object.keys(secondModuleData.planSelected).length < 4) {
          setState(
            <>
              {backButton} {nextButtonDisabled}
            </>
          );
        } else {
          setState(
            <>
              {backButton} {nextButton}
            </>
          );
        }
      }
    }
  }

  const buttonHandler = (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {state}
    </div>
  );

  return (
    <>
      <ContainerModule
        stepModule={
          <StepModule
            height={"20px"}
            width={"20px"}
            borderColor={"white"}
            textColor={"white"}
            selectedTextColor={"var(--marineblue)"}
            stepNumber={"4"}
            actualStep={step}
            spanList={["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"]}
          />
        }
        moduleHandler={module}
        buttonHandler={buttonHandler}
      />
    </>
  );
};
export default App;
