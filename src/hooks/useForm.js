import { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function convertUnits(unitOneNumber, unitOne, unitTwo) {
    if (unitOne === "Kilometer" && unitTwo === "Kilometer") {
      return parseInt(unitOneNumber)
    }
    if (unitOne === "Kilometer" && unitTwo === "Meter") {
      return parseInt(unitOneNumber) * 1000
    }

  }

  function updateValue(e) {
    // check if its a number and convert
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(e.target.value);
    }

    // Create logic to change other state values based on what's been updated in the form
      // If leftNumber is altered, then rightNumber is altered
      // If rightNumber is altered, then leftNumber is altered
      // If leftUnit is altered, then leftNumber and rightNumber are altered
    
    const newValues = {
      // copy the existing values into it
      ...values,
      // update the new value that changed
      [e.target.name]: value,
    }

    if (e.target.name === "leftNumber") {
      const newRightNumber = convertUnits(newValues.leftNumber, newValues.leftUnit, newValues.rightUnit)
      
      newValues.rightNumber = newRightNumber;
    }

    if (e.target.name === "rightNumber") {
      const newLeftNumber = convertUnits(newValues.rightNumber, newValues.leftUnit, newValues.rightUnit)

      newValues.leftNumber = newLeftNumber;
    }

    // TODO: Create logic for altering leftUnit and rightUnit


    setValues(newValues);

    // setValues({
    //   // copy the existing values into it
    //   ...values,
    //   // update the new value that changed
    //   [e.target.name]: value,
    // });
  }

  return { values, updateValue };
}
