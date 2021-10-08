import { measurementsData } from "../data/units"

export default function Measurements({ measurement, updateMeasureValue }) {
  return (
    <div className="Measurements">

      <pre>{JSON.stringify(measurement, null, 2)}</pre>

      <select
        name="measurement"
        id="measurement"
        value={measurement}
        onChange={(e) => updateMeasureValue(e)}
      >
        {measurementsData.map(measurementData => {
          return (
            <option value={measurementData} key={measurementData}>
              {measurementData}
            </option>
          )
        })}
      </select>
    </div>
  )
}