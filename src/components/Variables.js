import Variable from "./Variable";
import { measurementsData, lengthsData } from '../data/units';
import useForm from "../hooks/useForm";
import Measurements from "./Measurements";

export default function Variables() {

  const { values, updateValue } = useForm({
    leftUnit: lengthsData[0],
    rightUnit: lengthsData[0],
    leftNumber: 0,
    rightNumber: 0,
    measurement: measurementsData[0]
  })

  return (
    <div className="Variables">
      <Measurements 
        measurement={values.measurement}
        updateMeasureValue={updateValue}
      />
      <div className="variable-container">
        <Variable 
          location="left" 
          unit={values.leftUnit} 
          number={values.leftNumber}
          updateValue={updateValue}
          measurement={values.measurement}
        />
        <Variable 
          location="right" 
          unit={values.rightUnit} 
          number={values.rightNumber}
          updateValue={updateValue}
          measurement={values.measurement}
        />
      </div>
    </div>
  )
}