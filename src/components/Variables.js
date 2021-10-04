import Variable from "./Variable";
import { unitsData } from '../data/units';
import useVariableForm from "../hooks/useVariableForm";

export default function Variables() {

  const { varValues, updateVarValue } = useVariableForm({
    leftUnit: unitsData[0],
    rightUnit: unitsData[0],
    leftNumber: 0,
    rightNumber: 0
  })

  return (
    <div className="Variables">
      <div className="variable-container">
        <Variable 
          location="left" 
          unit={varValues.leftUnit} 
          number={varValues.leftNumber}
          updateValue={updateVarValue}
        />
        <Variable 
          location="right" 
          unit={varValues.rightUnit} 
          number={varValues.rightNumber}
          updateValue={updateVarValue}
        />
      </div>
    </div>
  )
}