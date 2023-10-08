import React from 'react'
import SliderComp from './common/SliderComp'
import { Stack } from "@mui/material"

const SliderSelect = ({ data, setData }) => {
  return (
    <>
      <Stack gap={1}>
        <SliderComp
          label="Home Value"
          min={100000}
          max={1000000}
          defaultVal={data.homeValue}
          value={data.homeValue}
          step={10000}
          onChange={(e, value) => {setData({
            ...data,
            homeValue: value,
            downPayment: value * 0.2,
            loanAmount: value * 0.8
          })
          }}
          unit="$"
          amount={data.homeValue} />
        <SliderComp 
          min={0} 
          max={data.homeValue} 
          defaultVal={data.downPayment}
          value={data.downPayment}
          step={1000} onChange={(e, value) => setData({
            ...data,
            downPayment: value,
            loanAmount: data.homeValue - value
          })} 
          label="Down Payment" 
          unit="$" 
          amount={data.downPayment} />
        <SliderComp 
          min={0}  
          max={data.homeValue} 
          defaultVal={data.loanAmount} 
          value={data.loanAmount}
          step={1000} 
          onChange={(e, value) => setData({
            ...data,
            loanAmount: value,
            downPayment: data.homeValue - value
          })} 
          label="Loan Amount" 
          unit="$" 
          amount={data.loanAmount} />
        <SliderComp 
          min={0}  
          max={300} 
          defaultVal={5} 
          step={0.1} 
          onChange={(e, value) => console.log(value)} 
          label="Interest Rate" 
          unit="%" 
          amount={45} />
      </Stack>
    </>
  )
}

export default SliderSelect