import { useState } from 'react';
import { convertUnits } from '../utils/utilityFuncs';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    // check if its a number and convert
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(e.target.value);
    }
    
    const newValues = {
      // copy the existing values into it
      ...values,
      // update the new value that changed
      [e.target.name]: value,
    }

    if (e.target.name === "leftNumber" || e.target.name === "rightUnit") {
      const newRightNumber = convertUnits(newValues.leftNumber, newValues.leftUnit, newValues.rightUnit)
      
      newValues.rightNumber = newRightNumber;
    }

    if (e.target.name === "rightNumber" || e.target.name === "leftUnit") {
      const newLeftNumber = convertUnits(newValues.rightNumber, newValues.leftUnit, newValues.rightUnit)

      newValues.leftNumber = newLeftNumber;
    }

    setValues(newValues);

  }

  return { values, updateValue };
}
