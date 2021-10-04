import { useState } from 'react';
import * as convert from 'convert-units';
import { roundToTwo } from '../utils/utilityFuncs';
import { lengthsData, timesData } from '../data/units';

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
    Inch: 'in',
    Year: 'year',
    Month: 'month',
    Week: 'week',
    Day: 'd',
    Hour: 'h',
    Minute: 'min',
    Second: 's',
    Millisecond: 'ms'
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

    if (e.target.name === "leftNumber" || e.target.name === "rightUnit") {

      const newRightNumber = convert(newValues.leftNumber).from(leftUnitShort).to(rightUnitShort);

      newValues.rightNumber = roundToTwo(newRightNumber);

    }

    if (e.target.name === "rightNumber" || e.target.name === "leftUnit") {

      const newLeftNumber = convert(newValues.rightNumber).from(rightUnitShort).to(leftUnitShort);

      newValues.leftNumber = roundToTwo(newLeftNumber);

    }

    if (e.target.name === "measurement") {
      if (newValues.measurement === "Length") {
        newValues.leftUnit = lengthsData[0];
        newValues.rightUnit = lengthsData[0];
      }
      if (newValues.measurement === "Time") {
        newValues.leftUnit = timesData[0];
        newValues.rightUnit = timesData[0];
      }
    }

    setValues(newValues);

  }

  return { values, updateValue };
}
