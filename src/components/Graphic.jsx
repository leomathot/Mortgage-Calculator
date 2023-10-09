import React from "react"
import { Typography, Stack } from "@mui/material"
import { PieChart } from "@mui/x-charts/PieChart"

const Graphic = ({ data }) => {

  const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data

  const totalLoanMonths = loanTerm * 12
  const interestPerMonth = interestRate / 100 / 12
  const monthlyPayment =
    (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMonths) / ((1 + interestPerMonth) ** totalLoanMonths - 1)
  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

  return (
    <>
      <Stack gap={2} mb={8}>
        <Stack>
          <Typography variant="subtitle1">Monthly Payment</Typography>
          <Typography variant="h1">$ {monthlyPayment.toFixed(2)}</Typography>
        </Stack>
        <Stack
          alignItems={"center"}
          border={1}
          borderRadius={3}
          borderColor="#555555"
          padding={5}
          gap={4}>
          <Stack direction="row" gap={4}>
            <Stack>
              <Typography variant="subtitle1">Principle</Typography>
              <Typography variant="h2">$ {homeValue.toFixed(2)}</Typography>
            </Stack>
            <Stack>
              <Typography variant="subtitle1">Interest</Typography>
              <Typography variant="h2">$ {totalInterestGenerated.toFixed(2)}</Typography>
            </Stack>
          </Stack>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: totalInterestGenerated, color: "#0078a0" },
                  { id: 1, value: homeValue, color: "#00b890" },
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
        </Stack>
      </Stack>
    </>
  )
}

export default Graphic