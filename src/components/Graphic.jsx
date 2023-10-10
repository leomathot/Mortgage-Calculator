import React from 'react'
import { Typography, Stack } from '@mui/material'
import { PieChart } from '@mui/x-charts/PieChart'
import SquareRoundedIcon from '@mui/icons-material/SquareRounded'

function formatAmount(x) {
  let twoDec = x.toFixed(2)
  if (twoDec % 1 == 0) {
    twoDec = parseInt(twoDec).toString()
  }
  // return twoDec.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return twoDec.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}

const gray = '#309080'
const blue = '#30d0e0'

const Graphic = ({ data }) => {

  const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data

  const totalLoanMonths = loanTerm * 12
  const interestPerMonth = interestRate / 100 / 12
  const monthlyPayment =
    (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMonths) / ((1 + interestPerMonth) ** totalLoanMonths - 1)
  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

  return (
    <>
      <Stack gap={2}>
        <Stack>
          <Typography variant='subtitle1'>Monthly Payment</Typography>
          <Typography variant='h1'>$ {formatAmount(monthlyPayment)}</Typography>
        </Stack>
        <Stack
          alignItems={'center'}
          border={1}
          borderRadius={3}
          borderColor='#555555'
          padding={5}
          gap={4}>
          <Stack direction='row' gap={4}>
            <Stack>
              <Typography variant='subtitle1'>Principle</Typography>
              <Typography variant='h2'><SquareRoundedIcon sx={{color: blue}} /> $ {formatAmount(homeValue)}</Typography>
            </Stack>
            <Stack>
              <Typography variant='subtitle1'>Interest</Typography>
              <Typography variant='h2'><SquareRoundedIcon sx={{color: gray}} /> $ {formatAmount(totalInterestGenerated)}
              </Typography>
            </Stack>
          </Stack>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: totalInterestGenerated, color: gray },
                  { id: 1, value: homeValue, color: blue },
                ],
                innerRadius: 70,
                outerRadius: 100,
                paddingAngle: 1,
                cornerRadius: 3,
                startAngle: 0,
                endAngle: 360,
                cx: 200,
              },
            ]}
            width={400}
            height={200}
          />
          <Stack>
            <Typography variant='subtitle1'>Total</Typography>
            <Typography variant='h2'>$ {formatAmount(homeValue + totalInterestGenerated)}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default Graphic