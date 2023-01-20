import PlanModule from "../PlanModuleComponent/PlanModule";
import PlanSwitchModule from "../PlanSwitchComponent/PlanSwitchModule";
import iconArcade from "../../assets/icon-arcade.svg";
import iconAdvanced from "../../assets/icon-advanced.svg";
import iconPro from "../../assets/icon-pro.svg";

import "./secondStepModule.css";

import { useEffect, useState } from "react";
const SecondStepModule = ({ sendDataParent }) => {
  const [dataSwitch, setDataSwitch] = useState(null);
  const [planModules, setPlanModules] = useState([]);
  const [dataPlan, setDataPlan] = useState({});

  const [timePlan, setTimePlan] = useState("/mo");
  const [pricePlanConstant, setPricePlanConstant] = useState(1);

  useEffect(() => {
    renderPlanModules(changeClickedList());
    sendDataHandler();

    if (dataSwitch) {
      setTimePlan("/yr");
      setPricePlanConstant(10);
    } else {
      setTimePlan("/mo");
      setPricePlanConstant(1);
    }
  }, [dataSwitch, dataPlan, timePlan]);

  const recieveDataSwitch = (data) => {
    setDataSwitch(data);
    setDataPlan((prevDataPlan) => {
      const newDataPlan = { ...prevDataPlan };
      newDataPlan.promotion = data;
      return newDataPlan;
    });
  };

  const recieveDataPlan = (data) => {
    setDataPlan(data);
  };

  const changeClickedList = () => {
    let array = [];

    for (let i = 0; i < planModules.length; i++) {
      if (planModules[i].props.h3Text === dataPlan.name) {
        array.push("planModule_selected");
      } else {
        array.push("planModule");
      }
    }

    return array;
  };

  const aditionalProps = {
    getListFunction: dataPlan,
    dataFunction: recieveDataPlan,
    saleText: "2 months free",
    planDuration: dataSwitch,
  };

  //Monthly : false , Yearly : true

  let generalData = {
    switchData: dataSwitch,
    planSelected: dataPlan,
  };

  const sendDataHandler = () => {
    sendDataParent(generalData);
  };

  const renderPlanModules = (array) => {
    const modules = [
      <PlanModule
        {...aditionalProps}
        nameClass={array[0]}
        key={"1"}
        className="planModule planModule__arcade"
        imgIcon={iconArcade}
        spanText={`${9 * pricePlanConstant}${timePlan}`}
        h3Text={"Arcade"}
      ></PlanModule>,

      <PlanModule
        {...aditionalProps}
        nameClass={array[1]}
        key={"2"}
        className="planModule planModule__advanced"
        imgIcon={iconAdvanced}
        spanText={`${12 * pricePlanConstant}${timePlan}`}
        h3Text={"Advanced"}
      ></PlanModule>,

      <PlanModule
        {...aditionalProps}
        nameClass={array[2]}
        key={"3"}
        className="planModule planModule__pro"
        imgIcon={iconPro}
        spanText={`${15 * pricePlanConstant}${timePlan}`}
        h3Text={"Pro"}
      ></PlanModule>,
    ];

    setPlanModules(modules);
  };

  return (
    <>
      <div className="planModules">{planModules}</div>
      <PlanSwitchModule
        dataFunction={recieveDataSwitch}
        textLabel1={"Monthly"}
        textLabel2={"Yearly"}
      ></PlanSwitchModule>
    </>
  );
};

export default SecondStepModule;
