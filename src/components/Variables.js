import { useState } from "react";
import Variable from "./Variable";
import { unitsData } from '../data/units';

export default function Variables() {

  // Need way to compare the units
    // Create state 
    // Create hook to compare units and convert input numbers
      // Something needs to handle the input numbers

  const [unitLeft, setUnitLeft] = useState(unitsData[0]);
  const [unitRight, setUnitRight] = useState(unitsData[0]);

  

  return (
    <div className="Variables">
      <div className="variable-container">
        <Variable location="left" unit={unitLeft} setUnit={setUnitLeft}/>
        <Variable location="right" unit={unitRight} setUnit={setUnitRight}/>
      </div>
    </div>
  )
}