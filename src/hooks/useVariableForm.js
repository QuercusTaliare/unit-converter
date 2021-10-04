import { useState } from 'react';
import * as convert from 'convert-units';
import { roundToTwo } from '../utils/utilityFuncs';

export default function useVariableForm(defaults) {

  const [varValues, setVarValues] = useState(defaults);

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

  function updateVarValue(e) {
    // check if its a number and convert
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(e.target.value);
    }
    
    const newValues = {
      // copy the existing values into it
      ...varValues,
      // update the new value that changed
      [e.target.name]: value,
    }

    const leftUnitShort = unitDict[newValues.leftUnit];
    const rightUnitShort = unitDict[newValues.rightUnit];

    if (e.target.name === "leftNumber" || e.target.name === "rightUnit") {

      const newRightNumber = convert(newValues.leftNumber).from(leftUnitShort).to(rightUnitShort);

      newValues.rightNumber = roundToTwo(newRightNumber);

    }

    if (e.target.name === "rightNumber" || e.target.name === "leftUnit") {

      const newLeftNumber = convert(newValues.rightNumber).from(rightUnitShort).to(leftUnitShort);

      newValues.leftNumber = roundToTwo(newLeftNumber);

    }

    setVarValues(newValues);

  }

  return { varValues, updateVarValue };
}
