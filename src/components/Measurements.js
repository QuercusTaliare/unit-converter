import { measurementsData } from "../data/units"

export default function Measurements({ measurement, updateMeasureValue }) {
  return (
    <div class="Measurements">

      <pre>{JSON.stringify(measurement, null, 2)}</pre>

      <select
        name="measurement"
        id="measurement"
        value={measurement}
        onChange={(e) => updateMeasureValue(e)}
      >
        {measurementsData.map(measurementData => {
          return (
            <option value={measurementData}>
              {measurementData}
            </option>
          )
        })}
      </select>
    </div>
  )
}