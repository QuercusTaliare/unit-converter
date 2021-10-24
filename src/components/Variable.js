import { lengthsData, timesData } from '../data/units';
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export default function Variable({ location, unit, number, updateValue, measurement }) {


  return (
    <div className="Variable">

      <form>
        <div className="form-container">
          <TextField 
            type="text"
            id={`${location}Number`}
            name={`${location}Number`}
            value={number}
            onChange={(e) => updateValue(e)} 
            variant="outlined"
            label="Number"
          />

          <FormControl>
            <InputLabel id={`${location}Unit-label`}>Unit</InputLabel>
            <Select
              name={`${location}Unit`} 
              id={`${location}Unit`} 
              labelId={`${location}Unit-label`}
              label="Unit"
              value={unit}
              onChange={(e) => updateValue(e)}
            >
              {
                (measurement === "Length") 
                &&
                lengthsData.map(lengthData => {
                  return (
                    <MenuItem value={lengthData} key={lengthData}>
                      {lengthData}
                    </MenuItem>
                  )
                }) 
              }
              {
                (measurement === "Time")
                &&
                timesData.map(timeData => {
                  return (
                    <MenuItem value={timeData} key={timeData}>
                      {timeData}
                    </MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
        </div>
      </form>
    </div>
  )
}