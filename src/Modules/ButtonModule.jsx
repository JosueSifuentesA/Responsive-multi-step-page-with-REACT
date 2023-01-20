const ButtonModule = ({
  buttonText,
  colorText,
  bgColour,
  methods = undefined,
  opacity = "1",
}) => {
  let moduleWithMethod = (
    <button
      style={{
        color: `${colorText}`,
        backgroundColor: `${bgColour}`,
        padding: "10px",
        border: `1px solid ${bgColour}`,
        borderRadius: "10px",
        opacity: `${opacity}`,
      }}
      onClick={methods}
    >
      {buttonText}
    </button>
  );
  let moduleWithoutMethod = (
    <button
      style={{
        color: `${colorText}`,
        backgroundColor: `${bgColour}`,
        padding: "10px",
        border: `1px solid ${bgColour}`,
        borderRadius: "10px",
        opacity: `${opacity}`,
      }}
    >
      {buttonText}
    </button>
  );

  let returned;

  methods != null
    ? (returned = moduleWithMethod)
    : (returned = moduleWithoutMethod);

  return returned;
};

export default ButtonModule;
