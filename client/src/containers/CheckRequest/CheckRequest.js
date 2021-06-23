import React, { useState } from "react";
import Input from "../../components/UI/Input/Input";

const CheckRequest = () => {
  const [checkRequestForm, setCheckRequestForm] = useState({
    requestDate: {
      elementType: "input",
      elementConfig: {
        type: "date",
        // placeholder: "Today's Date",
        label: "Today's Date",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    checkAmount: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Check Amount",
        label: "Check Amount",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    checkPayableTo: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Martin Luther",
        label: "Check Payable To",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    checkPayableToStreet: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "123 Main St.",
        label: "Street Address",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    checkPayableToCity: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Portland",
        label: "City",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    checkPayableToState: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "OR",
        label: "State",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    checkPayableToZip: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "93653",
        label: "Zip Code",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    expenses: {
      elementType: "array",
      elementConfig: {
        type: "text",
        placeholder: "93653",
        label: "Zip Code",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    mailCheckToCheckPayableAddress: {
      elementType: "input",
      elementConfig: {
        type: "checkbox",
        // placeholder: "93653",
        label: "Mail check to above address",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    returnCheckToRequestor: {
      elementType: "input",
      elementConfig: {
        type: "checkbox",
        // placeholder: "93653",
        label: "Return check to requestor",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    allReceiptsAttached: {
      elementType: "input",
      elementConfig: {
        type: "checkbox",
        // placeholder: "93653",
        label: "All receipts attached",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    allReceiptsToFollow: {
      elementType: "input",
      elementConfig: {
        type: "checkbox",
        // placeholder: "93653",
        label: "All receipts to follow",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    noReceiptsPossible: {
      elementType: "input",
      elementConfig: {
        type: "checkbox",
        // placeholder: "93653",
        label: "No receipts possible",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    independentContractor: {
      elementType: "input",
      elementConfig: {
        type: "checkbox",
        // placeholder: "93653",
        label: "Independent Contractor",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    completedW9FormAttached: {
      elementType: "input",
      elementConfig: {
        type: "checkbox",
        // placeholder: "93653",
        label: "Completed W-9 Form Attached",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    contractOngoing: {
      elementType: "input",
      elementConfig: {
        type: "checkbox",
        // placeholder: "93653",
        label: "Contract Ongoing/W-9 on file",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  };

  const inputChangedHandler = (event, inputIdentifier) => {
    // const updatedFormElement = updateObject(checkRequestForm[inputIdentifier], {
    //   value: event.target.value,
    //   valid: checkValidity(
    //     event.target.value,
    //     checkRequestForm[inputIdentifier].validation
    //   ),
    //   touched: true,
    // });

    const updatedFormElement = {
      ...checkRequestForm[inputIdentifier],
      ...{
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          checkRequestForm[inputIdentifier].validation
        ),
        touched: true,
      },
    };

    // const updatedCheckRequestForm = updateObject(checkRequestForm, {
    //   [inputIdentifier]: updatedFormElement,
    // });

    const updatedCheckRequestForm = {
      ...checkRequestForm,
      ...{
        [inputIdentifier]: updatedFormElement,
      },
    };

    // console.log(updatedFormElement);
    let formIsValid = true;
    for (let inputIdentifier in updatedCheckRequestForm) {
      formIsValid =
        updatedCheckRequestForm[inputIdentifier].valid && formIsValid;
    }
    setCheckRequestForm(updatedCheckRequestForm);
    setFormIsValid(formIsValid);
  };

  const formElementsArray = [];
  for (let key in checkRequestForm) {
    formElementsArray.push({
      id: key,
      config: checkRequestForm[key],
    });
  }
  let form = (
    <form onSubmit={console.log("SUBMIT")}>
      {formElementsArray.map((formElement) => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(event) => inputChangedHandler(event, formElement.id)}
          label={formElement.config.elementConfig.label}
        />
      ))}
    </form>
  );

  return (
    <>
      <h2 className="text-center">RB Community Church Check Request</h2>
      {form}
    </>
  );
};

export default CheckRequest;
