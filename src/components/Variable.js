import { units } from '../data/units';

export default function Variable({ location }) {

  // TODO: Dynamically fill in areas that are specific to this component (e.g. left variable vs right variable)

  return (
    <div className="Variable">
      <form>
        <div className="form-container">
          <label htmlFor={`number-${location}`}>
            <input type="text" id={`number-${location}`} name={`number-${location}`} />
          </label>
          <select name={`units-${location}`} id={`units-${location}`}>
            {units.map(unit => {
              return (
                <option value={unit}>
                  {unit}
                </option>
              )
            })}
          </select>
        </div>
      </form>
    </div>
  )
}