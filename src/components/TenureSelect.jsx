import React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import { Typography } from "@mui/material"

const TenureSelect = ({ data, setData }) => {
  return (
    <>
      <FormControl>
        <Typography variant="subtitle1">Tenure</Typography>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={10}
          name="radio-buttons-group"
          sx={{justifyContent: "space-around"}}
          onChange={(e, value)=> setData({
            ...data,
            loanTerm: value
          })}
        >
          <FormControlLabel value={5} control={<Radio sx={{'&.Mui-checked': {color: "#00c8a0"}}} />} label="5 Years" labelPlacement="top" />
          <FormControlLabel value={10} control={<Radio sx={{'&.Mui-checked': {color: "#00c8a0"}}} />} label="10 Years" labelPlacement="top" />
          <FormControlLabel value={15} control={<Radio sx={{'&.Mui-checked': {color: "#00c8a0"}}} />} label="15 Years" labelPlacement="top" />
          <FormControlLabel value={20} control={<Radio sx={{'&.Mui-checked': {color: "#00c8a0"}}} />} label="20 Years" labelPlacement="top" />
          <FormControlLabel value={25} control={<Radio sx={{'&.Mui-checked': {color: "#00c8a0"}}} />} label="25 Years" labelPlacement="top" />
        </RadioGroup>
      </FormControl>
    </>
  )
}

export default TenureSelect