import { unitsData } from '../data/units';

export default function Variable({ location, unit, number, updateValue }) {

  return (
    <div className="Variable">

      <pre>{JSON.stringify(number, null, 2)}</pre>
      <pre>{JSON.stringify(unit, null, 2)}</pre>

      <form>
        <div className="form-container">
          <label htmlFor={`${location}Number`}>
            <input 
              type="text" 
              id={`${location}Number`} 
              name={`${location}Number`} 
              value={number}
              onChange={(e) => updateValue(e)}
            />
          </label>
          <select 
            name={`${location}Unit`} 
            id={`${location}Unit`} 
            value={unit}
            onChange={(e) => updateValue(e)}
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