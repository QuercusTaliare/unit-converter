import Variable from "./Variable";
import { unitsData } from '../data/units';
import useForm from "../hooks/useForm";

export default function Variables() {

  const { values, updateValue } = useForm({
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
          unit={values.leftUnit} 
          number={values.leftNumber}
          updateValue={updateValue}
        />
        <Variable 
          location="right" 
          unit={values.rightUnit} 
          number={values.rightNumber}
          updateValue={updateValue}
        />
      </div>
    </div>
  )
}