import React from "react"
import { Slider, Typography, Stack } from "@mui/material"

function displayAmount(x) {
  if (x >= 1000000) {
    return `${x/1000000}M`
  } else if (x >= 1000) {
    return `${x/1000}K`
  }
  return x
}

const SliderComp = ({ min, max, defaultVal, step, onChange, value, label, unit, amount }) => {
  return (
    <>
      <Stack>
        <Typography variant="subtitle1">{label}</Typography>
        <Typography variant="h2">{unit} {displayAmount(amount)}</Typography>
        <Slider
          min={min}
          max={max}
          defaultValue={defaultVal}
          step={step}
          onChange={onChange}
          value={value}
          aria-label="Default"
          valueLabelDisplay="auto"
          sx={{
            color: "#00b3b3",
          }} />
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="caption" color="text.secondary">{unit} {displayAmount(min)}</Typography>
          <Typography variant="caption" color="text.secondary">{unit} {displayAmount(max)}</Typography>
        </Stack>
      </Stack>
    </>
  )
}

export default SliderComp