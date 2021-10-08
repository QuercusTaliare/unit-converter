import { measurementsData } from "../data/units"
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  root: {
    width: 150
  }
})

export default function Measurements({ measurement, updateMeasureValue }) {

  const classes = useStyles();

  return (
    <div className="Measurements">

      {/* <pre>{JSON.stringify(measurement, null, 2)}</pre> */}

      <FormControl>
        <InputLabel id="measurement-label">Measurement</InputLabel>
        <Select
          name="measurement"
          labelId="measurement-label"
          id="measurement"
          value={measurement}
          label="Measurement"
          onChange={(e) => updateMeasureValue(e)}
          className={classes.root}
        >
          {measurementsData.map(measurementData => {
            return (
              <MenuItem value={measurementData} key={measurementData}>
                {measurementData}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>

    </div>
  )
}