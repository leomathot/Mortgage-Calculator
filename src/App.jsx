
import { useState } from 'react'
import Navbar from './components/Navbar'
import SliderSelect from './components/SliderSelect'
import TenureSelect from './components/TenureSelect'
import Graphic from './components/Graphic'
import Container from '@mui/material/Container'
import { Grid, Stack } from '@mui/material'

function App() {

  const [data, setData] = useState({
    homeValue: 400000,
    downPayment: 80000,
    loanAmount: 320000,
    loanTerm: 3000,
  })

  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 6 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Stack gap={3}>
              <SliderSelect data={data} setData={setData}/>
              <TenureSelect />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Graphic />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App
