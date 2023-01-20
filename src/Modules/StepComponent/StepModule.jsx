import "./stepModule.css";

const StepModule = ({
  stepNumber,
  borderColor,
  textColor,
  selectedTextColor,
  width,
  height,
  actualStep,
  spanList,
}) => {
  let listSteps = [];

  for (let i = 0; i < stepNumber; i++) {
    let classTag = "stepDiv_unselected";
    let stepStyle = {
      borderColor: `${borderColor}`,
      color: `${textColor}`,
      width: `${width}`,
      height: `${height}`,
    };
    //simplemente saque el stepStyle del bucle for y todo se fue al crj

    if (i + 1 == actualStep) {
      stepStyle = {
        ...stepStyle,
        color: `${selectedTextColor}`,
      };

      classTag = "stepDiv_selected";
    }

    listSteps[i] = (
      <div key={`stepDiv_${i + 1}`} className="stepDiv">
        <div className={classTag} style={stepStyle} key={i + 1}>
          <label
            key={`step_label_${i + 1}`}
            style={{ color: "inherit" }}
            className="step_label"
          >
            {i + 1}
          </label>
        </div>

        <div className="stepDiv_text" key={`step_text_${i + 1}`}>
          <label style={{ color: `${textColor}` }}>
            <strong style={{ color: "inherit" }}>{`STEP ${i + 1}`}</strong>
          </label>
          <span style={{ width: "100px", color: "white" }}>{spanList[i]}</span>
        </div>
      </div>
    );
  }

  if (actualStep > stepNumber) {
    listSteps[stepNumber - 1] = (
      <div key={`stepDiv_${stepNumber}`} className="stepDiv">
        <div
          className="stepDiv_selected"
          style={{
            borderColor: `${borderColor}`,
            color: `${selectedTextColor}`,
            width: `${width}`,
            height: `${height}`,
          }}
          key={stepNumber}
        >
          <label
            key={`step_label_${stepNumber}`}
            style={{ color: "inherit" }}
            className="step_label"
          >
            {stepNumber}
          </label>
        </div>

        <div className="stepDiv_text" key={`step_text_${stepNumber}`}>
          <label style={{ color: "white" }}>
            <strong style={{ color: "inherit" }}>{`STEP ${stepNumber}`}</strong>
          </label>
          <span style={{ width: "100px", color: "white" }}>
            {spanList[stepNumber - 1]}
          </span>
        </div>
      </div>
    );
  }

  return listSteps;
};

export default StepModule;
