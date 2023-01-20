import { useEffect, useState } from "react";
import SliderModule from "../SliderComponent/SliderModule";
import styled from "styled-components";
import "./planSwitchModule.css";

const PlanSwitchModule = ({ textLabel1, textLabel2, dataFunction }) => {
  const [dataHandled, setDataHandled] = useState(null);

  const dataReceiver = (data) => {
    setDataHandled(data);
  };

  const dataSender = () => {
    dataFunction(dataHandled);
  };

  useEffect(() => {
    dataSender();
  }, [dataHandled]);

  /*
    <>
      <div
        style={{
          backgroundColor: "var(--magnolia)",
          padding: "10px",
          margin: "0px auto",
          display: "flex",
          flexFlow: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <label>{textLabel1}</label>
        <SliderModule dataFunction={dataReceiver}></SliderModule>
        <label>{textLabel2}</label>
      </div>
    </>

  */

  return (
    <>
      <div className="planSwitchContainer">
        <label>{textLabel1}</label>
        <SliderModule dataFunction={dataReceiver}></SliderModule>
        <label>{textLabel2}</label>
      </div>
    </>
  );
};

export default PlanSwitchModule;
