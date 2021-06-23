import React from "react";

const Input = (props) => {
  let inputElement = null;
  // const inputClasses = []

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={""}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={""}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
      case "array":
        inputElement = (
          <div>Hello{console.log(props)}</div>
        )
        break;
    default:
      inputElement = (
        <input
          className={""}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={""}>
      <label style={{ marginRight: "1rem" }}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
