import React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import { Stack, Typography } from '@mui/material'

const TenureSelect = ({ data, setData }) => {
  return (
    <>
      <FormControl>
        <Typography variant='subtitle1'>Tenure ( Years )</Typography>
        <Stack 
          border={1}
          borderRadius={3}
          borderColor='#555555'
          pt={2} pb={1}>
          <RadioGroup
            row
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue={10}
            name='radio-buttons-group'
            sx={{justifyContent: 'space-around'}}
            onChange={(e, value)=> setData({
              ...data,
              loanTerm: value
            })}
          >
            <FormControlLabel value={5} control={<Radio sx={{'&.Mui-checked': {color: '#00c8a0'}}} />} label='5 Y' labelPlacement='top' />
            <FormControlLabel value={10} control={<Radio sx={{'&.Mui-checked': {color: '#00c8a0'}}} />} label='10 Y' labelPlacement='top' />
            <FormControlLabel value={15} control={<Radio sx={{'&.Mui-checked': {color: '#00c8a0'}}} />} label='15 Y' labelPlacement='top' />
            <FormControlLabel value={20} control={<Radio sx={{'&.Mui-checked': {color: '#00c8a0'}}} />} label='20 Y' labelPlacement='top' />
            <FormControlLabel value={25} control={<Radio sx={{'&.Mui-checked': {color: '#00c8a0'}}} />} label='25 Y' labelPlacement='top' />
          </RadioGroup>
        </Stack>
      </FormControl>
    </>
  )
}

export default TenureSelect