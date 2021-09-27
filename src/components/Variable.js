import { unitsData } from '../data/units';

export default function Variable({ location, unit, setUnit }) {

  return (
    <div className="Variable">

      <pre>{JSON.stringify(unit, null, 2)}</pre>

      <form>
        <div className="form-container">
          <label htmlFor={`number-${location}`}>
            <input type="text" id={`number-${location}`} name={`number-${location}`} />
          </label>
          <select 
            name={`units-${location}`} 
            id={`units-${location}`} 
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          >
            {unitsData.map(unitData => {
              return (
                <option value={unitData}>
                  {unitData}
                </option>
              )
            })}
          </select>
        </div>
      </form>
    </div>
  )
}