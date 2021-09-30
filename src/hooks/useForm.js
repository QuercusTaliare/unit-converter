import { useState } from 'react';
import * as convert from 'convert-units';

export default function useForm(defaults) {

  const [values, setValues] = useState(defaults);

  const unitDict = {
    Kilometer: 'km',
    Meter: 'm',
    Centimeter: 'cm',
    Millimeter: 'mm',
    Mile: 'mi',
    Yard: 'yd',
    Foot: 'ft',
    Inch: 'in'
  }

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

    const leftUnitShort = unitDict[newValues.leftUnit];
    const rightUnitShort = unitDict[newValues.rightUnit];

    // TODO: Create limit on decimal point
      // Create formatting when decimal point isn't needed


    if (e.target.name === "leftNumber" || e.target.name === "rightUnit") {

      newValues.rightNumber = convert(newValues.leftNumber).from(leftUnitShort).to(rightUnitShort);

    }

    if (e.target.name === "rightNumber" || e.target.name === "leftUnit") {
      
      newValues.leftNumber = convert(newValues.rightNumber).from(rightUnitShort).to(leftUnitShort);

    }

    setValues(newValues);

  }

  return { values, updateValue };
}
